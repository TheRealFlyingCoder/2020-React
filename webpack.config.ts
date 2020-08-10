import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import WebpackPwaManifest from 'webpack-pwa-manifest';
import ManifestPlugin from 'webpack-manifest-plugin';
import WorkboxPlugin from 'workbox-webpack-plugin';
import nodeExternals from 'webpack-node-externals';

import pwaManifest from './public/manifest';
import tsconfig from './tsconfig.json';

//Want a progressive app? start here
const isPWA = false;

const config = (env: 'production' | 'development' | 'server'): webpack.Configuration => {
	const production = env !== 'development';
	const client = env === 'production' || env === 'development';

	//To save duplication across 3 files, we are using TSCONFIG.json to track our aliases
	//as it's the only one we can't programatically fille
	const webpackAliases: {[key: string]: string} = {};
	const paths: {[key: string]: string[]} = tsconfig.compilerOptions.paths;
	//For each tsconfig path, we need to resolve the absolute path from here.
	Object.keys(paths).forEach(
		key => (webpackAliases[key] = path.resolve(__dirname, `src/${paths[key][0]}`)),
	);

	return {
		mode: production ? 'production' : 'development',
		target: client ? 'web' : 'node',
		//When using the dev server we build inline-source-maps
		devtool: production ? false : 'inline-source-map',
		// webpack will take the files from ./src/index on client builds and server.tsx on server builds
		entry: client ? './src/index' : './server',
		//For SSR we need to register the node externals
		externals: client ? [] : [nodeExternals()],
		// and output it into /dist as bundle.js
		output: {
			path: path.join(__dirname, '/dist'),
			filename: client ? '[name].[hash].js' : 'server.js',
			chunkFilename: '[name].[hash].js',
			publicPath: '/'
		},
		resolve: {
			// adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
			// we've removed JSX files as those shouldn't be used in this project
			extensions: ['.ts', '.tsx', '.js', '.json'],
			//Adding in aliases to make importing easier, for example (import Something from '~/assets/something')
			//Set new aliases for any major folders, and also add it to the tsconfig.json
			alias: webpackAliases,
		},
		module: {
			rules: [
				// we use babel-loader to load our jsx and tsx files
				{
					test: /\.(ts|js)x?$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
					},
				},
				{
					//Images and the like can be moved via file-loader
					test: /\.(ico|png|jpg|gif|svg)$/i,
					loader: 'file-loader',
					options: {
						//We will put everything flat in the images folder, but during a production
						//build we will use hash names for versioning
						outputPath: 'images',
						name: production ? '[contenthash].[ext]' : '[name].[ext]',
					},
				},
				// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
				{
					enforce: 'pre',
					test: /\.js$/,
					loader: 'source-map-loader',
				},
			],
		},
		plugins: client ? [
			new CleanWebpackPlugin(),
			//Inject the public html template
			new HtmlWebpackPlugin({
				template: 'public/index.html',
				favicon: 'public/favicon.ico',
			}),
			
			...isPWA ? [
				//Generate our progressive web app manifest
				new WebpackPwaManifest(pwaManifest),
				//This isn't always necessary, but no harm in having an asset manifest file
				//when it comes to code splitting / chunking and tracking of files
				new ManifestPlugin({
					fileName: 'asset-manifest.json',
				}),
				//Use Googles Workbox to generate a precaching Service Worker
				new WorkboxPlugin.GenerateSW({
					clientsClaim: true,
					skipWaiting: true,
					//Development builds can be way bigger but we still want the service
					//worker to behave normally
					maximumFileSizeToCacheInBytes: (production ? 2 : 10) * 1024 * 1024,
				}),
			] : [],			
			... production ? [] : [new ForkTsCheckerWebpackPlugin()]
		] : [],
		devServer: {
			hot: true,
			historyApiFallback: true,
			open: true,
		},
	};
};

export default config;
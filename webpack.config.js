const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  //Our starting point as always is the index.js file in src
  entry: './src/index.js',
  //When using the dev server we build inline-source-maps
  devtool: 'inline-source-map',
  resolve: {
    //We allow jsx but I mostly just use js functional components
    extensions: ['.js', 'jsx'],
    alias: { //An alias lets you quickly reference common files anywhere, eg: `import Theme from 'Theme';`
      //Generic Alias for the source
      '~': path.resolve(__dirname, './src'),
      //The Theme provider which will likely be used on every .styles.js file
      'Theme': path.resolve(__dirname, './src/styles/style.ts')
    }
  },
  output: {
    //Some deployment tools expect a 'build' folder so you can change this accordingly
    path: path.join(__dirname, '/dist'), 
    //Bundle that bad boy up until we do code splitting
    filename: 'bundle.min.js'
  },
  module: {
    rules: [
      {
        //For our JS, use babel
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        //Images and the like can be moved via file-loader
        test: /\.(ico|png|jpg|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          //We will put everything flat, in images but during a production
          //build we will use hash names for versioning
          outputPath: 'images',
          name(file) {
            if (process.env.NODE_ENV === 'development') {
              return '[name].[ext]';
            }

            return '[contenthash].[ext]';
          },
        },
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader"
      }
  ]
  },
  plugins: [
    //Grab our html template and icon to piece together
    new HtmlWebpackPlugin({
      template: './config/templates/index.html',
      favicon: './src/assets/favicon.ico'
    }),
    //This isn't always necessary, but no harm in having a manifest file
    //when it comes to code splitting / chunking
    new ManifestPlugin(),
  ]
}
const presets = [
	[
		//Use the babel presets for browsers (Makes use of browserlistrc.js)
		'@babel/preset-env',
		{
			useBuiltIns: 'entry',
			corejs: '3.2',
		},
	],
	//Typesscript preset
	'@babel/preset-typescript',
	//General react preset
	'@babel/preset-react',
	//Remove the need for importing emotion on every object:
	// /* @jsx jsx */
	// import { jss, css } from '@emotion.core';
	'@emotion/babel-preset-css-prop',
];
const plugins = [
	//Can't live without the object rest spread
	'@babel/proposal-object-rest-spread',
];

if (process.env['ENV'] === 'prod') {
	//Dynamically add plugins for production build
	//plugins.push(...);
}

module.exports = {presets, plugins};

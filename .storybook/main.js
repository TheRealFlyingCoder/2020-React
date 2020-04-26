module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    webpackFinal: async config => {
        //Storybook needs a portion of the webpack, but this is a commonJS module
        //The webpack config is a typescript file and also an ES Module
        //So we have to do some work to let node handle it

        //First we have to load ESM so we can require ES Modules
        require = require('esm')(module); 
        //Then we register ts-node to Node, so that it can handle .ts files
        require('ts-node').register()
        //Finally we can bring that bad boy in
        const webpack = require('../webpack.config.ts');
        //Oddly it comes through as an object with default being the function
        const webpackConfig = webpack.default('storybook');
        //Now that we've got the package config lets take the two parts we need
        config.module = webpackConfig.module;
        config.resolve = webpackConfig.resolve;

        return config;
    },
};
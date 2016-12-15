const path = require('path');
const webpack = require('webpack');
const loaders = require('./loaders');
const preloaders = require('./preloaders');

module.exports = {
  entry: ['./src/app.ts'],
    output: {
        path: path.resolve(__dirname, "../build"),
        publicPath: "assets/",
        filename: "bundle.js"
    },
    devtool: 'source-map',
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.html', '.ts']
    },
    module: {
        preLoaders: preloaders,
        loaders: loaders
    },
    tslint: {
        configuration: {
            rules: {
                quotemark: [true, 'single']
            }
        },
        // enables type checked rules like 'for-in-array' 
        // uses tsconfig.json from current working directory 
        typeCheck: true,
        // can specify a custom config file relative to current directory 
        // 'tslint-custom.json' 
        configFile: false,
        // tslint errors are displayed by default as warnings 
        // set emitErrors to true to display them as errors 
        emitErrors: false,
        // tslint does not interrupt the compilation by default 
        // if you want any file with tslint errors to fail 
        // set failOnHint to true 
        failOnHint: true
    }
};
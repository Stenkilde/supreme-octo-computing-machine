const path = require('path');
const webpack = require('webpack');
const loaders = require('./loaders');

module.exports = {
  entry: ['./src/app.ts'],
    output: {
        filename: 'build.js',
        path: 'build'
    },
    devtool: 'source-map',
    resolve: {
        root: __dirname,
        extensions: ['', '.html', '.ts']
    },
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin()
    // ],
    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                loader: 'tslint-loader'
            }
        ],
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
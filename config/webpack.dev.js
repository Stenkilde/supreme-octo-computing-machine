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
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }
};
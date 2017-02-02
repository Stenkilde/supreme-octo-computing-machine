'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// Loaders
const Loaders = require('./loaders');
const Preloaders = require('./preloaders');

module.exports = {
    
    entry: './src/App.ts',
    
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.css']
    },
    
    module: {
        preLoaders: Preloaders,
        loaders: Loaders
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};
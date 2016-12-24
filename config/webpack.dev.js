'use strict';

var webpack = require('webpack');
var preloaders = require('./preloaders.js');
var loaders = require('./loaders.js');

module.exports = {
    entry: './src/app.js',
    output: {
        path: './build',
        filename: 'bundle.js',
        publicPath: "/assets/"
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['', '.js']
    },

    module: {
        preLoaders: preloaders,
        loaders: loaders
    },
    jshint: {
        camelcase: true,
        emitErrors: false,
        failOnHint: false,
        esversion: 6
    }
};
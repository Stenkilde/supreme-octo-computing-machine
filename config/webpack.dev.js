'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const NgAnnotatePlugin = require('ng-annotate-webpack-plugin');
const path = require('path');

module.exports = {

    entry: './src/app.ts',

    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },

    module: {

        preloaders: [
            {
                test: /\.ts$/,
                loader: 'tslint'
            }
        ],

        loaders: [
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.ts$/,
                loader: 'ts'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!postcss!sass'
            }
        ]
    },

    postcss: function() {
        return [autoprefixer];
    },

    node: {
        fs: "empty"
    },

    plugins: [
        new NgAnnotatePlugin({
            add: true
        })
    ]
};

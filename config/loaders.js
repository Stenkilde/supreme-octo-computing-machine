const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
    {
        test: /\.ts(x?)$/,
        loader: 'babel-loader!ts-loader'
    },
    {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'raw'
    },
    { 
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
    }
];
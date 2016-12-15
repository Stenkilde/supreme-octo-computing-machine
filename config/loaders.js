module.exports = [
    {
        test: /\.ts(x?)$/,
        loader: 'babel-loader!ts-loader'
    },
    { 
        test: /\.css$/, 
        loaders: [
            'style-loader',
            'css-loader?importLoaders=1',
            'postcss-loader'
        ]
    }
];
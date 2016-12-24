module.exports = [
    {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ['es2015']
        }
    },
    {
        test: /\.css$/,
        loaders: [
            'style-loader',
            'css-loader?importLoaders=1',
            'postcss-loader'
        ]
    },
    {
        test: /\.html$/,
        loader: "html"
    }
];
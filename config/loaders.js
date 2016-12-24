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
        test: /\.html$/,
        loader: "html"
    }
];
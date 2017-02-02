module.exports = [
    {
        test: /\.ts$/,
        loader: 'tslint'
    },
    {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'typed-css-modules'
    }
];
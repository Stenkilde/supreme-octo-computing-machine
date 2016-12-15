var path = require("path");
module.exports = {
  entry: ['./src/app.js'],
    output: {
        filename: 'build.js',
        path: 'build'
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.js']
    }
};
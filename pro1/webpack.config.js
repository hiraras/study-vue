
const webpack = require('webpack');


module.exports = {
    mode: process.env.NODE_ENV,
    entry: __dirname + '/public/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    devServer: {
        inline: true,
        contentBase: './',
        openPage: '/public',
        hot: true,
        watchOptions: {
            poll: true
        }
    },
    module: {

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
}
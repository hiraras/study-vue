

module.exports = {
    entry: __dirname + '/public/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    devServer: {
        inline: true,
        contentBase: './public'
    },
    module: {

    },
    plugins: [],
}
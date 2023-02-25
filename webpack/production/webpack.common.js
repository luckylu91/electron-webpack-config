const path = require('path');
// const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: "production",
    node: {
        global: true,
    },
    output: {
        filename: '[name].js',
    },
    resolve: {
        extensions: [ '.ts', '.js' ],
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: 'sass-loader'
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    optimization: {
        minimize: false
    },
};
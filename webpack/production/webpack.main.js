const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    target: 'electron-main',
    entry: {
        main: './src/main.ts'
    },
});
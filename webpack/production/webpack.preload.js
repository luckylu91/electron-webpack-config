const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    target: 'electron-preload',
    entry: {
        preload: './src/preload.ts'
    },
});
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    target: 'electron-renderer',
    entry: {
        renderer: './src/renderer.ts'
    },
});
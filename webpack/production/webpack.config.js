const main = require('./webpack.main');
const renderer = require('./webpack.renderer');
const preload = require('./webpack.preload');

module.exports = [main, renderer, preload];
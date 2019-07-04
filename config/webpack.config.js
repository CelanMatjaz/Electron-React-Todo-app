const main = require('./webpack.config.electron.main');
const renderer = require('./webpack.config.electron.renderer');

module.exports = [main, renderer];
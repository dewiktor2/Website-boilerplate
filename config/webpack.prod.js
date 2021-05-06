const { merge } = require('webpack-merge');
const common = require('./webpack.prod.common.js');

module.exports = merge(common);

const { merge } = require('webpack-merge');

const paths = require('./paths');
const common = require('./webpack.prod.common.js');

module.exports = merge(common, {
  output: {
    path: paths.build,
    publicPath: '/Website-boilerplate',
    filename: 'js/[name].[contenthash].bundle.js',
  },
});

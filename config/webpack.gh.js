const webpack = require('webpack');
const { merge } = require('webpack-merge');
const paths = require('./paths');
const common = require('./webpack.prod.common.js');

module.exports = merge(common, {
  output: {
    path: paths.build,
    publicPath: '/Website-boilerplate',
    filename: 'js/[name].[contenthash].bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      BASE_URL: JSON.stringify(
        'https://dewiktor2.github.io/Website-boilerplate'
      ),
    }),
  ],
});

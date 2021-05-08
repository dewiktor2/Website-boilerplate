const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.prod.common.js');

module.exports = merge(common, {
  plugins: [
    new webpack.DefinePlugin({
      BASE_URL: JSON.stringify(''),
    }),
  ],
});

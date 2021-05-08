const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

const htmlPageNames = ['features'];

// Features pages
const htmlPlugins = htmlPageNames.map((name) => {
  return new HtmlWebpackPlugin({
    template: `./src/views/${name}.html`, // relative path to the HTML files
    inject: true,
    chunks: ['index', `${name}`], // respective JS files
    filename: `${name}.html`, // output HTML files
  });
});

module.exports = {
  // Where webpack looks to start building the bundle
  entry: {
    index: './src/index.js',
    features: './src/js/views/features.js',
    style: './src/styles/index.scss',
  },
  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        'src/manifest.webmanifest',
        'service-worker.js',
        { from: 'src/images/icons', to: 'images/icons' },
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'Website boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/index.html', // template file
      inject: true,
      chunks: ['index'],
      filename: 'index.html', // output file
    }),
  ].concat(htmlPlugins),

  // Determine how modules within the project are treated
  module: {
    rules: [
      // https://webpack.js.org/guides/asset-modules/#replacing-inline-loader-syntax
      {
        resourceQuery: /raw/,
        type: 'asset/source',
      },

      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.js$/, use: ['babel-loader'] },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },
  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.src,
    },
  },
};

/**
 * __dirname -- The name of the directory that the currently executing
 * script resides in.
*/

const webpack = require('webpack');

/**
 * The path module provides utilities for working with file and
 * directory paths.
 *
 * The path.resolve() method resolves a sequence of paths or path
 * segments into an absolute path.
*/
const path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './src/app.jsx',
  ],
  output: {
    path: __dirname,
    filename: './dist/bundle.js',
  },
  module: {
    loaders: [
      // code for webpack v2.1.0-beta23 and above
      // {
      //   enforce: 'pre',
      //   test: /\.jsx?$/,
      //   exclude: /(node_modules|bower_components)/,
      //   loader: 'eslint',
      // },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: [
            'latest',
            'stage-0',
            'react',
          ],
        },
      },
      // {
      //   test: /\.(png|jpg)$/,
      //   loader: 'url-loader?limit2000',
      // },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
    ],
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ],
  },
  resolve: {
    alias: {
      appStyles: 'src/styles/app.scss',
    },
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './src/components',
    ],
    extensions: ['', '.js', '.jsx', '.scss'],
  },
  externals: {
    jquery: 'jQuery',
  },
  devtool: 'source-map',

  // devServer: {
  //   inline: true,
  //   contentBase: './build',
  //   port: 3000,
  // },

  /**
   * Automatically loads modules (values) when identifier (key)
   * is used as free variable inside other modules. For example
   * $ is automatically set to the exports of module "jquery"
  */
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
};


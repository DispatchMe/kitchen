'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [

    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'app/main.jsx')
  ],
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')

    })
  ],
  resolve: {
    alias: {
      kitchensink: path.join(__dirname, '..', 'src'),
      react: path.join(__dirname, 'node_modules', 'react'),
    },
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      include: path.join(__dirname, '..', 'src'),
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      include: __dirname,
    }, {
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel',
      include: path.join(__dirname, '..', 'src'),
    }, {
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel',
      include: __dirname,
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.css$/,
      loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
    }]
  }
};

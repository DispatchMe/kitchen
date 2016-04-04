'use strict';

var webpack = require('webpack');

var kitchensinkExternals = {
  root: 'Kitchensink',
  commonjs2: 'kitchensink',
  commonjs: 'kitchensink',
  amd: 'kitchensink'
};

module.exports = {
  externals: {
    'kitchensink': kitchensinkExternals
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.jsx$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.css$/, loaders: ['css-loader'], exclude: /node_modules/ },
    ]
  },
  output: {
    library: 'Kitchensink',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

var path = require('path');

module.exports = {
  entry: './test/unit/main.coffee',
  output: {
    path: './test/unit',
    filename: 'unit-bundle.js',
    publicPath: 'test/unit'
  },
  vue: {
    loaders: {
      coffee: 'coffee!coffeelint'
    }
  },
  module: {
    loaders: [{
      test: /\.coffee$/,
      include: [
        path.resolve(__dirname, '../test/unit'),
        path.resolve(__dirname, '../src')
      ],
      loader: 'coffee!coffeelint'
    }, {
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }]
  },
  devtool: 'source-map'
};

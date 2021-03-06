const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
    rules: [
      { test: /\.css$/, use: 'style-loader' },
      { test: /\.css$/, use: 'css-loader' },

    ]
  }
};
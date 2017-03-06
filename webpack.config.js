const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.[hash:6].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template.html'
    })
  ]
}

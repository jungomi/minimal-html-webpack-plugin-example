const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'app.bundle.[hash:6].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template.html'
    })
  ]
}

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.[hash:6].js',
    // Public path affects URL of the assets
    // This would make it <script src="/public/app.bundle.aa9cfd.js"></script>
    // publicPath: '/public/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template.html'
    })
  ]
}

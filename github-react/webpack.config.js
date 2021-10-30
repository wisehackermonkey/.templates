// Webpack Configuration File
// https://docs.netlify.com/configure-builds/file-based-configuration/%20

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    // move index.js to a folder instead the root
    path: path.resolve('./build'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve('./src/index.js'),
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: require('./.babelrc'),
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    // New plugin
    new HtmlWebpackPlugin({
      // injects bundle.js to our new index.html
      inject: true,
      // copys the content of the existing index.html to the new /build index.html
      template:  path.resolve('./src/index.html'),
    }),
  ]
}
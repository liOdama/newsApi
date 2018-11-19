const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },],
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true,
          },
        }],
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
  },
  devtool: 'eval',
};

module.exports = config;
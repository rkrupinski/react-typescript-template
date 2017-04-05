const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
  entry: resolve(__dirname, '..', 'src', 'index.tsx'),

  output: {
    path: resolve(__dirname, '..', 'build'),
    filename: '[name].js',
    publicPath: '/',
  },

  devServer: {
    contentBase: resolve(__dirname, '..', 'build'),
    open: true,
    inline: true,
    publicPath: '/',
  },

  plugins: [
    new CheckerPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '..', 'src', 'index.ejs'),
      title: 'react-typescript-template',
    }),
  ],

  performance: {
    hints: false,
  },
};

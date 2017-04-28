const { resolve } = require('path');

module.exports = {
  context: resolve(__dirname, '..', 'src'),

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [
      resolve(__dirname, '..', 'src'),
      'node_modules',
    ],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'react-hot-loader/webpack',
          'awesome-typescript-loader',
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [
          {
            loader: 'tslint-loader',
            options: {
              emitErrors: true,
              typeCheck: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader/useable',
          {
            loader: 'css-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },

  devtool: 'source-map',
};

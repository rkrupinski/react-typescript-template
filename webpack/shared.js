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
          {
            loader: 'awesome-typescript-loader',
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
};

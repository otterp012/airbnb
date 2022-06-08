const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
<<<<<<< HEAD
const Dotenv = require('dotenv-webpack');
=======
>>>>>>> 6c514f0fb590d48337adfebc3262ecd6cee384f5

module.exports = {
  entry: `${path.resolve(__dirname, '../src')}/index.tsx`,
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${path.resolve(__dirname, '../public')}/index.html`,
    }),
    new webpack.ProvidePlugin({}),
    new Dotenv(),
  ],
  resolve: {
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],

    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@UI': path.resolve(__dirname, '../src/UI'),
      '@components': path.resolve(__dirname, '../src/components'),
    },
  },
};

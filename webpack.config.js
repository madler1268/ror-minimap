const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const config = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: () => '<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>Max\'s Maps</title></head><body><div id=\"app\"></div></body></html>',
      filename: 'index.html',
    }),
    new LodashModuleReplacementPlugin,
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|webp)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  }
};

module.exports = config;
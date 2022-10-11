import 'webpack-dev-server';
import * as webpack from 'webpack';
import { resolve } from 'node:path';
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV as
  | 'development'
  | 'production'
  | undefined;

const GITHUB_PREFIX = '/footballSchool';

const config: webpack.Configuration = {
  entry: { bundle: './src/index.tsx' },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: "[name].js",
    assetModuleFilename: 'images/[name][ext]',
    clean: true,
    environment: {
      arrowFunction: false,
    },
    publicPath: NODE_ENV === 'production' ? GITHUB_PREFIX : "/",
  },
  devtool: NODE_ENV === 'development' ? 'eval-source-map' : 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.(css|scss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  mode: NODE_ENV,
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx'],
  },
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  devServer: {
    compress: true,
    port: 9000,
    watchFiles: ['public/index.html'],
    historyApiFallback: true,
    open: ['/footballSchool'],

  },
};

export default config;

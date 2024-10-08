import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack, { ProgressPlugin, WebpackPluginInstance } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export default function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({
      template: options.paths.html
    }),

    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(options.isDev)
    }),
    new webpack.HotModuleReplacementPlugin()
  ];
  if (options.isDev) {
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false
    }));
    plugins.push(
      new webpack.HotModuleReplacementPlugin()
    );
  }

  return plugins;
}

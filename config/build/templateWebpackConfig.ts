import { Configuration } from 'webpack';
import { buildDevServer } from './buildDevServer';
import buildModules from './buildModules';
import buildPlugins from './buildPlugins';
import buildResolve from './buildresolve';
import { BuildOptions } from './types/config';

export default function templateWebpackConfig(
  options: BuildOptions
): Configuration {
  return {
    mode: options.mode,
    module: buildModules(options.isDev),
    plugins: buildPlugins(options),
    resolve: buildResolve(options),
    entry: options.paths.entry,
    output: {
      filename: '[name].[contenthash:8].js',
      path: options.paths.output,
      clean: true
    },
    devtool: options.isDev ? 'inline-source-map' : undefined,
    devServer: options.isDev ? buildDevServer(options) : undefined
  };
}

import { ModuleOptions } from 'webpack';
import buildLoaders from './buildLoaders';

export default function buildModules(isDev: boolean): ModuleOptions {
  return {
    rules: buildLoaders(isDev)
  };
}

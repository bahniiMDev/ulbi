import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export default function buildResolve(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'], // те типи файлов еоторие при импотре не будут указуватс пример ↓⌄
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {

    }
  };
}

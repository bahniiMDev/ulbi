// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')

import path from 'path';
import webpack, { Configuration } from 'webpack';
import templateWebpackConfig from './config/build/templateWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv): Configuration => {
  console.log('Goal: ', env.port); // 'local'
  console.log('Production: ', env.mode); // true

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  };
  const mode = env?.mode || 'development';
  const PORT = +env?.port || 3000;

  return templateWebpackConfig({
    mode,
    paths,
    isDev: mode === 'development',
    port: PORT
  });
};

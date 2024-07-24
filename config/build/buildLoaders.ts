import { RuleSetRule } from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';

export default function buildLoaders(isDev: boolean): RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  };
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2 )$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[contenthash:8].[ext]'
        }
      }
    ]
  };
  const cssLoader = buildCssLoader(isDev);

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['uk', 'en'],
              keyAsDefaultValue: true
            }
          ]
        ]
      }
    }
  };
  return [svgLoader, fileLoader, babelLoader, tsLoader, cssLoader];
}

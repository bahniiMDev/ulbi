import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';

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
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (pathFile: string) => Boolean(pathFile.includes('.module')),
            localIdentName: isDev
              ? '[path][name]__[local]-[hash:base64:5]'
              : '[hash:base64:8]'
          }
        }
      },
      'sass-loader'
    ]
  };

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

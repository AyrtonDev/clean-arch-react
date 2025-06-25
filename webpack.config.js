import path from 'path'
import { fileURLToPath } from 'url'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  mode: 'development',
  entry: './src/main/index.tsx',
  output: {
    path: path.join(__dirname, 'public/js'),
    publicPath: '/js/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [
      '.ts', '.tsx', '.js', '.jsx',
    ],
    alias: {
      '@' : path.join(__dirname, 'src'),
    }
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'swc-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]__[hash:base64:5]'
            },
            esModule: false
          }
        },
        'sass-loader',
      ],
      exclude: /node_modules/
    }]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    historyApiFallback: true,
    devMiddleware: {
      writeToDisk: true
    },
    port: 3000
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
}
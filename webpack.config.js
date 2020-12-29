const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx',
  output: {
    path: path.join(__dirname, 'public/js'),
    publicPath: 'public/js',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'scss'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node-modules/
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'css-loader', options: { modules: true } },
          { loader: 'style-loader' },
          { loader: 'sass-loader' }
        ],
        exclude: /node-modules/
      }
    ]
  },
  devServer: {
    contentBase: './public',
    writeToDisk: true,
    historyApiFallback: true
  },
  external: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [new CleanWebpackPlugin()]
}

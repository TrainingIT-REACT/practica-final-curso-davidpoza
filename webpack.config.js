const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: [
      'react',
      'react-dom',
      'react-router-dom',
      'redux',
      'react-redux',
      'redux-promise-middleware',
      'redux-promise-middleware-actions',
      'dayjs',
      'react-window',
      'react-virtualized-auto-sizer',
      'redux-thunk',
      'lodash.get',
      '@material-ui/core',
      '@material-ui/icons'
    ]
  },
  output: {
    filename: '[name].[chunkhash:8].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', // loads css captured by css-loader into style tag
          'css-loader'] // captures css
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'], // to avoid need of specify directory/index.js or .jsx
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new InterpolateHtmlPlugin(HtmlWebPackPlugin, {
      PUBLIC_URL: 'http://localhost:8080',
    }),
    new CopyPlugin({
      patterns: [
        { from: "./public/manifest.json", to: "./manifest.json" },
        { from: "./public/favicon.ico", to: "./favicon.ico" },
      ],
    })
  ],
  devServer: {
    contentBase: './build',
    historyApiFallback: true
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: 'vendor',
          name: 'vendor',
          enforce: true,
          chunks: 'all'
        }
      }
    }
  }
}
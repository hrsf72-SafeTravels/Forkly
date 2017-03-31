var path = require('path');
const webpack = require('webpack');
var SRC_DIR = path.join(__dirname, '/react/src');
var DIST_DIR = path.join(__dirname, '/react/dist');

module.exports = {
  entry: [
    `${SRC_DIR}/index.jsx`,
    'webpack-hot-middleware/client',
  ],
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.jsx'],
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
};

const path = require("path");

module.exports = {
  context: __dirname,
  entry: {
    "indexEntry": "./index.jsx",
    "backgroundEntry": "./background.js"
  },
  output: {
    path: "./lib",
    publicPath: "/lib/",
    filename: "[name].js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass?outputStyle=compressed'
      }
    ]
  },
  sassLoader: {
  includePaths: [
    './node_modules'
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  }
};

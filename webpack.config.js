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
    './node_modules',
    // this is required only for NPM < 3.
    // Dependencies are flat in NPM 3+ so pointing to
    // the internal grommet/node_modules folder is not needed
    './node_modules/grommet/node_modules'
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  }
};

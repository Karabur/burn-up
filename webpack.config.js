var path = require('path');
var webpack = require('webpack');


module.exports = {
  entry: {
    app: './src/app.ts',
    vendor: ['react']
  },

  resolve: {
    extensions: ['', '.ts', '.webpack.js', '.web.js', '.js'],
    root: path.join(__dirname, "node_modules"),
    alias: {
      "src": path.join(__dirname, "src"),
      "react": "react/react.js",
      "bluebird": "bluebird/js/browser/bluebird.js"
    }
  },

  output:{
    path: './dist',
    filename: 'all.js',
    publicPath: 'http://localhost:8090/assets'
  },

  devtool: 'inline-source-map',

  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor","vendor.js")
  ],

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'jsx-loader'
      }
    ]
  }
};
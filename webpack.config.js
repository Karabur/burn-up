var path = require('path');

module.exports = {
  entry: './src/app.ts',

  resolve: {
    extensions: ['', '.ts', '.webpack.js', '.web.js', '.js'],
    root: path.join(__dirname, "node_modules"),
    alias: {
      "src": path.join(__dirname, "src"),
      "bluebird": "bluebird/js/browser/bluebird.js"
    }
  },

  output:{
    path: './dist',
    filename: 'all.js',
    publicPath: '/assets/'
  },

  devtool: 'inline-source-map',

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader?sync=true'
      }
    ]
  }
};
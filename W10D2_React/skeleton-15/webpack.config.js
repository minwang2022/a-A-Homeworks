const path = require('path');

module.exports = {
    entry: './app.jsx',
    output: {
      path: path.resolve(__dirname),
      filename: './bundle.js',
    },
    devtool: 'source-map',
    resolve: {
      extensions: [".js", ".jsx", "*"]
    }, 

    module: {
      loaders: [
        {
          test: [/\.jsx?$/, /\.js?$/],
          exclude: /node_modules/,
          user: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
         }
        }
      ]
    },
  }
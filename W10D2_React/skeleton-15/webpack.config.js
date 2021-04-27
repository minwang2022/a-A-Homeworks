module.exports = {
    entry: './app.jsx',
    output: {
      filename: './bundle.js',
    },
    module: {
      loaders: [
        {
          test: [/\.jsx?$/, /\.js?$/],
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['react', 'es2015']
          }
        }
      ]
    },
  }
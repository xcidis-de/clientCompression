const path = require('path');

module.exports = {
    
  entry: path.join(__dirname, 'src', 'client', 'index.js'),
  output: {
    path: path.join(__dirname,'build_two'),
    filename: 'index.bundle.js'
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: [
          "style-loader", 
          "css-loader"
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        exclude: /node_modules/,
        loaders: ['file-loader']
      }
    ]
  }
};
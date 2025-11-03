const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
  
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },     
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),   
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), 
    },
    open: true, 
  },

};
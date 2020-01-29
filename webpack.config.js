const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {

     entry: './src/index.js',
     output:{
        path:path.resolve('dist'),
        filename:'bundle.js'  
     },

     mode:'production',

     devServer :{
         port:4000
     },

     module: {
        rules: [
          { test: /\.(css|scss)$/, 
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
          },
          {
            test: /\.(gif|png|jpeg|svg)$/,
            use:[
              {
                loader:'file-loader',
                options:{
                  name: '[name].[ext]',
                  outputPath:'static/',
                  useRelativPath:true
                }
              }
                
            ]
          },
          { 
            test: /\.handlebars$/, 
            loader: "handlebars-loader" 
          },

          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }


        ]
      },

      plugins: [
        new HtmlWebpackPlugin({template: './src/index.handlebars'}),
        new MiniCssExtractPlugin({filename:'main.css'})
      ]
}
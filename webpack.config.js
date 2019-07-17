const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成index.html
const CleanWebpackPlugin = require('clean-webpack-plugin') // 每次build清理输出目录
require("babel-polyfill")

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    filename: 'js/[name].[chunkhash:8].js',
    path: resolve('dist')
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'src': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        title: 'fe_grmanage',
        inject: true,
        chunks: ['main'], // 加载哪些js 等 静态文件
        template: './src/template.html',
        minify: {
            removeComments: true,
            collapseWhitespace: false
        }
    })
  ],
  
  // devServer: {
  //   contentBase: path.join(__dirname, 'dist'),
  //   compress: true,
  //   port: 2221,
  //   host: '0.0.0.0',
  //   proxy: {
  //    '/grmng/v1/*': {
  //      target: 'http://172.100.108.188:6200',
  //      // changeOrigin: true,
  //      source: false
  //    }
  //   }
  // }
}

var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
// var ExtractTextPlugin = require('extract-text-webpack-plugin')
var merge = require('webpack-merge')
var webpackBaseConfig = require('./webpack.config.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// 清空基本配置的插件列表
webpackBaseConfig.plugins = []

module.exports = merge(webpackBaseConfig, {
    // output: {
    //     publicPath: '/',
    //     // 将入口文件重命名为带有 20 位 hash 值的唯一文件
    //     filename: '[name].js'
    // },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new UglifyJSPlugin(),
        // 定义当前 node 环境为生产环境
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        // 压缩 js
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // new CopyWebpackPlugin([
        //     { from: './src/assets/img/', to: 'img/' }
        // ]),
        // 提取模板，并保存入口 html 文件
            new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'fe_grmanage',
            inject: true,
            chunks: ['main', 'vendors'], // 加载哪些js 等 静态文件
            template: './src/template.html',
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        })
    ]
});
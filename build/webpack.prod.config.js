const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',

    // 入口
    // entry: path.join(__dirname, '../src/index.js'),
    entry: {
        app: [
            '@babel/polyfill',
            path.join(__dirname, '../src/index.js'),
        ],
        vendor: [
            'react',
            'react-dom',
            'react-router-dom'
        ],
    },

    // 输出到 dist 目录
    output: {
        publicPath: '/',
        path: path.join(__dirname, '../dist'),
        // filename: 'bundle.js',
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js',
    },

    // loader
    module: {
        rules: [
            {
                test: /\.js$/,
                // cacheDirectory 是用来缓存编译结果, 下次编译加速
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, '../src'),
            },{
                // css-no-modules
                // test: /\.css$/,
                // use: ['style-loader', 'css-loader', 'postcss-loader'],

                // css-modules
                // test: /\.css$/,
                // use: ['style-loader', 'css-loader?modules', 'postcss-loader'],

                // css-modules
                test: /\.css$/,
                use: [
                    // 'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader:'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]--[hash:base64:5]'
                        },
                    },
                    'postcss-loader'
                ],
            },{
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    }
                ],
            },
        ],
    },

    devtool: 'none',

    // 插件配置
    plugins: [
        // 每次打包前清空
        new CleanWebpackPlugin(),

        // 提取 JS
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '../public/index.html'),
        }),

        // 提取 CSS
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        }),

        // 压缩 CSS
        new OptimizeCssAssetsPlugin(),
    ],

    // 别名配置
    resolve: {
        alias: {
            components: path.join(__dirname, '../src/components'),
            pages: path.join(__dirname, '../src/pages'),
            images: path.join(__dirname, '../src/images'),
            router: path.join(__dirname, '../src/router'),
        }
    },

    // 公共块提取
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};

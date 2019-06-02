const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    // 入口
    entry: path.join(__dirname, '../src/index.js'),

    // 输出到 dist 目录
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js',
    },

    // loader
    module: {
        rules: [
            {
                test: /\.js$/,
                // cacheDirectory 是用来缓存编译结果, 下次编译加速
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, '../src'),
            }
        ],
    },

    devtool: 'inline-source-map',

    // webpack-dev-server
    devServer: {
        // 访问 dist 目录下的 index.html
        // contentBase: path.join(__dirname, '../dist'),
        // gzip 压缩
        compress: true,
        // 允许 ip 访问
        host: '0.0.0.0',
        // 端口
        port: 8000,
        // 热更新
        hot: true,
        // 解决启动后刷新 404
        historyApiFallback:true,
        // 配置服务代理
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                // 可转换
                // pathRewrite: {'^/api': ''},
                changeOrigin: true,
            },
        },
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '../public/index.html')
        }),
    ],

    resolve: {
        alias: {
            pages: path.join(__dirname, '../src/pages'),
            components: path.join(__dirname, '../src/components'),
            router: path.join(__dirname, '../src/router'),
        }
    },
};
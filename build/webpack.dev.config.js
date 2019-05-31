const path = require('path');

module.exports = {
    mode: 'development',
 
    // 入口
    entry: path.join(__dirname, '../src/index.js'),

    // 输出到 dist 目录
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js',
    },

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

    devtool: 'cheap-module-source-map',
};

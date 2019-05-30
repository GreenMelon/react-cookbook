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
};

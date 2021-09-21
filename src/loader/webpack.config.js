const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
    // 引用删除插件 这里更新过后引入方式改变了
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
    // 声明要清空的文件夹
module.exports = {
    // 入口
    entry: {
        index: './index.js',
    },
    // 出口
    output: {
        filename: 'main.js',
        path: resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            // less
            {
                test: /\.less$/,
                use: [
                    'style-loader', 'css-loader', 'less-loader'
                ]
            }
        ]
    },
    // 插件配置
    plugins: [
        // 删除之前文件
        new CleanWebpackPlugin(),
    ],

    mode: 'development',
}
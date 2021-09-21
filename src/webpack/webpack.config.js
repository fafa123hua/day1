const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
    // 引用删除插件 这里更新过后引入方式改变了
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
    // 声明要清空的文件夹
module.exports = {
    // 入口
    entry: {
        Security: './src/js/Security.js',
        Home: './src/js/Home.js',
        // add: './src/js/add.js'
    },
    // 出口
    output: {
        // 后续更新？
        filename: '[name].[chunkhash].js',
        path: resolve(__dirname, 'build'),
        // publicPath修改路径
        // publicPath: '123'
    },
    module: {
        rules: [
            // less
            {
                test: /\.less$/,
                use: [
                    'style-loader', 'css-loader', 'less-loader'
                ]
            },
            // css
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ],
            },
            // 图片打包
            {
                test: /\.(jpg|gif|png)/,
                loader: 'url-loader',
                options: {
                    limit: 8192, // 小于8192字节的图片打包成base 64图片
                    name: 'images/[name].[hash:8].[ext]',
                    esModule: false,
                    // 忽略esModule，html中的图片打包会出错，显示[object Module]
                    publicPath: ''
                }
            }
        ]
    },
    // 插件配置
    plugins: [
        // 删除之前文件
        new CleanWebpackPlugin(),
        // 网页配置
        new HtmlWebpackPlugin({
            filename: 'Security.[chunkhash].html', // 生成的html文件名
            template: './src/Security.html', // 模板html
            chunks: ['Security'], // 指定生成的html文件引入的是哪些js文件
            minify: false, // 是否压缩，生产环境默认就是压缩的
        }),
        new HtmlWebpackPlugin({
            filename: 'Home.[chunkhash].html', // 生成的html文件名
            template: './src/Home.html', // 模板html
            chunks: ['Home'], // 指定生成的html文件引入的是哪些js文件
            minify: false, // 是否压缩，生产环境默认就是压缩的
        }),
    ],

    mode: 'development',
}
var path = require('path')
var webpack = require('webpack')
var buildFolder = 'dist';
var buildPath = './' + buildFolder + '/'
var production = process.env.NODE_ENV === 'production' ? 1 : 0; //是否是生产环境

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')// 独立样式文件
// 会将所有的样式文件打包成一个单独的style.css
var extractCSS = new ExtractTextPlugin({
    filename: production ? 'style.[chunkhash].css' : 'style.css',
    disable: false,
    allChunks: true
})
// 检测重用模块
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin
var plugins = [
    new webpack.LoaderOptionsPlugin({
        minimize: true
    }),
    extractCSS,
        // 自动分析重用模块并且打包单独文件
    //new CommonsChunkPlugin(production ? 'vendor.[chunkhash].js' : 'vendor'),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
        filename: '../index.html', // 会生成d.html在根目录下,并注入脚本
        template: 'index.tpl',
        inject: true, //此参数必须加上，不加不注入
        favicon: './src/assets/images/logo.png',
    })


];
var devtool = '#eval-source-map'  // 是否开启source-map

if (process.env.NODE_ENV === 'production') {
    console.log('压缩ing...')
    devtool = '#source-map';
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
            warnings: false
        }
    }))
}
/*if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}*/
module.exports = {
    entry: {
        common: ['vue', 'vue-router','vuex','vuex-router-sync'],
        build: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].js'
        //filename: production ? '[name].[chunkhash].js' : '[name].js' //"build.[hash].js"//[hash]MD5戳   解决html的资源的定位可以使用 webpack提供的HtmlWebpackPlugin插件来解决这个问题  见：http://segmentfault.com/a/1190000003499526 资源路径切换
    },
    plugins: plugins,
    devtool: devtool,
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ],
        }, 
        {
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader'
            ],
        }, 
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                //extractCSS: extractCSS
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, 
        {
            test: /\.(woff|woff2?|svg|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader'
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]?[hash]'
            }
        }]
    },
    resolve: {
        alias: {
            /*'vue$': 'vue/dist/vue.esm.js',*/
            'src': path.resolve(__dirname, 'src'),
            'assets': path.resolve(__dirname, 'src/assets'),
            'components': path.resolve(__dirname, 'src/components'),
            'views': path.resolve(__dirname, 'src/views'),
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
        historyApiFallback: true,
        host: 'localhost',
    }
}


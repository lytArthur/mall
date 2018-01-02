
var webpack           = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

// 环境变量配置，dev / online
var WEBPACK_ENV       = process.env.WEBPACK_ENV || 'dev';


//对html模板的处理 把html页面打包到dist文件夹下  总方法
var getHtmlConfig     = function (name, title) {
    return {
        template : './src/view/' + name + '.html',
        filename : 'view/' + name + '.html',
        inject   : true,
        hash     : true,
        title    : title,
        chunks   : ['common', name]
    }
}

var config = {
    entry: {
        'common': ['./src/page/common/index.js'],
        'index' : ['./src/page/index/index.js'],
        'login' : ['./src/page/login/index.js'],
        'result': ['./src/page/result/index.js'],
    },
    output: {
        path       : './dist',
        publicPath : '/dist',
        filename   : 'js/[name].js'
    },
    externals  : {
        'jquery': 'window.jQuery'
    },
    resolve    : {
        alias: {
            until           : __dirname + '/src/until',
            page            : __dirname + '/src/page',
            service         : __dirname + '/src/service',
            image           : __dirname + '/src/image',
            node_modules    : __dirname + '/node_modules',
        }
    },
    module     : {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            { test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=100&name=resource/[name].[ext]' },
            { test: /\.string$/, loader: 'html-loader' }
        ]
    },
    plugins: [
        //独立通用的js模块
        new webpack.optimize.CommonsChunkPlugin({
            name     : 'common',
            filename : 'js/base.js'
        }),
        //把css文件单独打包到dist文件中
        new ExtractTextPlugin("css/[name].css"),
        new HtmlWebpackPlugin(getHtmlConfig('index' , '主页')),
        new HtmlWebpackPlugin(getHtmlConfig('login' , '登陆页面')),
        new HtmlWebpackPlugin(getHtmlConfig('result' , '操作结果'))
    ]
};

if('dev' === WEBPACK_ENV){
    config.entry.common.push('webpack-dev-server/client?http://localhost:8080/');
}

module.exports = config;
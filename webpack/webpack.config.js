const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const glob = require('glob');
const PurifyCSSPlugin = require("purifycss-webpack")
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const entry = require('./entry_webpack');


module.exports = {
    mode:"development",
    entry: entry,
    output:{
        path:path.resolve(__dirname,'dist'),  //必须用绝对路径
        filename:'[name].js',
        publicPath: 'http://localhost:8080/'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },'postcss-loader']
                }),
            
            }, {
                test: /\.(png|jpg|gif)/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 5000,
                        outputPath: 'images/'
                    }
                }]
            },{
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
            },{
                test: /\.scss/,
                use: [{
                        loader: 'style-loader'
                    },{
                        loader: 'css-loader'
                    },{
                        loader: 'sass-loader'
                    }]
            },{
                test:/\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets:[
                            'env'
                        ]
                    }
                },
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new HtmlPlugin({
            template:'./src/index.html',
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            filename:'a.html',
            // title:'title1',
            chunks:['index']
        }),
        new ExtractTextPlugin("css/styles.css"),
        new webpack.BannerPlugin('打包注释'),
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname, 'src/*.html')),
        }),

    ],
    devServer:{
        contentBase:'./dist',
        host:'localhost',
        port:'8080',
        // compress:true,
        open:true

    }
}

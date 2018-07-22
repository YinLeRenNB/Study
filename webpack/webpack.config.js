const path = require('path');
module.exports = {
    mode: "development",
    entry: {
        'index1': './src/index.js',
        'index2': './src/index2.js'
    },
    output: {
        path: path.resolve(__dirname,'./dist'),              //必须用绝对路径
        filename :'[name].js'
    },
    devServer:{
        contentBase:'./dist',
        host:'localhost',
        port:'8080',
        compress:true
    },


}


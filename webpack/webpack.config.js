const path = require('path');
module.exports = {
    mode: "development",
    entry: {
        'index1': './src/index.js',
        'index2': './src/index2.js'
    },
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename :'[name].js'
    }

}


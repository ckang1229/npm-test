var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

function resolve(dir){
    return path.join(__dirname, dir)
}
console.log(resolve('lib'))

var webpackConfig = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: true
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src')]
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
}

webpack(webpackConfig, error => {
    if(error) throw error
})
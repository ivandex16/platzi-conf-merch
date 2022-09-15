const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: './src/index.js',
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'bundle.js',
        publicPath:'/'
    },
    mode:'development',
    resolve:{
        extensions:['.js','.jsx']
    },
   
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:'html-loader'
                    }
                ]
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,

                    },
                    'css-loader'
                ]
            },
            {
                
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                  filename: 'static/images/[hash][ext][query]',
                },
                  
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'./index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'assets/[name].css'
        })
    ],
    devServer:{
        static: {
            publicPath: path.join(__dirname, "dist")
        },
        port: 3005,
        compress: true,
        historyApiFallback:true,
        open: true 
    }
}
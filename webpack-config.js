'use strict';

const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const autoprefixer = require('autoprefixer');
module.exports = {
    context: __dirname + "/src",
    entry: {
        app: "./app.js",
    },
    output: {
        path: __dirname + "/dist",
        filename: "js/[name].js",
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader",
            options: { presets: ["latest"] },
            exclude: path.resolve(__dirname, 'node_modules'),
            include: path.resolve(__dirname, 'src')
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.less$/,
            loader: "style-loader!css-loader!postcss-loader!less-loader"
        }, {
            test: /\.html$/,
            loader: "html-loader"
        }, {
            test: /\.(png|jpg|gif|svg)$/i,
            loader: 'file-loader',
            options: { name: 'assets/[name]-[hash:5]-[ext]' }
        }]
    },
    plugins: [
      new htmlWebpackPlugin({
            filename: 'app.html',
            template: 'app.html',
            inject: 'body',
            miniify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
      new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [autoprefixer];
                }
            }
        })
  ]
};

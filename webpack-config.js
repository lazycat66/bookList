'use strict';

const webpack = require("webpack");
const path = require('path');
const autoprefixer = require('autoprefixer');
module.exports = {
    context: __dirname + "/public",
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
            include: path.resolve(__dirname, 'public')
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.less$/,
            loader: "style-loader!css-loader!postcss-loader!less-loader"
        }]
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [autoprefixer];
                }
            }
        })
  ]
};

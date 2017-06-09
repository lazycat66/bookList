'use strict';
const webpack = require("webpack");
const path = require('path');
const autoprefixer = require('autoprefixer');
module.exports = {
    context: __dirname + "/public",
    entry: {
        index: "./index",
    },
    output: {
        path: __dirname + "/dist",
        filename: "js/[name].js",
        chunkFilename: '[id].[chunkhash].js'
    },
    module: {
        loaders: [
            // { test: /\.js$/, loader: "babel", exclude: path.resolve(__dirname, 'node_modules'), include: path.resolve(__dirname, 'public') },
            // { test: /\.css$/, loader: "style-loader!css-loader!autoprefixer" },
            // { test: /\.less$/, loader: "style-loader!css-loader!postcss-loader!less-loader" },
            { test: /\.vue$/, loader: 'vue' }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components')
        }
    }
};

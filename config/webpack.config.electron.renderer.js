const webpack = require('webpack');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let config = {
    entry: path.resolve(__dirname, '../src/renderer/index.js'),
    target: 'electron-renderer',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'renderer.js'
    },
    module: {
        rules: [
            { test: /\.(jsx?)$/, use: 'babel-loader' },
            { test: /\.(scss)$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] }
        ]
    },   
    mode: 'development',
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css.css",
        })
    ]
}

module.exports = config;
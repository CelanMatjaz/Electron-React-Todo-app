const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
    entry: path.resolve(__dirname, '../src/index.js'),
    target: 'electron-main',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            { test: /\.(jsx?)$/, use: 'babel-loader' },
            { test: /\.(html)$/, use: [{ loader: 'html-loader', options: { minimize: true } }] }
        ]
    },   
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html')
        }),
    ],   
    mode: 'development',
}

module.exports = config;
// Webpack Configuration File
// https://docs.netlify.com/configure-builds/file-based-configuration/%20

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        // move index.js to a folder instead the root
        path: path.resolve('./build'),
        filename: 'index.js'
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                            plugins: ["@babel/plugin-proposal-class-properties"],
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.ttf$/,
                type: 'asset/resource'
            },
        ]
    },
    resolve: {
        extensions: [".js", ".json"],
    },
    plugins: [
        new UglifyJsPlugin(),
        // New plugin
        new HtmlWebpackPlugin({
            // injects bundle.js to our new index.html
            inject: true,
            // copy's the content of the existing index.html to the new /build index.html
            template: path.resolve('./src/index.html'),
        }),
    ],
    devServer: { static: "./src" },
}
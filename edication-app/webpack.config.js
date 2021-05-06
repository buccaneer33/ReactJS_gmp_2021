const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
    mode: process.env.NODE_ENV,
    entry: ['./src/index.tsx', './src/index.scss', './src/js/index.js'],
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                use: { loader: 'babel-loader' },
                exclude: /node_modules/,
            },
            /*{
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ]
            },*/
            {test: /\.(ico)$/,
                use:
                  {
                      loader: "file-loader",
                      options: {
                          name: "[name].[ext]",
                          outputPath: '',
                          context: path.resolve(__dirname, './')}
                  }
            },
            {test: /\.(png|jpg|gif|svg|webp)$/,
                use: 
                  {loader: 'file-loader', options: {name: './img/[name].[ext]',
                    context: path.resolve(__dirname, './img')}
                    }
              },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ESLintPlugin({
            extensions: ["js", "jsx", "ts", "tsx"],
          }),
        /*new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
          }),*/
        new HtmlWebpackPlugin({
            scriptLoading: "defer",
            title: 'App',
            'meta': {
                'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
              },
            files: {
                // "css": [ "index.css" ],
                "js": [ "main.js"],
                "chunks": {
                    "head": {"entry": ""},
                    "main": {"entry": "main.js"}
                },
            },
            minify: {collapseWhitespace: false},
            filename: 'index.html',
            template: path.join(__dirname, 'src', 'index.html')
        })
    ],
    devServer: {
        historyApiFallback: true,
        overlay: true,
        port: 3000,
        hot: true,
    }
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require("eslint-webpack-plugin");
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    entry: ['./src/index.tsx', './src/index.scss', './src/js/index.js'],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ]
            },
            {test: /\.(ico)$/,
                use:
                  {
                      loader: "file-loader",
                      options: {
                          name: "[name].[ext]",
                          outputPath: '',
                          context: path.resolve(__dirname, './')}
                  }
              }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: isDevelopment ? '[name].js' : '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ESLintPlugin({
            extensions: ["js", "jsx", "ts", "tsx"],
          }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
          }),
        new HtmlWebpackPlugin({
            scriptLoading: "defer",
            title: 'App',
            'meta': {
                'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
              },
            files: {
                "css": [ "index.css" ],
                "js": [ "main.js"],
                "chunks": {
                    "head": {"entry": "",  "css": [ "index.css" ]},
                    "main": {"entry": "main.js", "css": []}
                },
            },
            minify: {collapseWhitespace: false},
            filename: 'index.html',
            template: path.join(__dirname, 'src', 'index.html')
        })
    ],
    devServer: {
        overlay: true,
        open: true,
        port: 3000,
        contentBase: path.resolve(__dirname, './dist')
    }
};

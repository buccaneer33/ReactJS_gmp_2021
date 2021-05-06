const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.config.common');

module.exports = merge(common, {
    name: 'server',
    target: 'node',
    entry: './srcSsr/serverRenderer.js',
    externals: [nodeExternals()],
    output: {
        filename: 'js/serverRenderer.js',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
        {
            test: /\.css$/,
            include: /srcSsr/,
            use: [
            {
                loader: 'css-loader/locals',
                options: {
                modules: true,
                localIdentName: '[name]-[hash:5]',
                },
            },
            ],
        },
        ],
    },
});

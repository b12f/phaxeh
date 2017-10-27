const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.ts'),
    devtool: 'inline-source-map',
    
    plugins: [
        // This generates the index.html
        new HtmlWebpackPlugin({
            title: 'Phaxeh',
            hash: true
        })
    ],
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ ".tsx", ".ts", ".js" ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    }
};
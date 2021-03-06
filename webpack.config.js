const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

console.log(path.join(__dirname, '/public/dist'))

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.join(__dirname, '/public/dist'),
        publicPath: '/',
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]'],
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            favicon: 'public/favicon.ico',
            filename: 'index.html'
        })
    ],
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, '/public/dist'),
        historyApiFallback: true,
        // compress: true,
    }
};
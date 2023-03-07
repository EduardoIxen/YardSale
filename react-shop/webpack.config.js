const path = require('path'); // Permite saber donde estoy trabajando
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',  //Indica en punto de entrada de nuestra aplicación
    output: { // Indica donde se va a guardar el proyecto compilado
        path: path.resolve(__dirname, 'dist'), //Puede ser build o dist
        filename: 'bundle.js',  // Nombre del archivo final (empaquetado)
    },
    mode: 'development',  //Modo de desarrollo
    resolve: {
        extensions: ['.js', '.jsx'],  //Extensiones que vamos a utilizar
    },
    module: { //Reglas que vamos a crear y plugins
        rules: [
            {
                test: /\.(js|jsx)$/,  //Extensiones que vamos a utilizar
                exclude: /node_modules/, //Excluimos la carpeta de node_modules
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i, //Extensiones que vamos a utilizar
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3005, //Puerto de desarrollo
    }
}
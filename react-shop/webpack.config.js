const path = require('path'); // Permite saber donde estoy trabajando
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',  //Indica en punto de entrada de nuestra aplicación
    output: { // Indica donde se va a guardar el proyecto compilado
        path: path.resolve(__dirname, 'dist'), //Puede ser build o dist
        filename: 'bundle.js',  // Nombre del archivo final (empaquetado)
        publicPath: '/'
    },
    mode: 'development',  //Modo de desarrollo
    resolve: {
        extensions: ['.js', '.jsx'],  //Extensiones que vamos a utilizar
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@icons': path.resolve(__dirname, 'src/assets/icons/'),
            '@logos': path.resolve(__dirname, 'src/assets/logos/'),
        }
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
                test: /\.(css|scss)$/i, //Extensiones que vamos a utilizar
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpg|svg|jpeg|webp)$/, /*aquí en test agregas la expresión regular para procesar los diferentes tipos de imagenes que tengas.*/
                type: 'asset/resource',
                generator: {
                   filename: 'assets/pictures/[hash][ext]', /*aquí en filename pones la carpeta en donde quieres que se guarden tus imagenes (le agrego el [hash] para evitar problemas con el cache, además [ext] hace referencia a la extensión del archivo que se haya procesado).*/
                }
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
        historyApiFallback: true,
    }
}
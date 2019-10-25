const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist"),
        publicPath: "/"
    },
    mode: "development",
    devServer: {
        hot: true,
        port: 3000,
        contentBase: path.join(__dirname, "public"),
        publicPath: "/",
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        publicPath: "./assets/font",
                        outputPath: "./assets/font"
                    }
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        publicPath: "./assets/img",
                        outputPath: "./assets/img"
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "React Card Challenge",
            meta: {
                description:
                    "A responsive card based design, to be implemented by React/Redux",
                author: "Amin Taghipour <taghipur.amin@gmail.com>",
                "application-name": "HTML/CSS Challenge"
            },
            filename: "index.html",
            template: "./public/index.html"
        })
    ]
};

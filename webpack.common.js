const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

// root path for this project
const ROOT = __dirname;

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(ROOT, "public/index.html"),
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
    new Dotenv(),
    new FaviconsWebpackPlugin("./public/logo.png"),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: "file-loader",
      },
    ],
  },
};

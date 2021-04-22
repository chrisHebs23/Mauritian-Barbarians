const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const PUBLIC_PATH = "https://mb-website-d5f6f.web.app/";
const ROOT = __dirname;
const options = {
  "main.css": "style.css",
  "main.css.map": "style.css.map",
  "main.js": "bundle.js",
};

module.exports = {
  entry: {
    main: path.resolve(ROOT, "src/index"),
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(ROOT, "public/index.html"),
    }),
    new WebpackManifestPlugin(options),
    new FaviconsWebpackPlugin("public/logo.png"),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
    new Dotenv(),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
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
        use: ["file-loader?name=[name].[ext]"],
      },
      {
        test: /\.json$/,
        exclude: /\/manifest.json$/, // ADD THIS!
        loader: "json",
      },
    ],
  },
};

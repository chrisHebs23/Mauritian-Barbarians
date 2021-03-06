const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const zlib = require("zlib");

const PUBLIC_PATH = "https://mb-website-d5f6f.web.app/";
const ROOT = __dirname;

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.join(ROOT, "/build"),
    filename: "[name].[contenthash].bundle.js",
    publicPath: PUBLIC_PATH,
  },

  plugins: [
    new CleanWebpackPlugin(),
    new CompressionPlugin({
      filename: "[path][base].br",
      algorithm: "brotliCompress",
      test: /\.(js|css|html|svg)$/,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
});

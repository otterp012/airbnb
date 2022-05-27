const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: `${path.resolve(__dirname, "../src")}/index.tsx`,
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 이 부분 경로 수정함 : 이전경로 /src/public -> /public
      template: `${path.resolve(__dirname, "../public")}/index.html`,
    }),
    new webpack.ProvidePlugin({}),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "..src/"),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
  },
};

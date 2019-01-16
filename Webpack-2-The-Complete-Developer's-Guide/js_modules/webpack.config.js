const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
  // Two minimum properties
  entry: "./src/index.js", // 상대경로로 지정
  output: {
    path: path.resolve(__dirname, "build"), // 절대경로로 지정, "build"는 파일의 이름
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/
      },
      {
        loader: ExtractTextPlugin.extract({
          loader: "css-loader"
        }),
        test: /\.css$/
      }
    ]
  },
  plugins: [new ExtractTextPlugin("style.css")]
};

module.exports = config;

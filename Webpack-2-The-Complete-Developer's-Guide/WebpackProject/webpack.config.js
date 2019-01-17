var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

const VENDOR_LIBS = [
  // each string in the array are the name of the library(npm modules) that we want to include in seperate vendor file.
  // the modules are here going to change infrequently
  "faker",
  "react",
  "lodash",
  "redux",
  "react-redux",
  "react-dom",
  "react-input-range",
  "redux-form",
  "redux-thunk"
];

module.exports = {
  entry: {
    bundle: "./src/index.js",
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, "dist"),
    // square brackets with name gets replaced with the key in entry section
    filename: "[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/ // do not apply babel to any files inside of node_modules directory
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ["vendor", "manifest"]
    }),
    new HtmlWebpackPlugin({
      // using existing html document as a source for template
      template: "src/index.html"
    })
  ]
};

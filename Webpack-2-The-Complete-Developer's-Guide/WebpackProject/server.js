const express = require("express");
// webpackMiddleware intercepts incoming requests and hand it off to webpack
// and we need all three (webpack)
const webpackMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");

const app = express();

app.use(webpackMiddleware(webpack(webpackConfig)));

// 3050 is a port number
app.listen(3050, () => console.log("Listening"));

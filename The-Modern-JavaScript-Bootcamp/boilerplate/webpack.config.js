const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    // this path will work in all operating system
    path: path.resolve(__dirname, "public/scripts"),
    filename: "bundle.js"
  }
};

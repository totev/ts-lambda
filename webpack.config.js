const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const conf = {
  prod: process.env.NODE_ENV === "production" ? "production" : "development"
};

console.log(`Building for ${conf.prod}...`);

module.exports = {
  target: "node",
  mode: conf.prodMode ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "commonjs2"
  },
  devtool: "source-map",
  plugins: conf.prodMode
    ? [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            ecma: 6
          }
        })
      ]
    : []
};

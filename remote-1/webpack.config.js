const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath: "http://localhost:5001/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  devServer: {
    hot: true,
    port: 5001,
    open: true,
  },
  module: {
    rules: [
      { test: /\.m?js/, type: "javascript/auto", resolve: {fullySpecified: false} },
      { test: /\.(css|s[ac]ss)$/i, use: ["style-loader", "css-loader", "postcss-loader"] },
      { test: /\.(ts|tsx|js|jsx)$/,  exclude: /node_modules/,  use: { loader: "babel-loader"} },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remote_1",                                  // Name of the Module
      filename: "remoteEntry.js",                        // Name of the Entry File
      remotes: {},                                       // Can consume components from another app
      exposes: {                                         // Can expose components from the current app
        "./Navbar": "./src/components/Navbar",
        "./Product": "./src/components/Product",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});

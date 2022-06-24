"use strict";

const {
  merge
} = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./src",
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "src/", "index.html"),
      filename: "index.html",
      chunks: ['index'],
      inject: "body",
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "src/", "completing-survey.html"),
      filename: "completing-survey.html",
      inject: "body",
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "src/", "survey-faqs.html"),
      filename: "survey-faqs.html",
      inject: "body",
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "src/", "privacy.html"),
      filename: "privacy.html",
      inject: "body",
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "src/", "es/index.html"),
      filename: "es/index.html",
      inject: "body",
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "src/", "es/como-responder-la-encuesta.html"),
      filename: "es/como-responder-la-encuesta.html",
      inject: "body",
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "src/", "es/responder-faqs.html"),
      filename: "es/responder-faqs.html",
      inject: "body",
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "src/", "es/politica-de-privacidad.html"),
      filename: "es/politica-de-privacidad.html",
      inject: "body",
    }),
  ],
  target: "web",
});
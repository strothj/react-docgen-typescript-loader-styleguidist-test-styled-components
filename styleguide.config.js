module.exports = {
  components: "src/components/**/*.{ts,tsx}",
  propsParser: require("react-docgen-typescript").parse,
  webpackConfig: require("react-scripts/config/webpack.config.js")
};

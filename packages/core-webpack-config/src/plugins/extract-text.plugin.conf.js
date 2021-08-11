const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function extractTextPluginGenerator(hash = true) {
  return new MiniCssExtractPlugin({
    // Options similar to the same options in Configuration.output
    // both options are optional
    filename: hash ? '[name].bundle.[contenthash].css' : '[name].bundle.css',
    chunkFilename: hash ? '[id].chunk.[contenthash].css' : '[id].chunk.css',
  });
}

module.exports = {
  prod: extractTextPluginGenerator(true /*hash*/),
};

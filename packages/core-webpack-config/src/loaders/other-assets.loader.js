module.exports = {
  test: /\.(txt)$/,
  use: {
    loader: 'file-loader',
    options: {
      name: 'assets/[name].[hash].[ext]',
    },
  },
};

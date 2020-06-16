const postCssLoader = require('../post-css/post-css.loader');

module.exports = {
  test: /\.(css)$/,
  use: [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
      query: {
        modules: false,
        minimize: false,
      },
    },
    postCssLoader,
  ],
};

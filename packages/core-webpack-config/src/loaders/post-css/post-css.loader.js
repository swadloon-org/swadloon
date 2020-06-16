const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');
const cssNanoConfig = require('../css-nano.config');

module.exports = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    ident: 'postcss',
    plugins: [autoprefixer({ grid: true }), cssnano(cssNanoConfig), postcssPresetEnv()],
  },
};

/**
 * CSS Nano Config
 *
 * This is a more conservative config than the default
 * see http://cssnano.co/guides/optimisations/ for all options' definition
 *
 */
export const cssNanoConfig = {
  autoprefixer: false,
  'cssnano-util-raw-cache': true,
  'postcss-calc': true,
  'postcss-colormin': true,
  'postcss-convert-values': false,
  'postcss-discard-comments': true,
  'postcss-discard-duplicates': true,
  'postcss-discard-empty': false,
  'postcss-discard-overridden': false,
  'postcss-discard-unused': false,
  'postcss-merge-idents': false,
  'postcss-merge-longhand': true,
  'postcss-merge-rules': true,
  'postcss-minify-font-values': false,
  'postcss-minify-gradients': false,
  'postcss-minify-params': true,
  'postcss-minify-selectors': true,
  'postcss-normalize-charset': true,
  'postcss-normalize-display-values': false,
  'postcss-normalize-positions': false,
  'postcss-normalize-repeat-style': false,
  'postcss-normalize-string': false,
  'postcss-normalize-timing-functions': false,
  'postcss-normalize-unicode': false,
  'postcss-normalize-url': false,
  'postcss-normalize-whitespace': true,
  'postcss-ordered-values': true,
  'postcss-reduce-idents': false,
  'postcss-reduce-initial': false,
  'postcss-reduce-transforms': false,
  'postcss-svgo': true,
  'postcss-unique-selectors': false,
  'postcss-zindex': false,
};

const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/');

/**
 * Markdown Loader
 * @description Loads .md files and pass them to html-loader. Configured with
 *     prismjs for syntax highlighting. Load additional languages with the
 *     loadLanguages utility function.
 * @example
 *     In a ejs file: <%= require('./tests/code.md') %>
 *     or when using a normal require: const html = require('./tests/code.md');
 */

loadLanguages(['typescript', 'css', 'scss', 'docker']);

module.exports = {
  test: /(\.md)$/,
  use: [
    {
      loader: 'html-loader',
    },
    {
      loader: 'markdown-loader',
      options: {},
    },
  ],
};

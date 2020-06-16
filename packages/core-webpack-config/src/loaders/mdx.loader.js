const babelEnvPresetConfig = require('../babel-env-preset.conf');
const babelPluginsConf = require('../babel-plugins.conf');
const remarkParse = require('remark-parse');
const remarkAttr = require('remark-attr');
const remarkToc = require('remark-toc');
const remarkExternalLinks = require('remark-external-links');
const remarkHtml = require('remark-html');
const rehypeSlug = require('rehype-slug');
const rehypePrism = require('@mapbox/rehype-prism');
const rehypeAutolinkHeadings = require('rehype-autolink-headings');
const rehypeExternalLinkIcon = require('./rehype-link.plugin');

module.exports = {
  test: /(\.mdx?)$/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        plugins: [...babelPluginsConf],
        presets: [...babelEnvPresetConfig, '@babel/preset-react'],
      },
    },
    {
      loader: '@mdx-js/loader',
      options: {
        // see https://github.com/remarkjs/remark/blob/master/doc/plugins.md#list-of-plugins
        remarkPlugins: [
          [
            // see https://github.com/remarkjs/remark-external-links
            remarkExternalLinks,
            {
              target: '_blank',
              rel: ['nofollow', 'noopener', 'noreferrer'],
            },
          ],
          remarkHtml,
          remarkParse,
          remarkAttr,
          remarkToc,
        ],
        // see https://github.com/rehypejs/rehype/blob/master/doc/plugins.md#list-of-plugins
        rehypePlugins: [
          rehypeSlug,
          [
            // https://github.com/rehypejs/rehype-autolink-headings
            rehypeAutolinkHeadings,
            {
              content: { type: 'text', value: '#' },
            },
          ],
          rehypePrism,
        ],
      },
    },
  ],
};

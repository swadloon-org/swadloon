// @ts-ignore
import rehypePrism from '@mapbox/rehype-prism';
// @ts-ignore
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
// @ts-ignore
import rehypeSlug from 'rehype-slug';
// @ts-ignore
import remarkExternalLinks from 'remark-external-links';
// @ts-ignore
import remarkHtml from 'remark-html';
// @ts-ignore
import remarkParse from 'remark-parse';
// @ts-ignore
import remarkToc from 'remark-toc';
import { RuleSetRule } from 'webpack/declarations/WebpackOptions';
import { babelPluginConf } from '../babel-plugins.conf';
import { babelPresetConf } from '../babel-preset.conf';

export const remarkExternalLinksPlugin = [
  remarkExternalLinks,
  {
    target: '_blank',
    rel: ['nofollow', 'noopener', 'noreferrer'],
  },
];

export const remarkPlugins = [
  remarkExternalLinksPlugin,
  remarkHtml,
  remarkParse,
  // remarkAttr,
  remarkToc,
];

export const rehypePrismPluginConf = rehypePrism;

export const rehypePlugins = [
  rehypeSlug,
  [
    // https://github.com/rehypejs/rehype-autolink-headings
    rehypeAutolinkHeadings,
    {
      content: { type: 'text', value: '#' },
    },
  ],
  rehypePrismPluginConf,
];

export const mdxLoader: RuleSetRule = {
  test: /(\.mdx?)$/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        plugins: [...babelPluginConf],
        presets: [...babelPresetConf, '@babel/preset-react'],
      },
    },
    {
      loader: '@mdx-js/loader',
      options: {
        // see https://github.com/remarkjs/remark/blob/master/doc/plugins.md#list-of-plugins
        remarkPlugins,
        // see https://github.com/rehypejs/rehype/blob/master/doc/plugins.md#list-of-plugins
        rehypePlugins,
      },
    },
  ],
};

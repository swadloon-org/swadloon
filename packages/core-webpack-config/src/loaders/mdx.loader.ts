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
// @ts-ignore
import remarkUnwrapImages from 'remark-unwrap-images';
import { RuleSetRule } from 'webpack/declarations/WebpackOptions';
import { babelPluginConf } from '../babel-plugins.conf';
import { babelPresetConf } from '../babel-preset.conf';

/**
 * remark plugin to serialize Markdown as HTML.
 * @see https://github.com/remarkjs/remark-html
 */
export const remarkHtmlPlugin = [remarkHtml, {}];

/**
 * remark plugin to automatically add target and rel attributes to external links.
 * @see https://github.com/remarkjs/remark-external-links
 */
export const remarkExternalLinksPlugin = [
  remarkExternalLinks,
  {
    target: '_blank',
    rel: ['nofollow', 'noopener', 'noreferrer'],
  },
];

/**
 * remark plugin to remove the wrapping paragraph for images.
 * @see https://github.com/remarkjs/remark-unwrap-images
 */
export const remarkUnwrapImagesPlugin = [remarkUnwrapImages];

export const remarkPlugins = [
  remarkExternalLinksPlugin,
  remarkHtml,
  remarkParse,
  // remarkAttr,
  remarkToc,
];

export const rehypePrismPluginConf = rehypePrism;

/**
 * rehype plugin to add ids to headings.
 * @see https://github.com/rehypejs/rehype-slug
 */
export const rehypeSlugPlugin = [rehypeSlug, {}];

/**
 * rehype plugin to automatically add links to headings (h1-h6).
 * @see https://github.com/rehypejs/rehype-autolink-headings
 */
export const rehypeAutoLinkHeadingsPlugin = [
  rehypeAutolinkHeadings,
  {
    properties: { className: ['mdx-anchor'] },
    content: {
      type: 'element',
      tagName: 'span',
      properties: { className: ['mdx-anchor-pound'] },
      children: [{ type: 'text', value: '#' }],
    },
    // behavior: 'wrap', // If behavior is wrap, then content is ignored.
  },
];

export const rehypePlugins = [rehypeSlug, rehypeAutoLinkHeadingsPlugin, rehypePrismPluginConf];

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

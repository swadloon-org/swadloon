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
// @ts-ignore
import wikiLinkPlugin from 'remark-wiki-link';
import { RuleSetRule } from 'webpack';

import { babelPluginBrowserConf } from '../babel/babel-plugins.conf';
import { babelPresetBrowserConf } from '../babel/babel-preset.conf';

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
 * remark plugin to generate a table of contents.
 * @see https://github.com/remarkjs/remark-toc
 */
export const remarkTocPlugin = [remarkToc, {}];

/**
 * Parses Markdown to mdast syntax trees.
 * @see https://github.com/remarkjs/remark/tree/main/packages/remark-parse
 * @see https://github.com/markedjs/marked/blob/master/docs/USING_ADVANCED.md
 */
export const remarkParsePlugin = [remarkParse, {}];

/**
 * remark plugin to parse [[Wiki Link]].
 * @see https://github.com/landakram/remark-wiki-link
 */
export const remarkWikiLinkPlugin = [
  wikiLinkPlugin,
  {
    aliasDivider: '|',
    hrefTemplate: (permalink: string) => `/design-system/${permalink.replace(/(en|fr)\./, '')}`,
  },
];

/**
 * remark plugin to remove the wrapping paragraph for images.
 * @see https://github.com/remarkjs/remark-unwrap-images
 */
export const remarkUnwrapImagesPlugin = [remarkUnwrapImages];

export const remarkPlugins = [
  remarkExternalLinksPlugin,
  remarkHtmlPlugin,
  remarkParsePlugin,
  // remarkAttr,
  remarkTocPlugin,
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
 *
 * - behavior:
 *  'prepend' — inject link before the heading text
 *  'append' — inject link after the heading text
 *  'wrap' — wrap the whole heading text with the link
 *  'before' — insert link before the heading
 *  'after' — insert link after the heading
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
    behavior: 'append', // if behavior is wrap, then content is ignored.
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
        plugins: [...babelPluginBrowserConf],
        presets: [...babelPresetBrowserConf, '@babel/preset-react'],
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

import * as coreWebpackConfig from '@newrade/core-webpack-config';
import Gatsby from 'gatsby';

/**
 * gatsby-plugin-mdx
 * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-mdx#readme
 */
export function getGatsbyPluginMdx(): Gatsby.PluginRef[] {
  return [
    /**
     * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-mdx#gatsby-remark-plugins
     */
    {
      resolve: `gatsby-remark-images`,
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          /**
           * @see https://github.com/remcohaszing/gatsby-remark-mermaid
           * @note does not work with Gatsby
           */
          {
            resolve: 'gatsby-remark-mermaid',
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false,
              wrapperStyle: `margin-left: inherit; margin-right: inherit;`,
            },
          },
          /**
           * @see https://www.gatsbyjs.com/plugins/gatsby-remark-copy-linked-files
           */
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'markdown-assets',
              ignoreFileExtensions: [],
            },
          },
        ],
        /**
         * @see https://github.com/remarkjs/remark/blob/master/doc/plugins.md#list-of-plugins
         * @seee node_modules/@mdx-js/mdx/index.js
         */
        remarkPlugins: [
          coreWebpackConfig.remarkWikiLinkPlugin,
          coreWebpackConfig.remarkExternalLinksPlugin,
          // coreWebpackConfig.remarkUnwrapImagesPlugin,
          coreWebpackConfig.remarkHtmlPlugin,
          coreWebpackConfig.remarkTocPlugin,
        ].map((plugin) => {
          if (!(plugin && plugin[0])) {
            throw new Error('undefined plugin');
          }
          return plugin;
        }),
        // see https://github.com/rehypejs/rehype/blob/master/doc/plugins.md#list-of-plugins
        rehypePlugins: [
          coreWebpackConfig.rehypeSlugPlugin,
          coreWebpackConfig.rehypeAutoLinkHeadingsPlugin,
        ],
      },
    },
  ];
}

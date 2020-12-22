import Gatsby from 'gatsby';

export function getGatsbyPluginMdx(): Gatsby.PluginRef {
  return {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: ['.md', '.mdx'],
      // defaultLayouts: {
      //   [SOURCE_INSTANCE_NAME.PACKAGE_DOCS]: require.resolve(
      //     `../../../core-gatsby-ui/lib/templates/markdown.template.js`
      //   ),
      //   [SOURCE_INSTANCE_NAME.DOCS]: require.resolve(`../../../core-gatsby-ui/lib/templates/markdown.template.js`),
      //   [SOURCE_INSTANCE_NAME.MDX_PAGES]: require.resolve(`../../../core-gatsby-ui/lib/templates/markdown.template.js`),
      //   default: require.resolve(`../../../core-gatsby-ui/lib/templates/markdown.template.js`),
      // },
    },
  };
}

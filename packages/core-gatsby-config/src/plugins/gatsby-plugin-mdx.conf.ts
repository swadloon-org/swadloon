import Gatsby from 'gatsby';

export function getGatsbyPluginMdx(): Gatsby.PluginRef {
  return {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: ['.md', '.mdx'],
      // defaultLayouts: {
      //   packageDocs: require.resolve('./src/templates/markdown.template.tsx'),
      //   docs: require.resolve('./src/templates/markdown.template.tsx'),
      //   default: require.resolve('./src/templates/markdown.template.tsx'),
      // },
    },
  };
}

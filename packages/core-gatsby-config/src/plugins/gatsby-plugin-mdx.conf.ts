import Gatsby from 'gatsby';

export function getGatsbyPluginMdx(): Gatsby.PluginRef {
  return {
    resolve: `gatsby-plugin-mdx`,
    // TODO add remark and rehype plugins
  };
}

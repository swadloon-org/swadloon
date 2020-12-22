import Gatsby from 'gatsby';

export function getGatsbyTransformerSharp(): Gatsby.PluginRef {
  return {
    resolve: `gatsby-transformer-sharp`,
  };
}

export function getGatsbyPluginSharp(): Gatsby.PluginRef {
  return {
    resolve: `gatsby-plugin-sharp`,
  };
}

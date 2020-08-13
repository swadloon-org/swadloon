import Gatsby from 'gatsby';

export function getGatsbyTsPluginConfig(
  { fileName }: { fileName: string } = { fileName: `types/graphql-types.ts` }
): Gatsby.PluginRef {
  return {
    resolve: `gatsby-plugin-ts`,
    options: {
      fileName,
    },
  };
}

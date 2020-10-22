export function getGastbyCorePluginConfig(options?: any) {
  return {
    resolve: require.resolve(`../../lib/plugins/gatsby-plugin-core`),
  };
}

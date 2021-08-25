import path from 'path';

export function getGastbyPluginTreatConfig(options?: any) {
  return {
    resolve: require.resolve(`../plugins/gatsby-plugin-treat`),
  };
}

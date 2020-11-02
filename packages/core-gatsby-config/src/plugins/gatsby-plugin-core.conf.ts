import path from 'path';

export function getGastbyCorePluginConfig(options?: any) {
  return {
    resolve: path.resolve(__dirname, `../../lib/plugins/gatsby-plugin-core`),
  };
}

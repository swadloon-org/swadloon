import path from 'path';

export function getGastbyPluginTreatConfig(options?: any) {
  return {
    resolve: path.resolve(__dirname, `../../commonjs/plugins/gatsby-plugin-treat`),
  };
}

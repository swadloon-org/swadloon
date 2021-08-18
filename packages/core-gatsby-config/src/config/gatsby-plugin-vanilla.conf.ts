import path from 'path';

/**
 * @see https://github.com/KyleAMathews/gatsby-plugin-vanilla-extract
 */
export function getGastbyPluginVanilla() {
  return {
    resolve: path.resolve(__dirname, `../../commonjs/plugins/gatsby-plugin-vanilla`),
  };
}

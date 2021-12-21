import { postCssLoaderOptions } from '@newrade/core-webpack-config';

/**
 * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-postcss
 */
export function getGatsbyPluginPostCSS(options?: any) {
  return {
    resolve: `gatsby-plugin-postcss`,
    options: {
      cssLoaderOptions: {
        module: true,
      },
      postCssPlugins: postCssLoaderOptions.plugins,
    },
  };
}

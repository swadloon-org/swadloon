/**
 * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-postcss
 */
export function getGatsbyPluginPostCSS(options?: any) {
  return {
    resolve: `gatsby-plugin-postcss`,
    options: {
      // cssLoaderOptions: {
      //   camelCase: false,
      // },
      postCssPlugins: [
        require('cssnano')({
          preset: ['default', { calc: false }],
        }),
      ],
    },
  };
}

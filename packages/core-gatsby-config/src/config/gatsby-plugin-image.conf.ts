import { PluginRef } from 'gatsby';

export function getGatsbyImagePlugins(options?: any): PluginRef[] {
  return [
    /**
     * @see https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/
     */
    {
      resolve: `gatsby-plugin-image`,
      options: {},
    },
    /**
     * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp/
     */
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        failOnError: false,
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {},
    },
  ];
}

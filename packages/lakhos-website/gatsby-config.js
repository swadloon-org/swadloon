'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.config = void 0;
const core_gatsby_config_1 = require('@newrade/core-gatsby-config');
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config();
exports.config = {
  siteMetadata: {
    title: `My Gatsby Site`,
    description: `An example site.`,
  },
  plugins: [
    core_gatsby_config_1.getGatsbyTsPluginConfig(),
    core_gatsby_config_1.getGatsbyReactSvgConfig(),
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GraphCMS`,
        fieldName: `gcms`,
        url: process.env.GRAPH_CMS_API_URL_LAKHOS,
        headers: {
          Authorization: `bearer ${process.env.GRAPH_CMS_AUTH_TOKEN_LAKHOS}`,
        },
      },
    },
  ],
};
exports.default = exports.config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F0c2J5LWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhdHNieS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsb0VBQStGO0FBRS9GOzs7O0dBSUc7QUFFSCxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFZCxRQUFBLE1BQU0sR0FBd0I7SUFDekMsWUFBWSxFQUFFO1FBQ1osS0FBSyxFQUFFLGdCQUFnQjtRQUN2QixXQUFXLEVBQUUsa0JBQWtCO0tBQ2hDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsNENBQXVCLEVBQUU7UUFDekIsNENBQXVCLEVBQUU7UUFDekI7WUFDRSxPQUFPLEVBQUUsdUJBQXVCO1lBQ2hDLE9BQU8sRUFBRTtnQkFDUCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QjtnQkFDekMsT0FBTyxFQUFFO29CQUNQLGFBQWEsRUFBRSxVQUFVLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUU7aUJBQ25FO2FBQ0Y7U0FDRjtLQUNGO0NBQ0YsQ0FBQztBQUVGLGtCQUFlLGNBQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYXRzYnkgZnJvbSAnZ2F0c2J5JztcblxuaW1wb3J0IHsgZ2V0R2F0c2J5VHNQbHVnaW5Db25maWcsIGdldEdhdHNieVJlYWN0U3ZnQ29uZmlnIH0gZnJvbSAnQG5ld3JhZGUvY29yZS1nYXRzYnktY29uZmlnJztcblxuLyoqXG4gKiBDb25maWd1cmUgeW91ciBHYXRzYnkgc2l0ZSB3aXRoIHRoaXMgZmlsZS5cbiAqXG4gKiBTZWU6IGh0dHBzOi8vd3d3LmdhdHNieWpzLm9yZy9kb2NzL2dhdHNieS1jb25maWcvXG4gKi9cblxucmVxdWlyZSgnZG90ZW52JykuY29uZmlnKCk7XG5cbmV4cG9ydCBjb25zdCBjb25maWc6IEdhdHNieS5HYXRzYnlDb25maWcgPSB7XG4gIHNpdGVNZXRhZGF0YToge1xuICAgIHRpdGxlOiBgTXkgR2F0c2J5IFNpdGVgLFxuICAgIGRlc2NyaXB0aW9uOiBgQW4gZXhhbXBsZSBzaXRlLmAsXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICBnZXRHYXRzYnlUc1BsdWdpbkNvbmZpZygpLFxuICAgIGdldEdhdHNieVJlYWN0U3ZnQ29uZmlnKCksXG4gICAge1xuICAgICAgcmVzb2x2ZTogYGdhdHNieS1zb3VyY2UtZ3JhcGhxbGAsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHR5cGVOYW1lOiBgR3JhcGhDTVNgLFxuICAgICAgICBmaWVsZE5hbWU6IGBnY21zYCxcbiAgICAgICAgdXJsOiBwcm9jZXNzLmVudi5HUkFQSF9DTVNfQVBJX1VSTF9MQUtIT1MsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgYmVhcmVyICR7cHJvY2Vzcy5lbnYuR1JBUEhfQ01TX0FVVEhfVE9LRU5fTEFLSE9TfWAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iXX0=

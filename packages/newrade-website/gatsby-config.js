'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.config = void 0;
const core_gatsby_config_1 = require('@newrade/core-gatsby-config');
const dotenv_1 = __importDefault(require('dotenv'));
dotenv_1.default.config();
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
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
        url: process.env.GRAPH_CMS_API_URL_NEWRADE,
        headers: {
          Authorization: `bearer ${process.env.GRAPH_CMS_AUTH_TOKEN_NEWRADE}`,
        },
      },
    },
  ],
};
exports.default = exports.config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F0c2J5LWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhdHNieS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsb0VBQStGO0FBRS9GLG9EQUE0QjtBQUc1QixnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWhCOzs7O0dBSUc7QUFDVSxRQUFBLE1BQU0sR0FBd0I7SUFDekMsWUFBWSxFQUFFO1FBQ1osS0FBSyxFQUFFLGdCQUFnQjtRQUN2QixXQUFXLEVBQUUsa0JBQWtCO0tBQ2hDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsNENBQXVCLEVBQUU7UUFDekIsNENBQXVCLEVBQUU7UUFDekI7WUFDRSxPQUFPLEVBQUUsdUJBQXVCO1lBQ2hDLE9BQU8sRUFBRTtnQkFDUCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QjtnQkFDMUMsT0FBTyxFQUFFO29CQUNQLGFBQWEsRUFBRSxVQUFVLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEVBQUU7aUJBQ3BFO2FBQ0Y7U0FDRjtLQUNGO0NBQ0YsQ0FBQztBQUVGLGtCQUFlLGNBQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEdhdHNieVRzUGx1Z2luQ29uZmlnLCBnZXRHYXRzYnlSZWFjdFN2Z0NvbmZpZyB9IGZyb20gJ0BuZXdyYWRlL2NvcmUtZ2F0c2J5LWNvbmZpZyc7XG5cbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52JztcbmltcG9ydCBHYXRzYnkgZnJvbSAnZ2F0c2J5JztcblxuZG90ZW52LmNvbmZpZygpO1xuXG4vKipcbiAqIENvbmZpZ3VyZSB5b3VyIEdhdHNieSBzaXRlIHdpdGggdGhpcyBmaWxlLlxuICpcbiAqIFNlZTogaHR0cHM6Ly93d3cuZ2F0c2J5anMub3JnL2RvY3MvZ2F0c2J5LWNvbmZpZy9cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbmZpZzogR2F0c2J5LkdhdHNieUNvbmZpZyA9IHtcbiAgc2l0ZU1ldGFkYXRhOiB7XG4gICAgdGl0bGU6IGBNeSBHYXRzYnkgU2l0ZWAsXG4gICAgZGVzY3JpcHRpb246IGBBbiBleGFtcGxlIHNpdGUuYCxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIGdldEdhdHNieVRzUGx1Z2luQ29uZmlnKCksXG4gICAgZ2V0R2F0c2J5UmVhY3RTdmdDb25maWcoKSxcbiAgICB7XG4gICAgICByZXNvbHZlOiBgZ2F0c2J5LXNvdXJjZS1ncmFwaHFsYCxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgdHlwZU5hbWU6IGBHcmFwaENNU2AsXG4gICAgICAgIGZpZWxkTmFtZTogYGdjbXNgLFxuICAgICAgICB1cmw6IHByb2Nlc3MuZW52LkdSQVBIX0NNU19BUElfVVJMX05FV1JBREUsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgYmVhcmVyICR7cHJvY2Vzcy5lbnYuR1JBUEhfQ01TX0FVVEhfVE9LRU5fTkVXUkFERX1gLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICBdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuIl19

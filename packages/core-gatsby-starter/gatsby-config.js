'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod) if (k !== 'default' && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.loadDotEnv = void 0;
const core_gatsby_config_1 = require('@newrade/core-gatsby-config');
const dotenv = __importStar(require('dotenv'));
const path_1 = __importDefault(require('path'));
// TODO move to a different file
const env = loadDotEnv();
function loadDotEnv() {
  // add env variables from .env file
  dotenv.config({
    path: path_1.default.resolve(__dirname, '.env'),
  });
  return process.env;
}
exports.loadDotEnv = loadDotEnv;
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const config = {
  siteMetadata: {
    title: `core-gatsby-website`,
    description: `Gatsby powered MIR website`,
    siteUrl: env.SITE_URL,
    languages: {
      langs: [core_gatsby_config_1.SITE_LANGUAGES.FR, core_gatsby_config_1.SITE_LANGUAGES.EN],
      defaultLangKey: core_gatsby_config_1.SITE_LANGUAGES.FR,
    },
  },
  plugins: [
    core_gatsby_config_1.getGatsbyTsPluginConfig(),
    core_gatsby_config_1.getGatsbyReactSvgConfig(),
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path_1.default.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    /**
     * gatsby-source-graphcms
     * @see https://github.com/GraphCMS/gatsby-source-graphcms/tree/next/gatsby-source-graphcms
     */
    // {
    //   resolve: 'gatsby-source-graphcms',
    //   options: {
    //     downloadLocalImages: true,
    //     buildMarkdownNodes: true,
    //     endpoint: env.GRAPH_CMS_API_URL_CORE,
    //     token: env.GRAPH_CMS_AUTH_TOKEN_CORE,
    //   },
    // },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GraphCMS`,
        fieldName: `gcms`,
        url: env.GRAPH_CMS_API_URL_CORE,
        headers: {
          Authorization: `bearer ${env.GRAPH_CMS_AUTH_TOKEN_CORE}`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
    },
    /**
     * gatsby-plugin-react-helmet
     * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-react-helmet
     * @see https://github.com/nfl/react-helmet
     */
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
  ],
};
exports.default = config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F0c2J5LWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhdHNieS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9FQUtxQztBQUNyQywrQ0FBaUM7QUFDakMsZ0RBQXdCO0FBR3hCLGdDQUFnQztBQUNoQyxNQUFNLEdBQUcsR0FBRyxVQUFVLEVBQUUsQ0FBQztBQUN6QixTQUFnQixVQUFVO0lBQ3hCLG1DQUFtQztJQUNuQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ1osSUFBSSxFQUFFLGNBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQztLQUN0QyxDQUFDLENBQUM7SUFFSCxPQUFPLE9BQU8sQ0FBQyxHQUFVLENBQUM7QUFDNUIsQ0FBQztBQVBELGdDQU9DO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sTUFBTSxHQUFxQjtJQUMvQixZQUFZLEVBQUU7UUFDWixLQUFLLEVBQUUscUJBQXFCO1FBQzVCLFdBQVcsRUFBRSw0QkFBNEI7UUFDekMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRO1FBQ3JCLFNBQVMsRUFBRTtZQUNULEtBQUssRUFBRSxDQUFDLG1DQUFjLENBQUMsRUFBRSxFQUFFLG1DQUFjLENBQUMsRUFBRSxDQUFDO1lBQzdDLGNBQWMsRUFBRSxtQ0FBYyxDQUFDLEVBQUU7U0FDbEM7S0FDRjtJQUNELE9BQU8sRUFBRTtRQUNQLDRDQUF1QixFQUFFO1FBQ3pCLDRDQUF1QixFQUFFO1FBQ3pCO1lBQ0UsT0FBTyxFQUFFLDBCQUEwQjtZQUNuQyxPQUFPLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsSUFBSSxFQUFFLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUM7YUFDNUM7U0FDRjtRQUNELDBCQUEwQjtRQUMxQixxQkFBcUI7UUFDckI7OztXQUdHO1FBQ0gsSUFBSTtRQUNKLHVDQUF1QztRQUN2QyxlQUFlO1FBQ2YsaUNBQWlDO1FBQ2pDLGdDQUFnQztRQUNoQyw0Q0FBNEM7UUFDNUMsNENBQTRDO1FBQzVDLE9BQU87UUFDUCxLQUFLO1FBQ0w7WUFDRSxPQUFPLEVBQUUsdUJBQXVCO1lBQ2hDLE9BQU8sRUFBRTtnQkFDUCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLEdBQUcsRUFBRSxHQUFHLENBQUMsc0JBQXNCO2dCQUMvQixPQUFPLEVBQUU7b0JBQ1AsYUFBYSxFQUFFLFVBQVUsR0FBRyxDQUFDLHlCQUF5QixFQUFFO2lCQUN6RDthQUNGO1NBQ0Y7UUFDRDtZQUNFLE9BQU8sRUFBRSxtQkFBbUI7WUFDNUIsT0FBTyxFQUFFO2dCQUNQLGFBQWEsRUFBRSxFQUFFO2dCQUNqQixhQUFhLEVBQUUsRUFBRTthQUNsQjtTQUNGO1FBQ0Q7Ozs7V0FJRztRQUNIO1lBQ0UsT0FBTyxFQUFFLDRCQUE0QjtTQUN0QztLQUNGO0NBQ0YsQ0FBQztBQUVGLGtCQUFlLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEdhc3RieVNpdGVDb25maWcsXG4gIGdldEdhdHNieVJlYWN0U3ZnQ29uZmlnLFxuICBnZXRHYXRzYnlUc1BsdWdpbkNvbmZpZyxcbiAgU0lURV9MQU5HVUFHRVMsXG59IGZyb20gJ0BuZXdyYWRlL2NvcmUtZ2F0c2J5LWNvbmZpZyc7XG5pbXBvcnQgKiBhcyBkb3RlbnYgZnJvbSAnZG90ZW52JztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgRU5WIH0gZnJvbSAnLi90eXBlcy9kb3QtZW52JztcblxuLy8gVE9ETyBtb3ZlIHRvIGEgZGlmZmVyZW50IGZpbGVcbmNvbnN0IGVudiA9IGxvYWREb3RFbnYoKTtcbmV4cG9ydCBmdW5jdGlvbiBsb2FkRG90RW52KCkge1xuICAvLyBhZGQgZW52IHZhcmlhYmxlcyBmcm9tIC5lbnYgZmlsZVxuICBkb3RlbnYuY29uZmlnKHtcbiAgICBwYXRoOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLmVudicpLFxuICB9KTtcblxuICByZXR1cm4gcHJvY2Vzcy5lbnYgYXMgRU5WO1xufVxuXG4vKipcbiAqIENvbmZpZ3VyZSB5b3VyIEdhdHNieSBzaXRlIHdpdGggdGhpcyBmaWxlLlxuICpcbiAqIFNlZTogaHR0cHM6Ly93d3cuZ2F0c2J5anMub3JnL2RvY3MvZ2F0c2J5LWNvbmZpZy9cbiAqL1xuY29uc3QgY29uZmlnOiBHYXN0YnlTaXRlQ29uZmlnID0ge1xuICBzaXRlTWV0YWRhdGE6IHtcbiAgICB0aXRsZTogYGNvcmUtZ2F0c2J5LXdlYnNpdGVgLFxuICAgIGRlc2NyaXB0aW9uOiBgR2F0c2J5IHBvd2VyZWQgTUlSIHdlYnNpdGVgLFxuICAgIHNpdGVVcmw6IGVudi5TSVRFX1VSTCxcbiAgICBsYW5ndWFnZXM6IHtcbiAgICAgIGxhbmdzOiBbU0lURV9MQU5HVUFHRVMuRlIsIFNJVEVfTEFOR1VBR0VTLkVOXSxcbiAgICAgIGRlZmF1bHRMYW5nS2V5OiBTSVRFX0xBTkdVQUdFUy5GUixcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgZ2V0R2F0c2J5VHNQbHVnaW5Db25maWcoKSxcbiAgICBnZXRHYXRzYnlSZWFjdFN2Z0NvbmZpZygpLFxuICAgIHtcbiAgICAgIHJlc29sdmU6IGBnYXRzYnktc291cmNlLWZpbGVzeXN0ZW1gLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBuYW1lOiBgaW1hZ2VzYCxcbiAgICAgICAgcGF0aDogcGF0aC5qb2luKF9fZGlybmFtZSwgYHNyY2AsIGBpbWFnZXNgKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBgZ2F0c2J5LXRyYW5zZm9ybWVyLXNoYXJwYCxcbiAgICBgZ2F0c2J5LXBsdWdpbi1zaGFycGAsXG4gICAgLyoqXG4gICAgICogZ2F0c2J5LXNvdXJjZS1ncmFwaGNtc1xuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0dyYXBoQ01TL2dhdHNieS1zb3VyY2UtZ3JhcGhjbXMvdHJlZS9uZXh0L2dhdHNieS1zb3VyY2UtZ3JhcGhjbXNcbiAgICAgKi9cbiAgICAvLyB7XG4gICAgLy8gICByZXNvbHZlOiAnZ2F0c2J5LXNvdXJjZS1ncmFwaGNtcycsXG4gICAgLy8gICBvcHRpb25zOiB7XG4gICAgLy8gICAgIGRvd25sb2FkTG9jYWxJbWFnZXM6IHRydWUsXG4gICAgLy8gICAgIGJ1aWxkTWFya2Rvd25Ob2RlczogdHJ1ZSxcbiAgICAvLyAgICAgZW5kcG9pbnQ6IGVudi5HUkFQSF9DTVNfQVBJX1VSTF9DT1JFLFxuICAgIC8vICAgICB0b2tlbjogZW52LkdSQVBIX0NNU19BVVRIX1RPS0VOX0NPUkUsXG4gICAgLy8gICB9LFxuICAgIC8vIH0sXG4gICAge1xuICAgICAgcmVzb2x2ZTogYGdhdHNieS1zb3VyY2UtZ3JhcGhxbGAsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHR5cGVOYW1lOiBgR3JhcGhDTVNgLFxuICAgICAgICBmaWVsZE5hbWU6IGBnY21zYCxcbiAgICAgICAgdXJsOiBlbnYuR1JBUEhfQ01TX0FQSV9VUkxfQ09SRSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBiZWFyZXIgJHtlbnYuR1JBUEhfQ01TX0FVVEhfVE9LRU5fQ09SRX1gLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlc29sdmU6IGBnYXRzYnktcGx1Z2luLW1keGAsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHJlbWFya1BsdWdpbnM6IFtdLFxuICAgICAgICByZWh5cGVQbHVnaW5zOiBbXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBnYXRzYnktcGx1Z2luLXJlYWN0LWhlbG1ldFxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2dhdHNieWpzL2dhdHNieS90cmVlL21hc3Rlci9wYWNrYWdlcy9nYXRzYnktcGx1Z2luLXJlYWN0LWhlbG1ldFxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL25mbC9yZWFjdC1oZWxtZXRcbiAgICAgKi9cbiAgICB7XG4gICAgICByZXNvbHZlOiAnZ2F0c2J5LXBsdWdpbi1yZWFjdC1oZWxtZXQnLFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iXX0=

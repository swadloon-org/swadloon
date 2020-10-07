'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.onCreateWebpackConfig = exports.onCreateBabelConfig = exports.onCreateNode = void 0;
const crypto_1 = __importDefault(require('crypto'));
const path_1 = __importDefault(require('path'));
const webpack_config_1 = require('./webpack.config');
/**
 * Gatsby Node Configuration
 *
 * @see https://www.gatsbyjs.com/docs/node-apis/
 */
require('dotenv').config();
exports.createPages = async ({ actions, graphql }) => {
  // const { data } = await graphql(`
  //   {
  //     gcms
  //   }
  // `);
  // console.log(data);
  // data.contents.nodes.forEach((node) => {
  //   createPage({
  //     component: path.resolve(`src/templates/blog-page.tsx`),
  //     context: {
  //       id: node.id,
  //       content: node.contentRich,
  //     } as BlogPostContext,
  //     path: `/blog-post/_${node.title}`,
  //   });
  // });
};
exports.onCreateNode = async ({ node, actions }) => {
  const { createNode, createNodeField } = actions;
  console.log(node.id);
  // Releases Nodes
  if (node.remoteTypeName === `String`) {
    // Add text/markdown node children to Release node
    const textNode = {
      id: `${node.id}-MarkdownBody`,
      parent: node.id,
      dir: path_1.default.resolve('./'),
      internal: {
        type: `${node.internal.type}MarkdownBody`,
        mediaType: 'text/markdown',
        content: node.body,
        contentDigest: crypto_1.default.createHash(`md5`).update(node.body).digest(`hex`),
      },
    };
    createNode(textNode);
    // Create markdownBody___NODE field
    createNodeField({
      node,
      name: 'markdownBody___NODE',
      value: textNode.id,
    });
  }
};
exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: 'babel-plugin-treat',
    options: {},
  });
};
exports.onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions }) => {
  const isProduction = stage !== `develop`;
  const isSSR = stage.includes(`html`);
  actions.setWebpackConfig(
    webpack_config_1.createGatsbyWebpackConfig({ isProduction, stage, isSSR, loaders, plugins })
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F0c2J5LW5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnYXRzYnktbm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxvREFBNEI7QUFFNUIsZ0RBQXdCO0FBQ3hCLHFEQUE2RDtBQUU3RDs7OztHQUlHO0FBRUgsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBTzNCLE9BQU8sQ0FBQyxXQUFXLEdBQUcsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7SUFDbkQsbUNBQW1DO0lBQ25DLE1BQU07SUFDTixXQUFXO0lBQ1gsTUFBTTtJQUNOLE1BQU07SUFDTixxQkFBcUI7SUFDckIsMENBQTBDO0lBQzFDLGlCQUFpQjtJQUNqQiw4REFBOEQ7SUFDOUQsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixtQ0FBbUM7SUFDbkMsNEJBQTRCO0lBQzVCLHlDQUF5QztJQUN6QyxRQUFRO0lBQ1IsTUFBTTtBQUNSLENBQUMsQ0FBQztBQUVXLFFBQUEsWUFBWSxHQUErQixLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtJQUNsRixNQUFNLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxHQUFHLE9BQU8sQ0FBQztJQUVoRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVyQixpQkFBaUI7SUFDakIsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLFFBQVEsRUFBRTtRQUNwQyxrREFBa0Q7UUFDbEQsTUFBTSxRQUFRLEdBQUc7WUFDZixFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxlQUFlO1lBQzdCLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNmLEdBQUcsRUFBRSxjQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUN2QixRQUFRLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLGNBQWM7Z0JBQ3pDLFNBQVMsRUFBRSxlQUFlO2dCQUMxQixPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2xCLGFBQWEsRUFBRSxnQkFBTTtxQkFDbEIsVUFBVSxDQUFDLEtBQUssQ0FBQztxQkFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFXLENBQUM7cUJBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUM7YUFDakI7U0FDRixDQUFDO1FBQ0YsVUFBVSxDQUFDLFFBQWUsQ0FBQyxDQUFDO1FBRTVCLG1DQUFtQztRQUNuQyxlQUFlLENBQUM7WUFDZCxJQUFJO1lBQ0osSUFBSSxFQUFFLHFCQUFxQjtZQUMzQixLQUFLLEVBQUUsUUFBUSxDQUFDLEVBQUU7U0FDbkIsQ0FBQyxDQUFDO0tBQ0o7QUFDSCxDQUFDLENBQUM7QUFFVyxRQUFBLG1CQUFtQixHQUFzQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtJQUNwRixPQUFPLENBQUMsY0FBYyxDQUFDO1FBQ3JCLElBQUksRUFBRSxvQkFBb0I7UUFDMUIsT0FBTyxFQUFFLEVBQUU7S0FDWixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFVyxRQUFBLHFCQUFxQixHQUF3QyxDQUFDLEVBQ3pFLEtBQUssRUFDTCxLQUFLLEVBQ0wsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEdBQ1IsRUFBRSxFQUFFO0lBQ0gsTUFBTSxZQUFZLEdBQUcsS0FBSyxLQUFLLFNBQVMsQ0FBQztJQUN6QyxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQywwQ0FBeUIsQ0FBQyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEcsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xuaW1wb3J0IHsgR2F0c2J5Tm9kZSB9IGZyb20gJ2dhdHNieSc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IGNyZWF0ZUdhdHNieVdlYnBhY2tDb25maWcgfSBmcm9tICcuL3dlYnBhY2suY29uZmlnJztcblxuLyoqXG4gKiBHYXRzYnkgTm9kZSBDb25maWd1cmF0aW9uXG4gKlxuICogQHNlZSBodHRwczovL3d3dy5nYXRzYnlqcy5jb20vZG9jcy9ub2RlLWFwaXMvXG4gKi9cblxucmVxdWlyZSgnZG90ZW52JykuY29uZmlnKCk7XG5cbmV4cG9ydCB0eXBlIEJsb2dQb3N0Q29udGV4dCA9IHtcbiAgaWQ6IHN0cmluZztcbiAgY29udGVudDogYW55O1xufTtcblxuZXhwb3J0cy5jcmVhdGVQYWdlcyA9IGFzeW5jICh7IGFjdGlvbnMsIGdyYXBocWwgfSkgPT4ge1xuICAvLyBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGdyYXBocWwoYFxuICAvLyAgIHtcbiAgLy8gICAgIGdjbXNcbiAgLy8gICB9XG4gIC8vIGApO1xuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgLy8gZGF0YS5jb250ZW50cy5ub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gIC8vICAgY3JlYXRlUGFnZSh7XG4gIC8vICAgICBjb21wb25lbnQ6IHBhdGgucmVzb2x2ZShgc3JjL3RlbXBsYXRlcy9ibG9nLXBhZ2UudHN4YCksXG4gIC8vICAgICBjb250ZXh0OiB7XG4gIC8vICAgICAgIGlkOiBub2RlLmlkLFxuICAvLyAgICAgICBjb250ZW50OiBub2RlLmNvbnRlbnRSaWNoLFxuICAvLyAgICAgfSBhcyBCbG9nUG9zdENvbnRleHQsXG4gIC8vICAgICBwYXRoOiBgL2Jsb2ctcG9zdC9fJHtub2RlLnRpdGxlfWAsXG4gIC8vICAgfSk7XG4gIC8vIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IG9uQ3JlYXRlTm9kZTogR2F0c2J5Tm9kZVsnb25DcmVhdGVOb2RlJ10gPSBhc3luYyAoeyBub2RlLCBhY3Rpb25zIH0pID0+IHtcbiAgY29uc3QgeyBjcmVhdGVOb2RlLCBjcmVhdGVOb2RlRmllbGQgfSA9IGFjdGlvbnM7XG5cbiAgY29uc29sZS5sb2cobm9kZS5pZCk7XG5cbiAgLy8gUmVsZWFzZXMgTm9kZXNcbiAgaWYgKG5vZGUucmVtb3RlVHlwZU5hbWUgPT09IGBTdHJpbmdgKSB7XG4gICAgLy8gQWRkIHRleHQvbWFya2Rvd24gbm9kZSBjaGlsZHJlbiB0byBSZWxlYXNlIG5vZGVcbiAgICBjb25zdCB0ZXh0Tm9kZSA9IHtcbiAgICAgIGlkOiBgJHtub2RlLmlkfS1NYXJrZG93bkJvZHlgLFxuICAgICAgcGFyZW50OiBub2RlLmlkLFxuICAgICAgZGlyOiBwYXRoLnJlc29sdmUoJy4vJyksXG4gICAgICBpbnRlcm5hbDoge1xuICAgICAgICB0eXBlOiBgJHtub2RlLmludGVybmFsLnR5cGV9TWFya2Rvd25Cb2R5YCxcbiAgICAgICAgbWVkaWFUeXBlOiAndGV4dC9tYXJrZG93bicsXG4gICAgICAgIGNvbnRlbnQ6IG5vZGUuYm9keSxcbiAgICAgICAgY29udGVudERpZ2VzdDogY3J5cHRvXG4gICAgICAgICAgLmNyZWF0ZUhhc2goYG1kNWApXG4gICAgICAgICAgLnVwZGF0ZShub2RlLmJvZHkgYXMgYW55KVxuICAgICAgICAgIC5kaWdlc3QoYGhleGApLFxuICAgICAgfSxcbiAgICB9O1xuICAgIGNyZWF0ZU5vZGUodGV4dE5vZGUgYXMgYW55KTtcblxuICAgIC8vIENyZWF0ZSBtYXJrZG93bkJvZHlfX19OT0RFIGZpZWxkXG4gICAgY3JlYXRlTm9kZUZpZWxkKHtcbiAgICAgIG5vZGUsXG4gICAgICBuYW1lOiAnbWFya2Rvd25Cb2R5X19fTk9ERScsXG4gICAgICB2YWx1ZTogdGV4dE5vZGUuaWQsXG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBvbkNyZWF0ZUJhYmVsQ29uZmlnOiBHYXRzYnlOb2RlWydvbkNyZWF0ZUJhYmVsQ29uZmlnJ10gPSAoeyBhY3Rpb25zIH0pID0+IHtcbiAgYWN0aW9ucy5zZXRCYWJlbFBsdWdpbih7XG4gICAgbmFtZTogJ2JhYmVsLXBsdWdpbi10cmVhdCcsXG4gICAgb3B0aW9uczoge30sXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IG9uQ3JlYXRlV2VicGFja0NvbmZpZzogR2F0c2J5Tm9kZVsnb25DcmVhdGVXZWJwYWNrQ29uZmlnJ10gPSAoe1xuICBzdGFnZSxcbiAgcnVsZXMsXG4gIGxvYWRlcnMsXG4gIHBsdWdpbnMsXG4gIGFjdGlvbnMsXG59KSA9PiB7XG4gIGNvbnN0IGlzUHJvZHVjdGlvbiA9IHN0YWdlICE9PSBgZGV2ZWxvcGA7XG4gIGNvbnN0IGlzU1NSID0gc3RhZ2UuaW5jbHVkZXMoYGh0bWxgKTtcbiAgYWN0aW9ucy5zZXRXZWJwYWNrQ29uZmlnKGNyZWF0ZUdhdHNieVdlYnBhY2tDb25maWcoeyBpc1Byb2R1Y3Rpb24sIHN0YWdlLCBpc1NTUiwgbG9hZGVycywgcGx1Z2lucyB9KSk7XG59O1xuIl19

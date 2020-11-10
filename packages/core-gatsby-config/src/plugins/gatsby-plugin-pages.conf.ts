import path from 'path';

export function getGastbyPluginPageCreatorConfig(options?: any) {
  return {
    resolve: `gatsby-plugin-page-creator`,
    options: {
      path: path.resolve('src', 'pages'),
      ignore: [`**/*.treat.ts`],
    },
  };
}

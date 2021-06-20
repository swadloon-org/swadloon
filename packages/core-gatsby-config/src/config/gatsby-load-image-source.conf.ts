import { PluginRef } from 'gatsby';
import path from 'path';

export function getGatsbyImageFolder(options?: { pathImgDir?: string }): PluginRef[] {
  const imageDirPath = options?.pathImgDir ? options.pathImgDir : path.join(`src`, `images`);

  return [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: imageDirPath,
      },
    },
    /**
     * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-copy-files-enhanced/
     */
    {
      resolve: 'gatsby-plugin-copy-files-enhanced',
      options: {
        source: imageDirPath,
        destination: '/images',
        purge: true,
      },
    },
  ];
}

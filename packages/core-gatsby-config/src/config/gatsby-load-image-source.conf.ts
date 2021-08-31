import { PluginRef } from 'gatsby';

type Options = { pathImgDir?: string | string[] };

/**
 * Add images in passed dirs to `gatsby-source-filesystem` and then copy them in
 * public/images with `gatsby-plugin-copy-files-enhanced`
 * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-copy-files-enhanced/
 */
export function getGatsbyImageFolder(options?: Options): PluginRef[] {
  const sourceDir = options?.pathImgDir;

  if (!sourceDir) {
    return [];
  }

  if (typeof sourceDir === 'string') {
    return [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: sourceDir,
        },
      },
      {
        resolve: 'gatsby-plugin-copy-files-enhanced',
        options: {
          source: sourceDir,
          destination: '/images',
          purge: true,
        },
      },
    ];
  }

  return sourceDir.reduce((previous, current) => {
    previous.push({
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: current,
      },
    });
    previous.push({
      resolve: 'gatsby-plugin-copy-files-enhanced',
      options: {
        source: current,
        destination: '/images',
        purge: true,
      },
    });
    return previous;
  }, [] as PluginRef[]);
}

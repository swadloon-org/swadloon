import path from 'path';

export function getGatsbyImageFolder(options?: { pathImgDir?: string }) {
  return {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: options?.pathImgDir ? options.pathImgDir : path.join(`src`, `images`),
    },
  };
}

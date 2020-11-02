export function getGatsbyImageFolder({ pathImgDir }: { pathImgDir: string }) {
  return {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: pathImgDir,
    },
  };
}

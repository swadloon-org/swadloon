/** @type {import('ts-node').RegisterOptions} */
const tsNodeOptions = {
  project: 'tsconfig.gatsby.json',
};

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-ts-config`,
      options: {
        tsNode: false,
      },
    },
  ],
};

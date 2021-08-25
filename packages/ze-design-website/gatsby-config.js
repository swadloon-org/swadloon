// @ts-check

/**
 * Support for gatsby-* files in .ts
 * @see https://github.com/Js-Brecht/gatsby-plugin-ts-config
 */

/** @type { import('gatsby-plugin-ts-config') } */
const { useGatsbyConfig } = require('gatsby-plugin-ts-config');

// eslint-disable-next-line react-hooks/rules-of-hooks
module.exports = useGatsbyConfig('./gatsby-config.ts', {
  type: 'ts-node',
});

/**
 * A Babel preset that compiles ES2015+ down to ES5 by automatically determining the Babel plugins
 * and polyfills you need based on your targeted browser or runtime environments.
 *
 * Documentation: https://github.com/babel/babel/tree/master/packages/babel-preset-env
 */
module.exports = [
  [
    '@babel/preset-env',
    {
      // see .browserslist -> for target which is a query to select browsers (ex: last 2 versions, > 5%, safari tp) using browserslist.
      useBuiltIns: 'usage', // Adds specific imports for polyfills when they are used in each file.
      corejs: 3,
      shippedProposals: false, // Toggles enabling support for builtin/feature proposals that have shipped in browsers.
      modules: false, // don't transform modules (webpack will do it)
    },
  ],
];

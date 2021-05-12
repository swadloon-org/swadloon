/**
 * Babel presets
 */
export const babelPresetConf: ([string, object] | [string])[] = [
  /**
   * @see https://babeljs.io/docs/en/babel-preset-typescript
   */
  [
    '@babel/preset-typescript',
    {
      isTSX: true, // defaults to false
      jsxPragma: `jsx`, // defaults to "React"
      allExtensions: true, // defaults to false
    },
  ],
  /**
   * A Babel preset that compiles ES2015+ down to ES5 by automatically determining the Babel plugins
   * and polyfills you need based on your targeted browser or runtime environments.
   *
   * Documentation: https://github.com/babel/babel/tree/master/packages/babel-preset-env
   * @see https://github.com/browserslist/browserslist
   */
  [
    '@babel/preset-env',
    {
      // see .browserslist -> for target which is a query to select browsers (ex: last 2 versions, > 5%, safari tp) using browserslist.
      targets: [
        'chrome >= 85',
        'firefox >= 82',
        'ios_saf >=12',
        'safari >=12',
        'not IE 11',
        'node >= 14',
      ],
      useBuiltIns: 'usage', // Adds specific imports for polyfills when they are used in each file.
      corejs: '3.8',
      shippedProposals: true, // Toggles enabling support for builtin/feature proposals that have shipped in browsers.
      modules: false, // don't transform modules (webpack will do it)
      loose: false,
      ignoreBrowserslistConfig: true,
    },
  ],
  ['@babel/preset-react'],
];

/*

# old browsers
# last 2 versions
# safari >= 9
# not ie <= 10
# not ie_mob > 0
# not dead

# modern browsers
defaults
not IE 11
maintained node versions

*/

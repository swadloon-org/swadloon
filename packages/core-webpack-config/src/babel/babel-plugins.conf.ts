/**
 * Babel plugins
 */
export const babelPluginBrowserConf: ([string, object] | [string])[] = [
  ['babel-plugin-lodash'],
  ['@babel/plugin-proposal-nullish-coalescing-operator'],
  ['@babel/plugin-proposal-private-methods', { loose: false }],
  ['@babel/plugin-transform-destructuring'],
  ['babel-plugin-optimize-hook-destructuring'],
  ['@babel/plugin-syntax-dynamic-import'],
  [
    '@babel/plugin-transform-runtime',
    {
      corejs: 3,
      helpers: true,
      regenerator: true,
      useESModules: true, // https://babeljs.io/docs/en/babel-plugin-transform-runtime#useesmodules
    },
  ],
  ['@babel/plugin-proposal-object-rest-spread'],
  ['@babel/plugin-proposal-optional-chaining'],
  ['@babel/plugin-proposal-numeric-separator'],
];

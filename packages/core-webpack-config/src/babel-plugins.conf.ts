/**
 * Babel plugins
 */
export const babelPluginConf: ([string, object] | [string])[] = [
  ['babel-plugin-lodash'],
  ['babel-plugin-treat'],
  ['@babel/plugin-proposal-nullish-coalescing-operator'],
  ['@babel/plugin-proposal-class-properties'],
  ['@babel/plugin-transform-destructuring'],
  ['babel-plugin-optimize-hook-destructuring'],
  ['@babel/plugin-syntax-dynamic-import'],
  [
    '@babel/plugin-transform-runtime',
    {
      helpers: true,
      corejs: 3,
      regenerator: true,
      useESModules: true, // https://babeljs.io/docs/en/babel-plugin-transform-runtime#useesmodules
    },
  ],
  ['@babel/plugin-proposal-object-rest-spread'],
];

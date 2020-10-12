/**
 * babel plugins
 */
export const babelPluginConf = [
  '@babel/plugin-proposal-optional-chaining',
  '@babel/plugin-syntax-dynamic-import',
  [
    '@babel/plugin-transform-runtime',
    {
      helpers: true,
      corejs: 3,
      regenerator: true,
      useESModules: true,
    },
  ],
  ['@babel/plugin-proposal-object-rest-spread'],
];

export default babelPluginConf;

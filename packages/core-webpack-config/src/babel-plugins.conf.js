// babel plugins for every babel loader
module.exports = [
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

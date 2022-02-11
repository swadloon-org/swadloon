import { GatsbyNode } from 'gatsby';

export const onCreateBabelConfigFunction: GatsbyNode['onCreateBabelConfig'] = (
  { actions },
  options
) => {
  actions.setBabelPlugin({
    name: require.resolve(`@babel/plugin-proposal-optional-chaining`),
    options: {},
  });
  actions.setBabelPlugin({
    name: require.resolve(`@babel/plugin-proposal-nullish-coalescing-operator`),
    options: {},
  });
  actions.setBabelPlugin({
    name: require.resolve(`@babel/plugin-proposal-numeric-separator`),
    options: {},
  });
  actions.setBabelPreset({
    name: require.resolve(`@babel/preset-typescript`),
    options,
  });
  actions.setBabelPreset({
    name: 'babel-preset-gatsby',
    options: {},
  });
};

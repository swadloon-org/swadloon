import { GatsbyNode } from 'gatsby';

export const onCreateBabelConfigFunction: GatsbyNode['onCreateBabelConfig'] = (
  { actions },
  options
) => {
  actions.setBabelPlugin({
    name: '@loadable/babel-plugin',
    options: {},
  });
  actions.setBabelPreset({
    name: 'babel-preset-gatsby',
    options: {},
  });
};

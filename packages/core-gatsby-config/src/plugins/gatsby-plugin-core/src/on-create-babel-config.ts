import { GatsbyNode } from 'gatsby';

export const onCreateBabelConfigFunction: GatsbyNode['onCreateBabelConfig'] = (
  { actions },
  options
) => {
  actions.setBabelPreset({
    name: 'babel-preset-gatsby',
    options: {},
  });
};

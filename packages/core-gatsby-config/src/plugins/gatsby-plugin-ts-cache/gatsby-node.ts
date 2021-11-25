import { GatsbyNode } from 'gatsby';

import { onCreateWebpackConfigFunction } from './src/on-create-webpack-config';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] =
  onCreateWebpackConfigFunction;

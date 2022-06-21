import { GatsbyNode } from 'gatsby';

import { onCreateWebpackConfigFunction } from './src/on-create-webpack-config.js';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] =
  onCreateWebpackConfigFunction;

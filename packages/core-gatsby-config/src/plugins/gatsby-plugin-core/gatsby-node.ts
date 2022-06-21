import { GatsbyNode } from 'gatsby';

import { createPagesFunction, onCreatePageFunction } from './src/create-pages.js';
import { createSchemaCustomizationFn } from './src/create-schema-customization.js';
import { onCreateBabelConfigFunction } from './src/on-create-babel-config.js';
import { onCreateWebpackConfigFunction } from './src/on-create-webpack-config.js';
import { onPreBootstrapFunction } from './src/on-pre-bootstrap.js';

export const onPreBootstrap: GatsbyNode['onPreBootstrap'] = onPreBootstrapFunction;
export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = onCreateBabelConfigFunction;
export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] =
  onCreateWebpackConfigFunction;
export const createPages: GatsbyNode['createPages'] = createPagesFunction;
export const onCreatePage: GatsbyNode['onCreatePage'] = onCreatePageFunction;
export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] =
  createSchemaCustomizationFn;
export const resolvableExtensions: GatsbyNode['resolvableExtensions'] = () => [`.ts`, `.tsx`];

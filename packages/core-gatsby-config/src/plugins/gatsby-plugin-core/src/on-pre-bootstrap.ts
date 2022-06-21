import fs from 'fs';
import path from 'path';

import { GatsbyNode } from 'gatsby';

import { CommonEnvType } from '@newrade/core-node-utils';

import { GatsbyCorePluginOptions } from '../gatsby-plugin-options.js';

export const onPreBootstrapFunction: GatsbyNode['onPreBootstrap'] = (
  { actions, reporter },
  options,
  callback
) => {
  const pluginOptions = options as unknown as GatsbyCorePluginOptions;
  const env = process.env as CommonEnvType;
  callback(null);
};

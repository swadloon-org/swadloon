import fs from 'fs';
import path from 'path';

import { GatsbyNode } from 'gatsby';

import { CommonEnvType } from '@newrade/core-node-utils';

import { GatsbyCorePluginOptions } from '../gatsby-plugin-options';

export const onPreBootstrapFunction: GatsbyNode['onPreBootstrap'] = (
  { actions, reporter },
  options,
  callback
) => {
  const pluginOptions = options as unknown as GatsbyCorePluginOptions;
  const env = process.env as CommonEnvType;

  // reporter.info(`[${pluginOptions.pluginName}]: clearing gatsby-plugin-mdx cache`);
  // if (fs.existsSync(path.resolve(process.cwd(), '.cache/caches/gatsby-plugin-mdx'))) {
  //   fs.rmSync(path.resolve(process.cwd(), '.cache/caches/gatsby-plugin-mdx'), {
  //     recursive: true,
  //     force: true,
  //   });
  // }
  callback(null);
};

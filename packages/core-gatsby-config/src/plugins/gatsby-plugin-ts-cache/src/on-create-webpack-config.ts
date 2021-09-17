import fs from 'fs';
import { GatsbyNode } from 'gatsby';
import path from 'path';
import { Configuration } from 'webpack';
import { GatsbyPluginTsCacheOptions } from '../gatsby-plugin-options';

/**
 * @see 'node_modules/gatsby/dist/utils/webpack.config.js'
 */
export const onCreateWebpackConfigFunction: GatsbyNode['onCreateWebpackConfig'] = (
  { stage, rules, loaders, plugins, actions, getConfig, reporter, store },
  options
) => {
  const pluginOptions = options as unknown as GatsbyPluginTsCacheOptions;

  const isProduction = process.env.NODE_ENV === 'production';

  /**
   * Retrieve the initial gatsby webpack config
   */
  const config = getConfig() as Configuration;

  if (!config) {
    return void 0;
  }

  reporter.info(`[${pluginOptions.pluginName}]: replacing cache config`);

  /**
   * Replace the default caching strategy
   */

  if (!isProduction) {
    reporter.info(`[${pluginOptions.pluginName}]: disabling webpack cache in development`);
    config.cache = undefined; // disabling all cache during development
    actions.replaceWebpackConfig(config);
    return;
  }

  config.cache = {
    type: 'filesystem',
    buildDependencies: {
      config: [
        __filename,
        path.resolve(process.cwd(), '..', '..', 'package.json'),
        path.resolve(process.cwd(), 'package.json'),
        path.resolve(process.cwd(), 'tsconfig.json'),
        ...store
          .getState()
          .flattenedPlugins.filter((plugin: any) =>
            plugin.nodeAPIs.includes(`onCreateWebpackConfig`)
          )
          .map((plugin: any) => {
            const pluginPath = path.join(plugin.resolve, `gatsby-node.js`);
            const pluginPathTs = path.join(plugin.resolve, `gatsby-node.ts`);
            let foundPluginPath;

            try {
              fs.readFileSync(pluginPath);
              foundPluginPath = pluginPath;
              return foundPluginPath;
            } catch (error: any) {
              reporter.info(`[${pluginOptions.pluginName}] could not find file: ${pluginPath}`);
            }

            try {
              reporter.info(`[${pluginOptions.pluginName}] trying file in ts: ${pluginPathTs}`);
              fs.readFileSync(pluginPathTs);
              reporter.info(`[${pluginOptions.pluginName}] found file: ${pluginPathTs}`);
              foundPluginPath = pluginPathTs;
            } catch (error: any) {
              reporter.info(`[${pluginOptions.pluginName}] could not find file: ${pluginPathTs}`);
            }
            return foundPluginPath;
          }),
      ],
    },
  };

  actions.replaceWebpackConfig(config);
};

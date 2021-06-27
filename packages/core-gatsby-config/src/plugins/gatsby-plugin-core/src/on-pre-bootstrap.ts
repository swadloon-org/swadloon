import { log, LOG_LEVEL } from '@newrade/core-utils';
import chalk from 'chalk';
import { spawn } from 'child_process';
import { GatsbyNode } from 'gatsby';
import { GatsbyCorePluginOptions } from '../gatsby-plugin-options';

export const onPreBootstrapFunction: GatsbyNode['onPreBootstrap'] = (args, options, callback) => {
  const pluginOptions = options as unknown as GatsbyCorePluginOptions;
  const toolName = pluginOptions.packageName;

  log(
    `GATSBY_ENABLE_INCREMENTAL_BUILD is set to "${process.env.GATSBY_ENABLE_INCREMENTAL_BUILD}"`,
    {
      toolName,
    }
  );

  if (process.env.GATSBY_ENABLE_INCREMENTAL_BUILD !== 'true') {
    const resultIncrementalBuild = callback && callback(null);
    return resultIncrementalBuild;
  }

  log(`rebuilding core-* packages for gatsby cloud's incremental build`, {
    toolName,
  });

  const cwd = spawn(`yarn postinstall`, {
    cwd: '../..',
    shell: true,
    env: process.env,
  });

  cwd.stdout.on('data', (data) => {
    log(`${data}`, {
      toolName,
    });
  });

  cwd.stdout.on('error', (data) => {
    log(`rebuilding core-* packages: ${chalk.green('error')}`, {
      toolName,
      level: LOG_LEVEL.ERROR,
    });
    log(data?.message, {
      toolName,
      level: LOG_LEVEL.ERROR,
    });
    return callback && callback(data);
  });

  cwd.on('close', (code) => {
    log(`rebuilding core-* packages: ${chalk.green('done')}`, {
      toolName,
    });
    return callback && callback(null);
  });
};

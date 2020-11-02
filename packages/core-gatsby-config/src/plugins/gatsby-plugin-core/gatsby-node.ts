import { log, LOG_LEVEL } from '@newrade/core-utils';
import chalk from 'chalk';
import { spawn } from 'child_process';
import { GatsbyNode } from 'gatsby';

export const onPreBootstrap: GatsbyNode['onPreBootstrap'] = (args, options, callback) => {
  log(`GATSBY_ENABLE_INCREMENTAL_BUILD is set to "${process.env.GATSBY_ENABLE_INCREMENTAL_BUILD}"`, {
    toolName: 'mir-website',
  });

  if (process.env.GATSBY_ENABLE_INCREMENTAL_BUILD !== 'true') {
    callback && callback(null);
    return;
  }

  log(`rebuilding core-* packages for gatsby cloud's incremental build`, {
    toolName: 'mir-website',
  });

  const cwd = spawn(`yarn postinstall`, {
    cwd: '../..',
    shell: true,
    env: process.env,
  });

  cwd.stdout.on('data', (data) => {
    log(`${data}`, {
      toolName: 'mir-website',
    });
  });

  cwd.stdout.on('error', (data) => {
    log(`rebuilding core-* packages: ${chalk.green('error')}`, {
      toolName: 'mir-website',
      level: LOG_LEVEL.ERROR,
    });
    log(data?.message, {
      toolName: 'mir-website',
      level: LOG_LEVEL.ERROR,
    });
    callback && callback(data);
  });

  cwd.on('close', (code) => {
    log(`rebuilding core-* packages: ${chalk.green('done')}`, {
      toolName: 'mir-website',
    });
    callback && callback(null);
  });
};

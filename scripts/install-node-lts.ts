#!/usr/bin/env ts-node-script

import * as dotenv from 'dotenv';
import { spawn } from 'child_process';

import { log, scriptLog } from './log';

dotenv.config(); // add env variables from .env

scriptLog(`node js version for this project: ${process.env['NVM_NODE_VERSION']}`);
scriptLog(`installing node with nvm...`);

const cwd = spawn(
  `unset npm_config_prefix && \
  source ~/.nvm/nvm.sh && \
  nvm install $NVM_NODE_VERSION && \
  nvm alias default $NVM_NODE_VERSION`,
  {
    cwd: '..',
    shell: true,
    stdio: 'pipe',
    env: process.env,
  }
);

/**
 * handle command output
 */

cwd.stdout.on('data', (data) => {
  log(data, {
    toolName: 'nvm',
    noNewline: true,
  });
});

cwd.stderr.on('data', (data) => {
  log(data, {
    toolName: 'nvm',
    noNewline: true,
  });
});

cwd.on('close', (code) => {
  log('done', {
    toolName: 'nvm',
  });
});

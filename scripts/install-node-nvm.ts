#!/usr/bin/env ts-node-script

import { spawn } from 'child_process';
import { log, scriptLog } from './log';
import { loadDotEnv, dotEnvProcess } from './utils';

loadDotEnv();

scriptLog(`node js version for this project: ${dotEnvProcess.NVM_NODE_VERSION}`);
scriptLog(`installing node with nvm...`);

const cwd = spawn(
  `unset npm_config_prefix PREFIX && \
  source ~/.nvm/nvm.sh && \
  nvm install ${dotEnvProcess.NVM_NODE_VERSION} && \
  nvm alias default ${dotEnvProcess.NVM_NODE_VERSION}`,
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

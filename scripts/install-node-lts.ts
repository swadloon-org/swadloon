#!/usr/bin/env ts-node-script

import * as dotenv from 'dotenv';
import { spawn } from 'child_process';

import { toolLog, scriptLog } from './log';

// add env variables from .env
dotenv.config();

scriptLog(`node js version for this project: ${process.env['NODE_VERSION']}`);
scriptLog(`installing node with nvm...`);

const cwd = spawn(
  `unset npm_config_prefix && \
  source ~/.nvm/nvm.sh && \
  nvm install $NODE_VERSION && \
  nvm alias default $NODE_VERSION`,
  {
    cwd: '..',
    shell: true,
    stdio: 'pipe',
    env: process.env,
  }
);

// handle spawn output

cwd.stdout.on('data', (data) => {
  toolLog(data, {
    toolName: 'nvm',
    noNewline: true,
  });
});

cwd.stderr.on('data', (data) => {
  toolLog(data, {
    toolName: 'nvm',
    noNewline: true,
  });
});

cwd.on('close', (code) => {
  toolLog('done', {
    toolName: 'nvm',
  });
});

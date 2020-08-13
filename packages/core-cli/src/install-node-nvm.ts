import { spawn } from 'child_process';
import { log, scriptLog } from 'core-utils';
import { loadDotEnv, dotEnvProcess } from './utils';
import * as os from 'os';

loadDotEnv();

scriptLog(
  `node js version for this project: ${dotEnvProcess.NVM_NODE_VERSION}`
);
scriptLog(`installing node with nvm...`);

scriptLog(`os is ${os.type()}`);

const cwd = spawn(
  `unset npm_config_prefix PREFIX && \
  . ~/.nvm/nvm.sh && \
  nvm install ${dotEnvProcess.NVM_NODE_VERSION} && \
  nvm unalias default`,
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

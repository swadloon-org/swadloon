#!/usr/bin/env ts-node-script

import * as chalk from 'chalk';
import * as dotenv from 'dotenv';
import { spawn } from 'child_process';

import { log, scriptLog, LOG_LEVEL } from './log';
import { devTools } from './dev-tools';

dotenv.config(); // add env variables from .env

scriptLog(`checking if required local deps are installed...`);

devTools.forEach(tool => {
  const cwd = invokeCommand(tool.command);

  cwd.stdout.on('data', data => {
    if (tool.versionRegex.test(data)) {
      log(data, {
        toolName: tool.name,
        noNewline: true
      });
      log(`version ${chalk.green('ok')}`, {
        toolName: tool.name
      });
      return;
    }

    log(data, {
      toolName: tool.name,
      noNewline: true
    });
    log(`version ${chalk.red('fail')}`, {
      toolName: tool.name
    });
    log(tool.messageIfRegexFails, {
      toolName: tool.name,
      level: LOG_LEVEL.ERROR
    });
  });

  cwd.stderr.on('data', data => {
    log(data, {
      toolName: tool.name,
      noNewline: true
    });
  });

  cwd.on('close', code => {
    // log('done', {
    //   toolName: 'nvm'
    // });
  });
});

function invokeCommand(command: string) {
  return spawn(command, {
    cwd: '..',
    shell: true,
    stdio: 'pipe',
    env: process.env
  });
}

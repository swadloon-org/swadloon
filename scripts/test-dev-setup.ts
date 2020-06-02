#!/usr/bin/env ts-node-script

import * as chalk from 'chalk';
import * as dotenv from 'dotenv';
import { spawn } from 'child_process';

import { log, scriptLog, LOG_LEVEL } from './log';
import { devTools, DevTool } from './dev-tools';

dotenv.config(); // add env variables from .env

scriptLog(`checking for required dependencies...`);

const failedDevTools: DevTool[] = [];

devTools.forEach((tool, index) => {
  const cwd = invokeCommand(tool.command);

  cwd.stdout.on('data', data => {
    if (tool.versionRegex.test(data)) {
      log(data, {
        toolName: tool.name,
        noNewline: true
      });
      log(`version check ${chalk.green('ok')}`, {
        toolName: tool.name
      });
      return;
    }

    log(data, {
      toolName: tool.name,
      noNewline: true
    });
    log(`version check ${chalk.red('fail')}`, {
      toolName: tool.name
    });
    log(tool.messageIfRegexFails, {
      toolName: tool.name,
      level: LOG_LEVEL.ERROR
    });
    if (tool?.mandatory) {
      failedDevTools.push(tool);
    }
  });

  cwd.stderr.on('data', data => {
    log(data, {
      toolName: tool.name,
      noNewline: true
    });
  });

  cwd.on('close', code => {
    // on the last tool
    if (index === devTools.length - 1) {
      checkForFailures();
    }
  });
});

function checkForFailures() {
  if (failedDevTools?.length) {
    scriptLog(`missing mandatory dependencies: ${failedDevTools.map(tool => tool.name).join(', ')}`);
  }
}

function invokeCommand(command: string) {
  return spawn(command, {
    cwd: '..',
    shell: true,
    stdio: 'pipe',
    env: process.env
  });
}

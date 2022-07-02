import { Command, Config } from '@oclif/core';
import chalk from 'chalk';
import debug from 'debug';

import { debugInstance, log, logCommand, logWarn, NS } from './utilities/log.utilities';

export class BaseCommand extends Command {
  chalk = chalk;
  log = log;
  logWarn = logWarn;
  logError = log;
  logCommand = logCommand;

  logDebug: debug.Debugger = debugInstance(`${NS}`);
  logWarnDebug: debug.Debugger = debugInstance(`${NS}:warn`);
  logErrorDebug: debug.Debugger = debugInstance(`${NS}:error`);

  constructor(argv: string[], config: Config, commandConfig?: { name?: string }) {
    super(argv, config);
    if (commandConfig?.name) {
      this.logDebug = debugInstance(`${NS}:${commandConfig.name}`);
      this.logWarnDebug = debugInstance(`${NS}:${commandConfig.name}:warn`);
      this.logErrorDebug = debugInstance(`${NS}:${commandConfig.name}:error`);
    }
  }

  async run() {}
}

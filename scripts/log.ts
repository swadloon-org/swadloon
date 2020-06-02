import * as chalk from 'chalk';

function scriptLog(message: string) {
  console.log(`${chalk.blue(`[scripts]`)} ${message}`);
}

/**
 *
 * @param {String} message
 * @param {String} tool
 * @param {Boolean} noNewline
 */
function toolLog(message, { toolName, noNewline }: { toolName: string; noNewline?: boolean }) {
  if (noNewline) {
    process.stdout.write(`${chalk.yellow(`[${toolName || 'tool'}]`)} ${message}`);
    return;
  }
  console.log(`${chalk.yellow(`[${toolName || 'tool'}]`)} ${message}`);
}

export { scriptLog, toolLog };

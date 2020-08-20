import { log as logCli, LOG_LEVEL } from 'core-utils';

export function log(
  message: string,
  options: {
    chalkColor?: string | undefined;
    toolName?: string;
    noNewline?: boolean | undefined;
    level?: LOG_LEVEL | undefined;
  } = {
    toolName: 'core-cli',
  }
) {
  logCli(message, {
    ...options,
    toolName: options.toolName || 'core-cli',
  });
}

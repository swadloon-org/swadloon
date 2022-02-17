import debug from 'debug';

export const logConfig = debug('nr:core-design-system-compiler:config');
export const logWarnConfig = logConfig.extend('warn');
export const logErrorConfig = logConfig.extend('error');

export const log = debug('nr:core-design-system-compiler:extract');
export const logWarn = log.extend('warn');
export const logError = log.extend('error');

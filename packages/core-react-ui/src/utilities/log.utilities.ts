import debug from 'debug';

export const log = debug('nr:core-react-ui');
export const logWarn = log.extend('warn');
export const logError = log.extend('error');

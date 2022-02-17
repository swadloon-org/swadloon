import debug from 'debug';

/**
 * core-react-ui debug namespace
 */
export const NS = 'nr:core-react-ui';

export const debugInstance = debug;

export const log = debugInstance(`${NS}`);
export const logWarn = debugInstance(`${NS}:warn`);
export const logError = debugInstance(`${NS}:error`);

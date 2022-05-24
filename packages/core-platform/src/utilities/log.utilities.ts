import debug from 'debug';

/**
 * debug namespace
 */
export const NS = 'nr:core-platform';

export const debugInstance = debug;

export const log = debugInstance(`${NS}`);
export const logWarn = debugInstance(`${NS}:warn`);
export const logError = debugInstance(`${NS}:error`);

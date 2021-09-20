import debug from 'debug';

/**
 * CLI debug namespace
 */
export const NS = 'nr:core-gatsby-ui';

export const debugInstance = debug;

export const log = debugInstance(`${NS}`);

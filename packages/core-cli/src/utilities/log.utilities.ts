import debug from 'debug';

/**
 * CLI debug namespace
 */
export const NS = 'nr:core-cli';

// there is an error with .extend in oclif, using separate debug instances instead
// always enable logging for the cli tools
debug.enable('nr:core-cli:*');

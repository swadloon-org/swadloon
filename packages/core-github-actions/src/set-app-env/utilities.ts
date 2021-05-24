import * as core from '@actions/core';
import { TEST_ENV } from '@newrade/core-common';
import { env } from '../../types/dot-env';

/**
 * Export an env variable using @actions/core's utility or process.env for tests
 *
 * @param name name of the variable e.g. MY_VAR
 * @param value value that will be converted to a string and assigned
 */
export function exportVariable(name?: string, value?: string | null | number) {
  if (!env) {
    throw Error(`env must be passed to ${exportVariable.name}`);
  }

  if (!name) {
    throw Error(`env name must be defined got: ${name}`);
  }

  if (!value) {
    console.info(`env ${name} has value ${value}, it will be converted to empty string ''`);
  }

  if (env.TEST_ENV === TEST_ENV.CI || env.TEST_ENV === TEST_ENV.LOCAL) {
    // for test purpose we simply assign
    if (typeof value === 'undefined' || value === null) {
      process.env[name] = '';
      return;
    }

    process.env[name] = value.toString();
  }

  // not a test so we execute the assignment with the real utility
  core.exportVariable(name, `${value}`);
}

export function join(paths?: (string | undefined)[]): string {
  if (!paths) {
    return '';
  }

  if (!paths.length) {
    return '';
  }

  return paths.filter((path) => path && path.length > 1).join('.');
}

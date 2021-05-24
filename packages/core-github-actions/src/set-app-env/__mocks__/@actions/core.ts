import * as core from '@actions/core/lib/core';

export function setFailed(message?: string) {
  throw new Error(message);
}

export function exportVariable(name: string, value: any) {
  core.exportVariable(name, value);
}

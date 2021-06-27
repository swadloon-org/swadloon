import * as core from '@actions/core';
import { promises as fsp } from 'fs';
import { VercelConfig } from './vercel';

export function readVercelConfigFile(path: string) {
  core.info(`reading vercel.json file: ${path}`);
  return fsp
    .readFile(path, 'utf-8')
    .then((result) => {
      return JSON.parse(result) as VercelConfig;
    })
    .catch((error) => {
      core.error(`could not read file ${path}`);
      return undefined;
    });
}

export function updateVercelConfigFile(path: string, data: VercelConfig) {
  core.info(`replacing vercel.json file content`);
  return fsp.writeFile(path, JSON.stringify(data, null, 2)).then(() => {
    return readVercelConfigFile(path);
  });
}

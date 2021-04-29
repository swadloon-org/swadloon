import * as core from '@actions/core';
import { promises as fsp } from 'fs'; // fix for node v12 https://stackoverflow.com/questions/64725249/fs-promises-api-in-typescript-not-compiling-in-javascript-correctly
import * as github from '@actions/github';
import { DEPLOY_ENV } from '@newrade/core-common';
import { VercelConfig } from './vercel';

try {
  const { context } = github;
  core.debug(`action : ${context.action}`);
  core.debug(`ref : ${context.ref}`);
  core.debug(`eventName : ${context.eventName}`);
  core.debug(`actor : ${context.actor}`);
  core.debug(`sha : ${context.sha}`);
  core.debug(`workflow : ${context.workflow}`);

  const vercelFilePath = core.getInput('vercel-json-path');

  core.debug(`looking for vercel.json at path: ${vercelFilePath}`);

  try {
    fsp
      .readFile(vercelFilePath, 'utf-8')
      .then((result) => {
        core.debug(`reading vercel.json file`);
        const vercelConfig = JSON.parse(result) as VercelConfig;

        core.debug(`current branch is: ${github.context.ref}`);
        // @ts-ignore
        core.debug(`target branch is: ${github.context.head_ref}`);

        core.debug(`current rewrites: ${JSON.stringify(vercelConfig?.rewrites, null, 2)}`);

        // switch (github.context.ref) {
        //   case 'refs/heads/dev': {
        //     core.exportVariable('APP_ENV', DEPLOY_ENV.DEV);
        //     break;
        //   }
        //   case 'refs/heads/master': {
        //     core.exportVariable('APP_ENV', DEPLOY_ENV.STAGING);
        //     break;
        //   }
        //   case 'refs/heads/release': {
        //     core.exportVariable('APP_ENV', DEPLOY_ENV.PRODUCTION);
        //     break;
        //   }
        //   default: {
        //     console.info('setting default APP_ENV');
        //     core.exportVariable('APP_ENV', DEPLOY_ENV.DEV);
        //   }
        // }
      })
      .catch((error) => {
        core.error(`could not find vercel.json file at the specified path`);
        core.error(`error: ${error}`);
      });
  } catch (error) {
    core.error(`could not find vercel.json file at the specified path`);
  }
} catch (error) {
  core.setFailed(error.message);
}

core.debug(`vercel.json updated succesfully`);

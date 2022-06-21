import * as core from '@actions/core';
import * as github from '@actions/github';
import { Context } from '@actions/github/lib/context';

import { DEPLOY_ENV } from '@newrade/core-common';

import { ENV } from '../../types/dot-env.js';

type ActionEnv = Partial<ENV>;

/**
 * `sync-forks` will create PRs in specified forks when commits are merged into the master branch
 *
 * @example (see README.md)
 *
 * Note: this action depends on [github-slug-action](https://github.com/rlespinasse/github-slug-action)
 */
export function runAction(env?: ActionEnv, githubContext?: Context) {
  if (!env) {
    throw Error(`env must be passed to ${runAction.name}`);
  }

  if (!githubContext) {
    throw Error(`githubContext must be passed to ${runAction.name}`);
  }

  if (!env.GITHUB_REF_SLUG) {
    throw Error(`[set-app-env] depends on [rlespinasse/github-slug-action]`);
  }

  try {
    core.info(`Setting env variables for the current context (event, branch)`);
    core.debug(`node arch: ${process.arch}`);
  } catch (error: any) {
    core.setFailed(error.message);
  }
}

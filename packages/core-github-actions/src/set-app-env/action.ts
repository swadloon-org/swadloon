import * as core from '@actions/core';
import * as github from '@actions/github';
import { Context } from '@actions/github/lib/context';
import { DEPLOY_ENV } from '@newrade/core-common';
import { ENV } from '../../types/dot-env';
import { exportVariable, join } from './utilities';

type ActionEnv = Partial<ENV>;

/**
 * `set-app-env` sets the env variables including the host depending on the build context.
 * For example if we have a website with an app and api, the urls would be:
 *
 *  dev.website.com
 *  dev.api.website.com
 *  dev.app.website.com
 *
 *  pr-422.website.com
 *  pr-422.api.website.com
 *  pr-422.app.website.com
 *
 *  website.com
 *  api.website.com
 *  app.website.com
 *
 * The scheme is [environment].[name].[domain] where
 *
 * - environment is `dev` for the dev branch, `staging` for the main or master branch and `''` for the production branch (release)
 * - name is a label for the package, e.g. 'api', 'docs', 'app'
 * - domain is the root domain name for the project
 *
 * @example
 *  for an `api` application on a PR (#422) branch the url would be
 *  pr-422.api.website.com
 *
 *  for an `app` application on the release branch the url would be
 *  app.website.com
 *
 * @see https://docs.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions
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
    core.info(`Current event is ${githubContext.eventName}`);

    core.debug(`Initial env variables:`);
    core.debug(`TEST_ENV: ${env.TEST_ENV}`);
    core.debug(`APP_ENV: ${env.APP_ENV}`);
    core.debug(`APP_DOMAIN: ${env.APP_DOMAIN}`);
    core.debug(`APP_SUBDOMAIN: ${env.APP_SUBDOMAIN}`);
    core.debug(`APP_BRANCH_SUBDOMAIN: ${env.APP_BRANCH_SUBDOMAIN}`);
    core.debug(`APP_PROTOCOL: ${env.APP_PROTOCOL}`);
    core.debug(`APP_HOST: ${env.APP_HOST}`);
    core.debug(`APP_PORT: ${env.APP_PORT}`);
    core.debug(`APP_CI_DEPLOY: ${env.APP_CI_DEPLOY}`);

    core.debug(`Branch that triggered the workflow: ${env.GITHUB_REF_SLUG}`);

    core.info(`Setting env variables`);

    exportVariable(env, 'APP_PROTOCOL', 'https'); // always https when deploying
    exportVariable(env, 'APP_PORT', '443'); // always 443 for https

    /**
     * Build url with `dev|staging|''` for push or workflow dispatch on branches
     * and `pr-<number>` for PRs
     */

    if (githubContext.eventName === 'push' || githubContext.eventName == 'workflow_dispatch') {
      core.info(`Branches without a PR won't be deployed`);
      exportVariable(env, 'APP_ENV', DEPLOY_ENV.DEV);
      exportVariable(env, 'APP_CI_DEPLOY', 'false');
      exportVariable(env, 'APP_BRANCH_SUBDOMAIN', '');

      switch (env.GITHUB_REF_SLUG) {
        case 'dev': {
          exportVariable(env, 'APP_ENV', DEPLOY_ENV.DEV);
          exportVariable(env, 'APP_BRANCH_SUBDOMAIN', 'dev');
          exportVariable(env, 'APP_CI_DEPLOY', 'true');
          break;
        }
        case 'master': {
          exportVariable(env, 'APP_ENV', DEPLOY_ENV.STAGING);
          exportVariable(env, 'APP_BRANCH_SUBDOMAIN', 'staging');
          exportVariable(env, 'APP_CI_DEPLOY', 'true');
          break;
        }
        case 'release': {
          exportVariable(env, 'APP_ENV', DEPLOY_ENV.PRODUCTION);
          exportVariable(env, 'APP_BRANCH_SUBDOMAIN', '');
          exportVariable(env, 'APP_CI_DEPLOY', 'true');
          break;
        }
        default: {
        }
      }
    }

    if (githubContext.eventName === 'pull_request') {
      core.debug(`Current branch ref: ${env.GITHUB_HEAD_REF_SLUG}`);
      core.debug(`Target branch: ${env.GITHUB_BASE_REF_SLUG}`);

      core.info(`Assigning PR branch sub domain`);
      exportVariable(env, 'APP_BRANCH_SUBDOMAIN');
      exportVariable(env, 'APP_CI_DEPLOY', 'true');

      const prNumber = github.context.issue.number;

      switch (env.GITHUB_BASE_REF_SLUG) {
        // for PR that targets other branches
        // default to 'dev' APP_ENV
        default:
        case 'dev': {
          exportVariable(env, 'APP_ENV', DEPLOY_ENV.DEV);
          exportVariable(env, 'APP_BRANCH_SUBDOMAIN', `pr-${prNumber}.dev`);
          break;
        }
        case 'master': {
          exportVariable(env, 'APP_ENV', DEPLOY_ENV.STAGING);
          exportVariable(env, 'APP_BRANCH_SUBDOMAIN', `pr-${prNumber}.staging`);
          break;
        }
        case 'release': {
          exportVariable(env, 'APP_ENV', DEPLOY_ENV.PRODUCTION);
          exportVariable(env, 'APP_BRANCH_SUBDOMAIN', `pr-${prNumber}`);
          break;
        }
      }
    }

    exportVariable(
      env,
      'APP_HOST',
      `${join([env.APP_BRANCH_SUBDOMAIN, env.APP_SUBDOMAIN, env.APP_DOMAIN])}`
    );

    if (!env.APP_HOST) {
      throw Error(`APP_HOST cannot be undefined, did you set APP_DOMAIN?`);
    }

    core.debug(`Output env variables:`);
    core.debug(`APP_ENV: ${env.APP_ENV}`);
    core.debug(`APP_DOMAIN: ${env.APP_DOMAIN}`);
    core.debug(`APP_SUBDOMAIN: ${env.APP_SUBDOMAIN}`);
    core.debug(`APP_BRANCH_SUBDOMAIN: ${env.APP_BRANCH_SUBDOMAIN}`);
    core.debug(`APP_PROTOCOL: ${env.APP_PROTOCOL}`);
    core.debug(`APP_HOST: ${env.APP_HOST}`);
    core.debug(`APP_PORT: ${env.APP_PORT}`);

    core.debug(`Output NodeJS infos:`);
    core.debug(`node version: ${process.version}`);
    core.debug(`node arch: ${process.arch}`);
  } catch (error: any) {
    core.setFailed(error.message);
  }
}

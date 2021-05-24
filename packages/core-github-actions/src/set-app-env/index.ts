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

  try {
    console.info(`Setting env variables for the current context (event, branch)`);

    console.info(`Initial env variables:`);
    console.info(`APP_ENV: ${env.APP_ENV}`);
    console.info(`APP_DOMAIN: ${env.APP_DOMAIN}`);
    console.info(`APP_SUBDOMAIN: ${env.APP_SUBDOMAIN}`);
    console.info(`APP_BRANCH_SUBDOMAIN: ${env.APP_BRANCH_SUBDOMAIN}`);
    console.info(`APP_PROTOCOL: ${env.APP_PROTOCOL}`);
    console.info(`APP_HOST: ${env.APP_HOST}`);
    console.info(`APP_PORT: ${env.APP_PORT}`);
    console.info(`APP_CI_DEPLOY: ${env.APP_CI_DEPLOY}`);
    console.info(`Current branch`, env.GITHUB_REF_SLUG_URL);
    console.info(`Current HEAD ref`, env.GITHUB_HEAD_REF_SLUG);
    console.info(`Base ref`, env.GITHUB_BASE_REF_SLUG);
    console.info(`Repository`, env.GITHUB_REPOSITORY_SLUG);
    console.info(`Current event is ${githubContext.eventName}`);

    console.info(`Setting env variables`);

    exportVariable('APP_PROTOCOL', 'https'); // always https when deploying
    exportVariable('APP_PORT', '443'); // always 443 for https

    /**
     * Build url with `dev|staging|''` for push or workflow dispatch on branches
     * and `pr-<number>` for PRs
     */

    if (githubContext.eventName === 'push' || githubContext.eventName == 'workflow_dispatch') {
      console.info(`Branches without a PR won't be deployed`);
      exportVariable('APP_CI_DEPLOY', 'false');
      exportVariable('APP_BRANCH_SUBDOMAIN', '');

      switch (env.GITHUB_REF_SLUG_URL) {
        case 'dev': {
          exportVariable('APP_ENV', DEPLOY_ENV.DEV);
          exportVariable('APP_BRANCH_SUBDOMAIN', 'dev');
          exportVariable('APP_CI_DEPLOY', 'true');
          break;
        }
        case 'master': {
          exportVariable('APP_ENV', DEPLOY_ENV.STAGING);
          exportVariable('APP_BRANCH_SUBDOMAIN', 'staging');
          exportVariable('APP_CI_DEPLOY', 'true');
          break;
        }
        case 'release': {
          exportVariable('APP_ENV', DEPLOY_ENV.PRODUCTION);
          exportVariable('APP_BRANCH_SUBDOMAIN', '');
          exportVariable('APP_CI_DEPLOY', 'true');
          break;
        }
        default: {
        }
      }
    }

    if (githubContext.eventName === 'pull_request') {
      console.info(`Assigning PR branch sub domain`);
      exportVariable('APP_BRANCH_SUBDOMAIN');
      exportVariable('APP_CI_DEPLOY', 'true');

      switch (env.GITHUB_HEAD_REF_SLUG) {
        case 'dev': {
          exportVariable('APP_ENV', DEPLOY_ENV.DEV);
          exportVariable('APP_BRANCH_SUBDOMAIN', `pr-${githubContext.runNumber}.dev`);
          break;
        }
        case 'master': {
          exportVariable('APP_ENV', DEPLOY_ENV.STAGING);
          exportVariable('APP_BRANCH_SUBDOMAIN', `pr-${githubContext.runNumber}.staging`);
          break;
        }
        case 'release': {
          exportVariable('APP_ENV', DEPLOY_ENV.PRODUCTION);
          exportVariable('APP_BRANCH_SUBDOMAIN', `pr-${githubContext.runNumber}`);
          break;
        }
        default: {
        }
      }
    }

    exportVariable(
      'APP_HOST',
      `${join([env.APP_BRANCH_SUBDOMAIN, env.APP_SUBDOMAIN, env.APP_DOMAIN])}`
    );

    console.info(`Output env variables:`);
    console.info(`APP_ENV: ${env.APP_ENV}`);
    console.info(`APP_DOMAIN: ${env.APP_DOMAIN}`);
    console.info(`APP_SUBDOMAIN: ${env.APP_SUBDOMAIN}`);
    console.info(`APP_BRANCH_SUBDOMAIN: ${env.APP_BRANCH_SUBDOMAIN}`);
    console.info(`APP_PROTOCOL: ${env.APP_PROTOCOL}`);
    console.info(`APP_HOST: ${env.APP_HOST}`);
    console.info(`APP_PORT: ${env.APP_PORT}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

/**
 * Retrieve env and run the action
 */
runAction((github.context as any).env as ENV, github.context);

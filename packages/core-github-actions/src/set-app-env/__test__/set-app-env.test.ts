import * as core from '@actions/core';
import * as github from '@actions/github';
import { DEPLOY_ENV } from '@newrade/core-common';
import { runAction } from '..';
import { env, ENV } from '../../../types/dot-env';
import { exportVariable } from '../utilities';

describe(`set-app-env github action`, () => {
  describe(`context`, () => {
    it('should mock github.context correctly', () => {
      expect(github.context.runNumber).toEqual(1);
      expect(github.context.eventName).toEqual('push');
      expect(github.context.ref).toEqual('refs/heads/dev');
    });
  });

  describe(`core`, () => {
    it('should mock core.setFailed correctly', () => {
      expect(() => {
        core.setFailed('test');
      }).toThrow();
    });
  });

  describe(`${exportVariable.name}`, () => {
    it('should set correct env variable if executed in a jest test', () => {
      exportVariable('TEST_VAR', 'value');
      expect(process.env['TEST_VAR']).toEqual('value');
    });
  });

  describe(`the ${runAction.name} for an api package`, () => {
    it('should set correct env variable for a push on dev branch', () => {
      exportVariable('GITHUB_REF_SLUG_URL', 'dev');
      exportVariable('APP_DOMAIN', 'website.com');
      exportVariable('APP_SUBDOMAIN', 'api');

      runAction(env, github.context);

      const afterEnv: ENV = process.env as ENV;

      expect(afterEnv.APP_ENV).toEqual(DEPLOY_ENV.DEV);
      expect(afterEnv.APP_DOMAIN).toEqual('website.com');
      expect(afterEnv.APP_BRANCH_SUBDOMAIN).toEqual('dev');
      expect(afterEnv.APP_CI_DEPLOY).toEqual('true');
      expect(afterEnv.APP_HOST).toEqual('dev.api.website.com');
    });

    it('should set correct env variable for a push on master branch', () => {
      exportVariable('GITHUB_REF_SLUG_URL', 'master');
      exportVariable('APP_DOMAIN', 'website.com');
      exportVariable('APP_SUBDOMAIN', 'api');

      runAction(env, github.context);

      const afterEnv: ENV = process.env as ENV;

      expect(afterEnv.APP_ENV).toEqual(DEPLOY_ENV.STAGING);
      expect(afterEnv.APP_DOMAIN).toEqual('website.com');
      expect(afterEnv.APP_BRANCH_SUBDOMAIN).toEqual('staging');
      expect(afterEnv.APP_CI_DEPLOY).toEqual('true');
      expect(afterEnv.APP_HOST).toEqual('staging.api.website.com');
    });

    it('should set correct env variable for a push on release branch', () => {
      exportVariable('GITHUB_REF_SLUG_URL', 'release');
      exportVariable('APP_DOMAIN', 'website.com');
      exportVariable('APP_SUBDOMAIN', 'api');

      runAction(env, github.context);

      const afterEnv: ENV = process.env as ENV;

      expect(afterEnv.APP_ENV).toEqual(DEPLOY_ENV.PRODUCTION);
      expect(afterEnv.APP_DOMAIN).toEqual('website.com');
      expect(afterEnv.APP_BRANCH_SUBDOMAIN).toEqual('');
      expect(afterEnv.APP_CI_DEPLOY).toEqual('true');
      expect(afterEnv.APP_HOST).toEqual('api.website.com');
    });

    it('should set correct env variable for a push on non deployed branch (without PR)', () => {
      exportVariable('GITHUB_REF_SLUG_URL', 'feature-a');
      exportVariable('APP_DOMAIN', 'website.com');
      exportVariable('APP_SUBDOMAIN', 'api');

      runAction(env, github.context);

      const afterEnv: ENV = process.env as ENV;

      expect(afterEnv.APP_ENV).toEqual(DEPLOY_ENV.PRODUCTION);
      expect(afterEnv.APP_DOMAIN).toEqual('website.com');
      expect(afterEnv.APP_BRANCH_SUBDOMAIN).toEqual('');
      expect(afterEnv.APP_CI_DEPLOY).toEqual('false');
      expect(afterEnv.APP_HOST).toEqual('api.website.com');
    });

    it('should set correct env variable for a pull request targeting the master branch', () => {
      github.context.eventName = 'pull_request';
      exportVariable('GITHUB_REF_SLUG_URL', 'feature-a');
      exportVariable('GITHUB_HEAD_REF_SLUG', 'master');
      exportVariable('APP_DOMAIN', 'website.com');
      exportVariable('APP_SUBDOMAIN', 'api');

      runAction(env, github.context);

      const afterEnv: ENV = process.env as ENV;

      expect(afterEnv.APP_ENV).toEqual(DEPLOY_ENV.STAGING);
      expect(afterEnv.APP_DOMAIN).toEqual('website.com');
      expect(afterEnv.APP_BRANCH_SUBDOMAIN).toEqual('pr-1.staging');
      expect(afterEnv.APP_CI_DEPLOY).toEqual('true');
      expect(afterEnv.APP_HOST).toEqual('pr-1.staging.api.website.com');
    });

    it('should set correct env variable for a pull request targeting the release branch', () => {
      github.context.eventName = 'pull_request';
      exportVariable('GITHUB_REF_SLUG_URL', 'master');
      exportVariable('GITHUB_HEAD_REF_SLUG', 'release');
      exportVariable('APP_DOMAIN', 'website.com');
      exportVariable('APP_SUBDOMAIN', 'api');

      runAction(env, github.context);

      const afterEnv: ENV = process.env as ENV;

      expect(afterEnv.APP_ENV).toEqual(DEPLOY_ENV.PRODUCTION);
      expect(afterEnv.APP_DOMAIN).toEqual('website.com');
      expect(afterEnv.APP_BRANCH_SUBDOMAIN).toEqual('pr-1');
      expect(afterEnv.APP_CI_DEPLOY).toEqual('true');
      expect(afterEnv.APP_HOST).toEqual('pr-1.api.website.com');
    });
  });

  describe(`the ${runAction.name} for an website package`, () => {
    it('should set correct env variable for a push on dev branch', () => {
      github.context.eventName = 'push';
      exportVariable('GITHUB_REF_SLUG_URL', 'dev');
      exportVariable('GITHUB_HEAD_REF_SLUG', '');
      exportVariable('APP_DOMAIN', 'website.com');
      exportVariable('APP_SUBDOMAIN', '');

      runAction(env, github.context);

      const afterEnv: ENV = process.env as ENV;

      expect(afterEnv.APP_ENV).toEqual(DEPLOY_ENV.DEV);
      expect(afterEnv.APP_DOMAIN).toEqual('website.com');
      expect(afterEnv.APP_BRANCH_SUBDOMAIN).toEqual('dev');
      expect(afterEnv.APP_CI_DEPLOY).toEqual('true');
      expect(afterEnv.APP_HOST).toEqual('dev.website.com');
    });
  });
});

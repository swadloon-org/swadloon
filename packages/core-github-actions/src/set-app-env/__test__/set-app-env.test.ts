import * as core from '@actions/core';
import * as github from '@actions/github';
import { DEPLOY_ENV } from '@newrade/core-common';
import { runAction } from '../action';
import { env as processEnv, ENV } from '../../../types/dot-env';
import { exportVariable } from '../utilities';

function getEnv() {
  return { ...processEnv } as ENV;
}

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

  describe(`env`, () => {
    it('should not be affected by previous test (equality)', () => {
      const env = getEnv();
      const env2 = getEnv();
      exportVariable(env, 'GITHUB_REF_SLUG', 'side-effect-test-env');

      expect(env['GITHUB_REF_SLUG']).toEqual('side-effect-test-env');
      const notEqualToPreviousRef = env2['GITHUB_REF_SLUG'] !== 'side-effect-test-env';
      expect(notEqualToPreviousRef).toBeTruthy();
    });
  });

  describe(`isolated env`, () => {
    it('should not be affected by previous test (export)', () => {
      const env = getEnv();
      exportVariable(env, 'APP_DOMAIN', 'website.com');
      exportVariable(env, 'GITHUB_REF_SLUG', 'side-effect-test');
      exportVariable(env, 'TEST_RUN', '1');

      runAction(env, github.context);

      expect((env as any)['TEST_RUN']).toEqual('1');
      expect(env['GITHUB_REF_SLUG']).toEqual('side-effect-test');
    });
  });

  describe(`env`, () => {
    it('should not be affected by previous test (read)', () => {
      const env = getEnv();
      exportVariable(env, 'APP_DOMAIN', 'website.com');
      const notEqualToPreviousRef = env['GITHUB_REF_SLUG'] !== 'side-effect-test';
      expect(notEqualToPreviousRef).toBeTruthy();
      expect((env as any)['TEST_VAR']).toEqual(undefined);

      exportVariable(env, 'GITHUB_REF_SLUG', 'side-effect-test-2');
      exportVariable(env, 'TEST_RUN', '2');

      runAction(env, github.context);

      expect((env as any)['TEST_RUN']).toEqual('2');
      expect(env['GITHUB_REF_SLUG']).toEqual('side-effect-test-2');
    });
  });

  describe(`${exportVariable.name}`, () => {
    it('should set correct env variable if executed in a jest test', () => {
      const env = getEnv();
      exportVariable(env, 'TEST_VAR', 'value');
      expect((env as any)['TEST_VAR']).toEqual('value');
    });
  });

  describe(`the ${runAction.name} for an api package`, () => {
    it('should set correct env variable for a push on dev branch', () => {
      const env = getEnv();
      exportVariable(env, 'GITHUB_REF_SLUG', 'dev');
      exportVariable(env, 'APP_DOMAIN', 'website.com');
      exportVariable(env, 'APP_SUBDOMAIN', 'api');

      runAction(env, github.context);

      const afterEnv: ENV = env as ENV;

      expect(afterEnv.APP_ENV).toEqual(DEPLOY_ENV.DEV);
      expect(afterEnv.APP_DOMAIN).toEqual('website.com');
      expect(afterEnv.APP_BRANCH_SUBDOMAIN).toEqual('dev');
      expect(afterEnv.APP_CI_DEPLOY).toEqual('true');
      expect(afterEnv.APP_HOST).toEqual('dev.api.website.com');
    });

    it('should set correct env variable for a push on master branch', () => {
      const env = getEnv();
      exportVariable(env, 'GITHUB_REF_SLUG', 'master');
      exportVariable(env, 'APP_DOMAIN', 'website.com');
      exportVariable(env, 'APP_SUBDOMAIN', 'api');

      runAction(env, github.context);

      const afterEnv: ENV = env as ENV;

      expect(afterEnv.APP_ENV).toEqual(DEPLOY_ENV.STAGING);
      expect(afterEnv.APP_DOMAIN).toEqual('website.com');
      expect(afterEnv.APP_BRANCH_SUBDOMAIN).toEqual('staging');
      expect(afterEnv.APP_CI_DEPLOY).toEqual('true');
      expect(afterEnv.APP_HOST).toEqual('staging.api.website.com');
    });

    it('should set correct env variable for a push on release branch', () => {
      const env = getEnv();
      exportVariable(env, 'GITHUB_REF_SLUG', 'release');
      exportVariable(env, 'APP_DOMAIN', 'website.com');
      exportVariable(env, 'APP_SUBDOMAIN', 'api');

      runAction(env, github.context);

      const afterEnv: ENV = env as ENV;

      expect(afterEnv.APP_ENV).toEqual(DEPLOY_ENV.PRODUCTION);
      expect(afterEnv.APP_DOMAIN).toEqual('website.com');
      expect(afterEnv.APP_BRANCH_SUBDOMAIN).toEqual('');
      expect(afterEnv.APP_CI_DEPLOY).toEqual('true');
      expect(afterEnv.APP_HOST).toEqual('api.website.com');
    });

    it('should set correct env variable for a push on non deployed branch (without PR)', () => {
      const env = getEnv();
      exportVariable(env, 'GITHUB_REF_SLUG', 'feature-a');
      exportVariable(env, 'APP_DOMAIN', 'website.com');
      exportVariable(env, 'APP_SUBDOMAIN', 'api');

      runAction(env, github.context);

      const afterEnv: ENV = env as ENV;

      expect(afterEnv.APP_ENV).toEqual(DEPLOY_ENV.DEV);
      expect(afterEnv.APP_DOMAIN).toEqual('website.com');
      expect(afterEnv.APP_BRANCH_SUBDOMAIN).toEqual('');
      expect(afterEnv.APP_CI_DEPLOY).toEqual('false');
      expect(afterEnv.APP_HOST).toEqual('api.website.com');
    });

    it('should set correct env variable for a pull request targeting the master branch', () => {
      const env = getEnv();
      github.context.eventName = 'pull_request';
      exportVariable(env, 'GITHUB_REF_SLUG', 'feature-a');
      exportVariable(env, 'GITHUB_BASE_REF_SLUG', 'master');
      exportVariable(env, 'APP_DOMAIN', 'website.com');
      exportVariable(env, 'APP_SUBDOMAIN', 'api');

      runAction(env, github.context);

      const afterEnv: ENV = env as ENV;

      expect(afterEnv.APP_ENV).toEqual(DEPLOY_ENV.STAGING);
      expect(afterEnv.APP_DOMAIN).toEqual('website.com');
      expect(afterEnv.APP_BRANCH_SUBDOMAIN).toEqual('pr-1.staging');
      expect(afterEnv.APP_CI_DEPLOY).toEqual('true');
      expect(afterEnv.APP_HOST).toEqual('pr-1.staging.api.website.com');
    });

    it('should set correct env variable for a pull request targeting the release branch', () => {
      const env = getEnv();
      github.context.eventName = 'pull_request';
      exportVariable(env, 'GITHUB_REF_SLUG', 'master');
      exportVariable(env, 'GITHUB_BASE_REF_SLUG', 'release');
      exportVariable(env, 'APP_DOMAIN', 'website.com');
      exportVariable(env, 'APP_SUBDOMAIN', 'api');

      runAction(env, github.context);

      const afterEnv: ENV = env as ENV;

      expect(afterEnv.APP_ENV).toEqual(DEPLOY_ENV.PRODUCTION);
      expect(afterEnv.APP_DOMAIN).toEqual('website.com');
      expect(afterEnv.APP_BRANCH_SUBDOMAIN).toEqual('pr-1');
      expect(afterEnv.APP_CI_DEPLOY).toEqual('true');
      expect(afterEnv.APP_HOST).toEqual('pr-1.api.website.com');
    });
  });

  describe(`the ${runAction.name} for an website package`, () => {
    it('should set correct env variable for a push on dev branch', () => {
      const env = getEnv();
      github.context.eventName = 'push';
      exportVariable(env, 'GITHUB_REF_SLUG', 'dev');
      exportVariable(env, 'GITHUB_BASE_REF_SLUG', '');
      exportVariable(env, 'APP_DOMAIN', 'website.com');
      exportVariable(env, 'APP_SUBDOMAIN', '');

      runAction(env, github.context);

      const afterEnv: ENV = env as ENV;

      expect(afterEnv.APP_ENV).toEqual(DEPLOY_ENV.DEV);
      expect(afterEnv.APP_DOMAIN).toEqual('website.com');
      expect(afterEnv.APP_BRANCH_SUBDOMAIN).toEqual('dev');
      expect(afterEnv.APP_CI_DEPLOY).toEqual('true');
      expect(afterEnv.APP_HOST).toEqual('dev.website.com');
    });
  });
});

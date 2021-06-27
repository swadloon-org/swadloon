import * as t from 'io-ts';
import { NODE_ENV, DEPLOY_ENV, TEST_ENV } from '@newrade/core-common';
import { TextBoolean } from './boolean-env';

/**
 * Standard NodeJS NODE_ENV values.
 */
const NodeEnv = t.keyof({
  [NODE_ENV.DEVELOPMENT]: NODE_ENV.DEVELOPMENT,
  [NODE_ENV.TEST]: NODE_ENV.TEST,
  [NODE_ENV.PRODUCTION]: NODE_ENV.PRODUCTION,
});

/**
 * Our deploy environment values
 */
const DeployEnv = t.keyof({
  [DEPLOY_ENV.LOCAL]: DEPLOY_ENV.LOCAL,
  [DEPLOY_ENV.DEV]: DEPLOY_ENV.DEV,
  [DEPLOY_ENV.STAGING]: DEPLOY_ENV.STAGING,
  [DEPLOY_ENV.PRODUCTION]: DEPLOY_ENV.PRODUCTION,
});

/**
 * Test environment value, used to set tests to mock environments or do specific things when running
 * on CI/CD
 */
const TestEnv = t.keyof({
  [TEST_ENV.LOCAL]: TEST_ENV.LOCAL,
  [TEST_ENV.CI]: TEST_ENV.CI,
});

/**
 * Typed representation of the .env files. All apps and sites should
 * use this type as a base for their .env file.
 */
export const CommonEnv = t.intersection([
  t.type({
    /**
     * The NodeJS version installed by `nvm`
     */
    NVM_NODE_VERSION: t.string,
    /**
     * The master repository's git host
     * @default 'github.com'
     */
    MASTER_GIT_HOST: t.string,
    /**
     * The master repository's organization
     * @example '@newrade'
     */
    MASTER_REPO_ORG: t.string,
    /**
     * The master repository's name
     * @example 'repo-name' in @<org>/<repo-name>
     */
    MASTER_REPO_NAME: t.string,
    /**
     * The repository git host
     * @default 'github.com'
     */
    PROJECT_GIT_HOST: t.string,
    /**
     * The repository's organization
     * @example '@newrade'
     */
    PROJECT_REPO_ORG: t.string,
    /**
     * The repository name
     * @example 'repo-name' in @<org>/<repo-name>
     */
    PROJECT_REPO_NAME: t.string,
    /**
     * Deploy environment
     */
    APP_ENV: DeployEnv,
    /**
     * Domain for the app, api, or website
     * @example website
     */
    APP_DOMAIN: t.string,
    /**
     * Subdomain for the app, api, or website
     * @example "" in "website.com"
     * @example "api" in "api.website.com"
     * @example "app" in "dev.app.website.com"
     */
    APP_SUBDOMAIN: t.string,
  }),
  t.partial({
    /**
     * The NodeJS environment
     */
    NODE_ENV: NodeEnv,
    /**
     * Branch subdomain a specific build
     * @example "" in "website.com"
     * @example "" in "api.website.com"
     * @example "dev" in "dev.app.website.com"
     * @example "pr-422" in "pr-422.app.website.com"
     */
    APP_BRANCH_SUBDOMAIN: t.string,
    /**
     * Protocol used for apps e.g. http in local, https elsewhere
     * @example http, https
     * @default https
     */
    APP_PROTOCOL: t.string,
    /**
     * Application host
     * @example website.com, api.website.com
     * @default localhost
     */
    APP_HOST: t.string,
    /**
     * Local port
     * @default 443
     */
    APP_PORT: t.string,
    /**
     * Whether the app will be deployed or not
     */
    APP_CI_DEPLOY: TextBoolean,
    /**
     * Test environment
     */
    TEST_ENV: TestEnv,
  }),
]);

export type CommonEnvType = t.TypeOf<typeof CommonEnv>;

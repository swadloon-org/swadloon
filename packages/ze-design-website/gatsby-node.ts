import path from 'path';

import { GatsbyNode } from 'gatsby';

import { loadDotEnv } from '@newrade/core-node-utils';

import { ENV, Env } from './types/dot-env.js';
import { CLIENT_ENV } from './types/dot-env-client.js';
import packageJson from './package.json';

const env = loadDotEnv<ENV>({
  schema: Env,
  dotEnvPath: path.resolve(__dirname, '.env'),
  packageName: packageJson.name,
});

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
};

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  plugins,
  actions,
}) => {
  const clientEnv: CLIENT_ENV = {
    NODE_ENV: JSON.stringify(env.NODE_ENV),
    NODE_VERSION: JSON.stringify(env.NODE_ENV),
    APP_ENV: JSON.stringify(env.APP_ENV),
    APP_VERSION: JSON.stringify(packageJson.version),
  } as CLIENT_ENV;
  actions.setWebpackConfig({
    plugins: [plugins.define(clientEnv)],
  });
};

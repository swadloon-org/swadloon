import child_process from 'child_process';
import { GatsbyNode } from 'gatsby';
import path from 'path';
/**
 * Gatsby Node Configuration
 *
 * @see https://www.gatsbyjs.com/docs/node-apis/
 */
import util from 'util';
import { loadDotEnv } from '../core-utils/src';
import packageJson from './package.json';
import { ENV, Env } from './types/dot-env';
import { CLIENT_ENV } from './types/dot-env-client';

const env = loadDotEnv<ENV>({
  schema: Env,
  dotEnvPath: path.resolve(__dirname, '.env'),
  packageName: packageJson.name,
});

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  /**
   * Page rdirection
   */
  // createRedirect({ fromPath: '/employeur-en-personnel-specialise/', toPath: '/employeurs/', isPermanent: true });
  // createRedirect({ fromPath: '/division-secteur-industriel/', toPath: '/employeurs/', isPermanent: true });
  // createRedirect({ fromPath: '/division-entreprises-de-services/', toPath: '/employeurs/', isPermanent: true });
  // createRedirect({ fromPath: '/division-construction/', toPath: '/employeurs/', isPermanent: true });
  // createRedirect({
  //   fromPath: '/candidats-recrutement-personnel-specialise/',
  //   toPath: '/candidats/',
  //   isPermanent: true,
  // });
  // createRedirect({
  //   fromPath: '/coordonnees/',
  //   toPath: '/nous-joindre/',
  //   isPermanent: true,
  // });
  /**
   * /plan.php
   * /boucher.php
   * /consultation.php
   * /couts.php
   * /spermogramme.php
   * /joindre.php
   */
};

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ plugins, actions }) => {
  const clientEnv: CLIENT_ENV = {
    NODE_ENV: JSON.stringify(env.NODE_ENV),
    NODE_VERSION: JSON.stringify(env.NODE_ENV),
    APP_ENV: JSON.stringify(env.APP_ENV),
    APP_VERSION: JSON.stringify(packageJson.version),
    CANADA_POST_API_KEY_VSB: JSON.stringify(env.CANADA_POST_API_KEY_VSB),
  } as CLIENT_ENV;
  actions.setWebpackConfig({
    plugins: [plugins.define(clientEnv)],
  });
};

const exec = util.promisify(child_process.exec);

export const onPostBuild = async (gatsbyNodeHelpers: any) => {
  const { reporter } = gatsbyNodeHelpers;

  const reportOut = (report: any) => {
    const { stderr, stdout } = report;
    if (stderr) reporter.error(stderr);
    if (stdout) reporter.info(stdout);
  };
  reportOut(await exec('yarn copy:functions'));
};

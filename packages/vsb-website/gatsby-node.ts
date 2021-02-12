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
   * Page redirections
   */
  createRedirect({ fromPath: '/boucher.php', toPath: '/equipe/', isPermanent: true });
  createRedirect({ fromPath: '/boucher', toPath: '/equipe/', isPermanent: true });
  createRedirect({ fromPath: '/plan.php', toPath: '/', isPermanent: true });
  createRedirect({ fromPath: '/plan', toPath: '/', isPermanent: true });
  createRedirect({ fromPath: '/consultation.php', toPath: '/vasectomie/', isPermanent: true });
  createRedirect({ fromPath: '/consultation', toPath: '/vasectomie/', isPermanent: true });
  createRedirect({ fromPath: '/vasectomie.php', toPath: '/vasectomie/', isPermanent: true });
  createRedirect({ fromPath: '/vasectomie', toPath: '/vasectomie/', isPermanent: true });
  createRedirect({ fromPath: '/couts.php', toPath: '/vasectomie/', isPermanent: true });
  createRedirect({ fromPath: '/couts', toPath: '/vasectomie/', isPermanent: true });
  createRedirect({ fromPath: '/spermogramme.php', toPath: '/vasectomie/', isPermanent: true });
  createRedirect({ fromPath: '/spermogramme', toPath: '/vasectomie/', isPermanent: true });
  createRedirect({ fromPath: '/etapes.php', toPath: '/vasectomie/', isPermanent: true });
  createRedirect({ fromPath: '/etapes', toPath: '/vasectomie/', isPermanent: true });
  createRedirect({ fromPath: '/meac.php', toPath: '/examen-pour-transport-canada/', isPermanent: true });
  createRedirect({ fromPath: '/meac', toPath: '/examen-pour-transport-canada/', isPermanent: true });
  createRedirect({
    fromPath: '/media/pdf/depliant-preparatoire-vasectomie.pdf',
    toPath: '/vasectomie/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/media/pdf/carton-informations-vasectomie.pdf',
    toPath: '/vasectomie/',
    isPermanent: true,
  });
  createRedirect({ fromPath: '/joindre.php', toPath: '/contact/', isPermanent: true });
  createRedirect({ fromPath: '/joindre', toPath: '/contact/', isPermanent: true });
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

import child_process from 'child_process';
import { GatsbyNode } from 'gatsby';
/**
 * Gatsby Node Configuration
 *
 * @see https://www.gatsbyjs.com/docs/node-apis/
 */
import util from 'util';

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

const exec = util.promisify(child_process.exec);

export const onPostBuild = async (gatsbyNodeHelpers: any) => {
  const { reporter } = gatsbyNodeHelpers;

  const reportOut = (report: any) => {
    const { stderr, stdout } = report;
    if (stderr) reporter.error(stderr);
    if (stdout) reporter.info(stdout);
  };
  console.log('lambda test');
  reportOut(await exec('yarn lambda'));
};

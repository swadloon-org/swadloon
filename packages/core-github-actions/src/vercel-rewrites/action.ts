import * as core from '@actions/core';
import { Context } from '@actions/github/lib/context';

import { ENV } from '../../types/dot-env';

import { readVercelConfigFile, updateVercelConfigFile } from './utilities';
import { VercelConfig } from './vercel';

type ActionEnv = Partial<ENV>;

/**
 * `vercel-rewrites` update rewrite destination based on the branch sub domain before deploying to vercel
 *
 * Note: this action depends on set-app-env
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

  if (!env.APP_BRANCH_SUBDOMAIN) {
    throw Error(
      `APP_BRANCH_SUBDOMAIN must be set to update the vercel.json file, did you run [set-app-env]?`
    );
  }

  const APP_BRANCH_SUBDOMAIN = env.APP_BRANCH_SUBDOMAIN;

  try {
    core.info(`action : ${githubContext.action}`);
    core.info(`ref : ${githubContext.ref}`);
    core.info(`eventName : ${githubContext.eventName}`);
    core.info(`actor : ${githubContext.actor}`);
    core.info(`sha : ${githubContext.sha}`);
    core.info(`workflow : ${githubContext.workflow}`);

    const workingDir = core.getInput('working-directory'); // ./packages/package-name

    core.info(`looking for vercel.json files in: ${workingDir}`);

    const filenames = ['vercel.json', 'vercel.ci.json'];
    const vercelJsonFileFilenames = filenames.map((filename) => {
      return readVercelConfigFile(`${workingDir}/${filename}`);
    });

    try {
      Promise.all(vercelJsonFileFilenames)
        .then((values) => values.filter((value) => !!value) as VercelConfig[])
        .then((values) => {
          if (values.length !== 2) {
            const msg = 'vercel.json and vercel.ci.json must be provided';
            core.error(msg);
            throw new Error(msg);
          }

          const [vercelProdConfig, vercelCiConfig] = values;
          const vercelConfigPath = `${workingDir}/${filenames[0]}`;

          core.info(`current branch is: ${githubContext.ref}`);
          // @ts-ignore
          core.info(`target branch is: ${githubContext.head_ref}`);

          core.debug(
            `updating config file and returning both the object and the updated file for verification`
          );

          const updatedConfigObject: VercelConfig = {
            ...vercelProdConfig,
            ...{
              ...vercelCiConfig,
              rewrites: vercelCiConfig.rewrites?.map((rewriteRule) => {
                const currentDestination = rewriteRule.destination;
                const newDestination = rewriteRule.destination.replace(
                  '{{ APP_BRANCH_SUBDOMAIN }}',
                  APP_BRANCH_SUBDOMAIN
                );
                core.info(`replacing '${currentDestination}' with: '${newDestination}'`);
                return {
                  source: rewriteRule.source,
                  destination: newDestination,
                };
              }),
            },
          };

          return updateVercelConfigFile(vercelConfigPath, updatedConfigObject).then(
            (updatedConfigFile) => {
              return {
                updatedConfig: updatedConfigObject,
                updatedConfigFile,
              };
            }
          );
        })
        .then(({ updatedConfig, updatedConfigFile }) => {
          if (!updatedConfig) {
            const msg = 'no updated vercel config object received, aborting';
            core.error(msg);
            throw new Error(msg);
          }

          if (!updatedConfigFile) {
            const msg = 'no updated vercel config file received, aborting';
            core.error(msg);
            throw new Error(msg);
          }

          if (JSON.stringify(updatedConfig) !== JSON.stringify(updatedConfigFile)) {
            const msg =
              'updated vercel.json file content does not match the updated config object, aborting!';
            core.error(msg);
            throw new Error(msg);
          }

          core.info(`updated vercel.json file successfully ✅`);
        })
        .catch((error) => {
          core.error(`could not find vercel.json files in the specified directory`);
          core.error(`error: ${error}`);
        });
    } catch (error: any) {
      core.error(`could not find vercel.json file at the specified path`);
    }
  } catch (error: any) {
    core.setFailed(error.message);
  }
}

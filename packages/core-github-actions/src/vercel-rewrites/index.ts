import * as core from '@actions/core';
import { promises as fsp } from 'fs'; // fix for node v12 https://stackoverflow.com/questions/64725249/fs-promises-api-in-typescript-not-compiling-in-javascript-correctly
import * as github from '@actions/github';
import { DEPLOY_ENV } from '@newrade/core-common';
import { VercelConfig } from './vercel';

try {
  const { context } = github;
  core.info(`action : ${context.action}`);
  core.info(`ref : ${context.ref}`);
  core.info(`eventName : ${context.eventName}`);
  core.info(`actor : ${context.actor}`);
  core.info(`sha : ${context.sha}`);
  core.info(`workflow : ${context.workflow}`);

  const workingDir = core.getInput('working-directory'); // ./packages/package-name

  core.info(`looking for vercel.json in: ${workingDir}`);

  const filenames = ['vercel.json', 'vercel.dev.json', 'vercel.master.json'];
  const vercelJsonFileFilenames = filenames.map((filename) => {
    core.info(`reading vercel.json file: ${filename}`);
    return fsp.readFile(`${workingDir}/${filename}`, 'utf-8');
  });

  try {
    Promise.all(vercelJsonFileFilenames)
      .then((values) => {
        core.info(`reading vercel.json files:\t success ✅`);
        const [vercelProdConfig, vercelDevConfig, vercelMasterConfig] = values.map(
          (file) => JSON.parse(file) as VercelConfig
        );

        core.info(`current branch is: ${github.context.ref}`);
        // @ts-ignore
        core.info(`target branch is: ${github.context.head_ref}`);

        switch (github.context.ref) {
          case 'refs/heads/dev': {
            core.info(`replacing .rewrites property with ${filenames[1]}'s`);
            vercelProdConfig.rewrites = vercelDevConfig.rewrites;
            core.info(`rewrites: ${JSON.stringify(vercelProdConfig.rewrites, null, 2)}`);
            fsp.writeFile(filenames[1], JSON.stringify(vercelProdConfig));
            break;
          }
          case 'refs/heads/master': {
            core.info(`replacing .rewrites property with ${filenames[2]}'s`);
            vercelProdConfig.rewrites = vercelMasterConfig.rewrites;
            core.info(`rewrites: ${JSON.stringify(vercelProdConfig.rewrites, null, 2)}`);
            fsp.writeFile(filenames[2], JSON.stringify(vercelProdConfig));
            break;
          }
          case 'refs/heads/release': {
            break;
          }
          default: {
            console.info('only replacing vercel.json config on branches release, master and dev');
          }
        }

        core.info(`vercel.json updated succesfully`);
      })
      .catch((error) => {
        core.error(`could not find vercel.json files in the specified directory`);
        core.error(`error: ${error}`);
      });
  } catch (error) {
    core.error(`could not find vercel.json file at the specified path`);
  }
} catch (error) {
  core.setFailed(error.message);
}

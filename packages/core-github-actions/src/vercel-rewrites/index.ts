import * as core from '@actions/core';
import { promises as fsp } from 'fs'; // fix for node v12 https://stackoverflow.com/questions/64725249/fs-promises-api-in-typescript-not-compiling-in-javascript-correctly
import * as github from '@actions/github';
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

  core.info(`looking for vercel.json files in: ${workingDir}`);

  const filenames = ['vercel.json', 'vercel.dev.json', 'vercel.master.json'];
  const vercelJsonFileFilenames = filenames.map((filename) => {
    return readVercelConfigFile(`${workingDir}/${filename}`);
  });

  try {
    Promise.all(vercelJsonFileFilenames)
      .then((values) => values.filter((value) => !!value) as VercelConfig[])
      .then((values) => {
        if (values.length !== 3) {
          const msg = 'vercel.json, vercel.dev.json and vercel.master.json must be provided';
          core.error(msg);
          throw new Error(msg);
        }

        const [vercelProdConfig, vercelDevConfig, vercelMasterConfig] = values;
        const vercelConfigPath = `${workingDir}/${filenames[0]}`;

        core.info(`current branch is: ${github.context.ref}`);
        // @ts-ignore
        core.info(`target branch is: ${github.context.head_ref}`);

        core.debug(`updating config file and returning both the object and the updated file for verification`);

        switch (github.context.ref) {
          case 'refs/heads/dev': {
            const updatedConfigObject = { ...vercelProdConfig, ...vercelDevConfig };
            return updateVercelConfigFile(vercelConfigPath, updatedConfigObject).then((updatedConfigFile) => {
              return {
                updatedConfig: updatedConfigObject,
                updatedConfigFile,
              };
            });
          }
          case 'refs/heads/master': {
            const updatedConfigObject = { ...vercelProdConfig, ...vercelMasterConfig };
            return updateVercelConfigFile(vercelConfigPath, updatedConfigObject).then((updatedConfigFile) => {
              return {
                updatedConfig: updatedConfigObject,
                updatedConfigFile,
              };
            });
          }
          default:
          case 'refs/heads/release': {
            console.info('only replacing vercel.json config on branches master and dev');
            return readVercelConfigFile(`${workingDir}/${filenames[0]}`).then((updatedConfigFile) => {
              return {
                updatedConfig: updatedConfigFile,
                updatedConfigFile,
              };
            });
          }
        }
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
          const msg = 'updated vercel.json file content does not match the updated config object, aborting!';
          core.error(msg);
          throw new Error(msg);
        }

        core.info(`updated vercel.json file successfully ✅`);
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

function readVercelConfigFile(path: string) {
  core.info(`reading vercel.json file: ${path}`);
  return fsp
    .readFile(path, 'utf-8')
    .then((result) => {
      return JSON.parse(result) as VercelConfig;
    })
    .catch((error) => {
      core.error(`could not read file ${path}`);
      return undefined;
    });
}

function updateVercelConfigFile(path: string, data: VercelConfig) {
  core.info(`replacing vercel.json file content`);
  return fsp.writeFile(path, JSON.stringify(data, null, 2)).then(() => {
    return readVercelConfigFile(path);
  });
}

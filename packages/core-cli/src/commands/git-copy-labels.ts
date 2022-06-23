import { Command, Flags } from '@oclif/core';
import chalk from 'chalk';
import debug from 'debug';
import * as t from 'io-ts';
import { Octokit } from 'octokit';

import { loadDotEnv } from '@newrade/core-node-utils';

import { NS } from '../utilities/log.utilities.js';

export type ENV = t.TypeOf<typeof Env>;
export const Env = t.intersection([
  t.type({}),
  t.type({
    GH_TOKEN: t.string,
  }),
]);

export default class GitCopyLabels extends Command {
  log = debug(`${NS}:git-copy-labels`);
  logWarn = debug(`${NS}:git-copy-labels:warn`);
  logError = debug(`${NS}:git-copy-labels:error`);

  static description = 'copy labels from a repo to another';

  static examples = [`$ nr git-copy-labels`];

  static flags = {
    help: Flags.help({ char: 'h' }),
  };

  static args = [
    { name: 'source', description: 'source repo <org-name>/<repo-name>', required: true },
    { name: 'destination', description: 'destination repo <org-name>/<repo-name>', required: true },
  ];

  async init() {
    debug.enable('nr:core-cli:*');
  }

  async run() {
    const { args, flags } = await this.parse(GitCopyLabels);

    this.log('validating inputs');

    const { source, destination } = args;
    const [sourceOrg, sourceRepo] = source.split('/');
    const [destinationOrg, destinationRepo] = destination.split('/');

    this.log(`source owner: \t\t ${chalk.blue(sourceOrg)}`);
    this.log(`source repo:  \t\t ${chalk.blue(sourceRepo)}`);

    this.log(`destination owner: \t ${chalk.green(destinationOrg)}`);
    this.log(`destination repo:  \t ${chalk.green(destinationRepo)}`);

    if (!(sourceOrg && sourceRepo && destinationOrg && destinationRepo)) {
      this.logError('please double check inputs');
      return;
    }

    this.log('loading .env file');

    const env = loadDotEnv<ENV>({
      schema: Env,
      dotEnvPath: '.env',
      dotEnvRootPath: '../../.env',
      packageName: 'core-cli',
    });

    if (!env.GH_TOKEN) {
      this.logError('missing env GH_TOKEN');
    }

    this.log('validate credentials');

    const octokit = new Octokit({ auth: env.GH_TOKEN });

    this.log(`retrieve repo labels for: ${sourceOrg}/${sourceRepo}`);

    let sourceLabels;

    try {
      sourceLabels = await octokit.rest.issues.listLabelsForRepo({
        owner: sourceOrg,
        repo: sourceRepo,
      });

      if (!sourceLabels.data.length) {
        this.logError('could not retrieve labels');
        return;
      }

      this.log(`got ${sourceLabels.data.length} labels`);

      sourceLabels.data.forEach((label) => {
        this.log(`found label: ${label.name}`);
      });
    } catch (error: any) {
      this.logError('could not retrieve labels');
      return;
    }

    this.log(`retrieve repo labels for: ${destinationOrg}/${destinationRepo}`);

    try {
      const destinationLabels = await octokit.rest.issues.listLabelsForRepo({
        owner: destinationOrg,
        repo: destinationRepo,
      });

      this.log(`got ${destinationLabels.data.length} labels in destination repo`);

      this.log(`creating new labels...`);

      await Promise.all(
        sourceLabels.data.map(async (sourceLabel) => {
          const existingLabel = destinationLabels.data.find(
            (destinationLabel) => destinationLabel.name === sourceLabel.name
          );

          if (existingLabel) {
            this.log(`updating existing label: ${existingLabel.name}`);

            return await octokit.rest.issues.updateLabel({
              owner: destinationOrg,
              repo: destinationRepo,
              name: sourceLabel.name,
              color: sourceLabel.color,
            });
          }

          this.log(`creating new label: ${sourceLabel.name}`);

          return await octokit.rest.issues.createLabel({
            owner: destinationOrg,
            repo: destinationRepo,
            name: sourceLabel.name,
            color: sourceLabel.color,
          });
        })
      );
    } catch (error: any) {
      this.logError('could not peform the action');
      this.logError(error);
      return;
    }

    this.log('done! ✅');
  }
}

import { Config, Flags } from '@oclif/core';
import simpleGit from 'simple-git';

import { BaseCommand } from '../base-command.js';

export default class GitCleanBranches extends BaseCommand {
  static description = 'delete local branches that are already merged on origin';

  static examples = [`$ nr git-clean-branches`];

  static flags = {
    help: Flags.help({ char: 'h' }),
  };

  static args = [];

  constructor(argv: string[], config: Config) {
    super(argv, config, { name: 'git-clean-branches' });
  }

  async init() {}

  async run() {
    const git = simpleGit();

    this.log('looking for local branches to remove');

    const localBranches = await git.branchLocal();
    this.log(`local branches: ${localBranches.all.map((branch) => this.chalk.blueBright(branch))}`);

    const ignoredBranches = ['dev', 'master', 'release'];
    this.log(`ignored: ${ignoredBranches.map((branch) => this.chalk.blueBright(branch))}`);

    const mergedToMasterBranches = await git.branch(['--merged', 'master']);
    this.log(`branches merged on master: ${mergedToMasterBranches.all}`);

    const localBranchesToBeDeleted = localBranches.all
      .filter((localBranch) => mergedToMasterBranches.all.includes(localBranch))
      .filter((branch) => !ignoredBranches.includes(branch));
    this.log(
      `to remove: ${
        localBranchesToBeDeleted.length
          ? localBranchesToBeDeleted.map((branch) => this.chalk.red(branch))
          : '[]'
      }`
    );

    if (!localBranchesToBeDeleted.length) {
      this.log(`no branches to remove ✅`);
      return;
    }

    localBranchesToBeDeleted.map(async (branchToRemove) => {
      this.log(`removing ${branchToRemove}`);
      const removed = await git.branch([`-d`, branchToRemove]);
    });
  }
}

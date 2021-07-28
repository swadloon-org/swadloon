import { Command, flags } from '@oclif/command';
import chalk from 'chalk';
import debug from 'debug';
import simpleGit from 'simple-git';

export default class GitResetBranches extends Command {
  log: debug.Debugger = debug('newrade:core-cli:git-reset-branches');
  logWarn: debug.Debugger = debug('newrade:core-cli:git-reset-branches:warn');
  logError: debug.Debugger = debug('newrade:core-cli:git-reset-branches:error');

  static description = 'delete local branches that are already merged on origin';

  static examples = [`$ nr git-clean-branches`];

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [];

  async init() {
    debug.enable('newrade*');
  }

  async run() {
    const git = simpleGit();

    this.log('looking for local branches to remove');

    const localBranches = await git.branchLocal();
    this.log(`local branches: ${localBranches.all.map((branch) => chalk.blueBright(branch))}`);

    const ignoredBranches = ['dev', 'master', 'release'];
    this.log(`ignored: ${ignoredBranches.map((branch) => chalk.blueBright(branch))}`);

    const mergedToMasterBranches = await git.branch(['--merged', 'master']);
    this.log(`branches merged on master: ${mergedToMasterBranches.all}`);

    const localBranchesToBeDeleted = localBranches.all
      .filter((localBranch) => mergedToMasterBranches.all.includes(localBranch))
      .filter((branch) => !ignoredBranches.includes(branch));
    this.log(
      `to remove: ${
        localBranchesToBeDeleted.length
          ? localBranchesToBeDeleted.map((branch) => chalk.red(branch))
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

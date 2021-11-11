import { Command, flags } from '@oclif/command';
import chalk from 'chalk';
import debug from 'debug';
import simpleGit from 'simple-git';

export default class CleanNodeModules extends Command {
  ddebug: debug.Debugger = debug('nr:core-cli:clean-node-modules');
  ddebugWarn: debug.Debugger = debug('nr:core-cli:clean-node-modules:warn');
  ddebugError: debug.Debugger = debug('nr:core-cli:clean-node-modules:error');

  static description = `find . -name 'node_modules' -type d -prune -print -exec rimraf -rf '{}' \;`;

  // nvm cache clear
  // yarn cache clear
  // npm cache clear --force
  static examples = [`$ nr resetbranches`];

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [{ name: 'dir' }];

  async init() {
    debug.enable('nr:core-cli:*');
  }

  async run() {
    const git = simpleGit();

    this.ddebug('looking for local branches to remove');

    const localBranches = await git.branchLocal();
    this.ddebug(`local branches: ${localBranches.all.map((branch) => chalk.blueBright(branch))}`);

    const ignoredBranches = ['dev', 'master', 'release'];
    this.ddebug(`ignored: ${ignoredBranches.map((branch) => chalk.blueBright(branch))}`);

    const mergedToMasterBranches = await git.branch(['--merged', 'master']);
    this.ddebug(`branches merged on master: ${mergedToMasterBranches.all}`);

    const localBranchesToBeDeleted = localBranches.all
      .filter((localBranch) => mergedToMasterBranches.all.includes(localBranch))
      .filter((branch) => !ignoredBranches.includes(branch));
    this.ddebug(
      `to remove: ${
        localBranchesToBeDeleted.length
          ? localBranchesToBeDeleted.map((branch) => chalk.red(branch))
          : '[]'
      }`
    );

    if (!localBranchesToBeDeleted.length) {
      this.ddebug(`no branches to remove ✅`);
      return;
    }

    localBranchesToBeDeleted.map(async (branchToRemove) => {
      this.ddebug(`removing ${branchToRemove}`);
      const removed = await git.branch([`-d`, branchToRemove]);
    });

    // bash sucks 👎
    // spawnSync(`git branch --merged master | grep -v '^[ *]*master$' | xargs git branch -d`, {
    //   cwd: '.',
    //   shell: getShellForPlatform(),
    //   stdio: 'inherit',
    //   env: process.env,
    // });
  }
}

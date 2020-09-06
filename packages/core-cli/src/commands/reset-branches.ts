import { Command, flags } from '@oclif/command';

import { log } from 'core-utils';
import { spawnSync } from 'child_process';

export default class ResetBranches extends Command {
  static description = 'delete local branches that are merged on the origin';

  static examples = [`$ nr resetbranches`];

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [{ name: 'file' }];

  async run() {
    const spawn = require('child_process').spawn;
    const lsChild = spawn('ls', ['-l', '-a']);

    let savedOutput = '';

    lsChild.stdout.on('data', (data) => {
      const strData = data.toString();
      console.log(strData);
      savedOutput += strData;
    });

    lsChild.stderr.on('data', (data) => {
      assert(false, 'Not sure what you want with stderr');
    });

    lsChild.on('close', (code) => {
      console.log('Child exited with', code, 'and stdout has been saved');
      // at this point 'savedOutput' contains all your data.
    });
  }
}

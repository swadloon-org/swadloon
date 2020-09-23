import { log } from '@newrade/core-utils';
import { Command, flags } from '@oclif/command';

export default class Hello extends Command {
  static description = 'describe the command here';

  static examples = [
    `$ nr hello
  hello world from ./src/hello.ts!
  `,
  ];

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
  };

  static args = [{ name: 'file' }];

  async run() {
    const { args, flags } = this.parse(Hello);

    log('1.0.0', {
      toolName: 'core-cli',
    });

    const name = flags.name ?? 'world';
    this.log(`hello ${name} from ./src/commands/hello.ts`);
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}

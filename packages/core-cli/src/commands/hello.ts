import { Command, flags } from '@oclif/command';
import { IConfig } from '@oclif/config';
import debug from 'debug';

import { NS } from '../utilities/log.utilities';

export default class Hello extends Command {
  log = debug(`${NS}:hello`);
  logWarn = debug(`${NS}:hello:warn`);
  logError = debug(`${NS}:hello:error`);

  constructor(argv: string[], config: IConfig) {
    super(argv, config);
  }

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

  async init() {}

  async run() {
    const { args, flags } = this.parse(Hello);
    const name = flags.name ?? 'world';
    console.log(`hello ${name} from ./src/commands/hello.ts`);
    if (args.file && flags.force) {
      console.log(`you input --force and --file: ${args.file}`);
    }
  }
}

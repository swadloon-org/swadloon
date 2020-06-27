#!/usr/bin/env node --no-warnings --es-module-specifier-resolution=node --experimental-json-modules

import commander from 'commander';

import { log } from 'core-utils';

const program = new commander.Command();
// program.version(packagejson.version);
program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza');

program.command('version').action(() => {
  log('1.0.0', {
    toolName: 'core-cli',
  });
});

program.command('check-dev-reqs').action(() => {
  log('1.0.0', {
    toolName: 'core-cli',
  });
});

program.parse(process.argv);

if (program.debug) {
  console.log(program.opts());
}
console.log('pizza details:');
if (program.small) {
  console.log('- small pizza size');
}
if (program.pizzaType) {
  console.log(`- ${program.pizzaType}`);
}

export default program;

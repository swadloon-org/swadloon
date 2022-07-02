import os from 'os';

import { Config } from '@oclif/core';

import { BaseCommand } from '../base-command.js';

/**
 * Get local IPv4 addresses
 */
export default class LocalIp extends BaseCommand {
  static description = 'Print out local machine ip on the connected network';

  static examples = [`$ nr local-ip`];

  static args = [{ name: 'args' }];

  static flags = {
    // config: Flags.string({ description: '', default: '' }),
  };

  constructor(argv: string[], config: Config) {
    super(argv, config, { name: 'local-ip' });
  }

  async run() {
    const { args, flags } = await this.parse(LocalIp);

    let localIp;
    const ifaces = os.networkInterfaces();
    const interfacesIds = Object.keys(ifaces);

    this.log(`found: ${interfacesIds.length} interfaces`);

    interfacesIds.forEach((ifname) => {
      const networkInterfaces = ifaces[ifname];
      networkInterfaces?.forEach((iface) => {
        if (!/ipv4/gi.test(iface.family)) {
          return;
        }

        this.log(`found ipv4: ${iface.address}`);
      });
    });
  }
}

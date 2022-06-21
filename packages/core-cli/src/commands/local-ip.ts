import os from 'os';

import { Command } from '@oclif/command';

import { debugInstance, enableDebug, NS } from '../utilities/log.utilities.js';

/**
 * Get local IPv4 addresses
 */
export default class LocalIp extends Command {
  log = debugInstance(`${NS}:local-ip`);
  logWarn = debugInstance(`${NS}:local-ip:warn`);
  logError = debugInstance(`${NS}:local-ip:error`);

  static description = 'Print out local machine ip on the connected network';

  static examples = [`$ nr local-ip`];

  static args = [{ name: 'args' }];

  static flags = {
    // config: flags.string({ description: '', default: '' }),
  };

  async run() {
    enableDebug();

    const { args, flags } = this.parse(LocalIp);

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

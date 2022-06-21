import { spawnSync } from 'child_process';
import fs from 'fs';
import path from 'path';

import { Command, flags } from '@oclif/command';
import chalk from 'chalk';
import prettier from 'prettier';

import { getShellForPlatform } from '@newrade/core-node-utils';

import { debugInstance, enableDebug, NS } from '../utilities/log.utilities.js';

type PackageJsonWorkspaces =
  | {
      workspaces?: {
        packages?: string[];
      };
    }
  | undefined;

/**
 * Command that execute `lerna version` but let the user include only the packages to version bump
 *
 * To include only packages prefixed with my-org-* in a release, run:
 *
 * ```bash
 * lerna-version --packages=my-org/*
 * ```
 *
 * which is equivalent to set the workspaces temporarily as:
 * ```json
 * "workspaces": {
 *   "packages": [
 *     "packages/my-org/*"
 *   ]
 * },
 * ```
 *
 * Once the command is finished or cancelled the `workspaces.packages` prop will be set back to its original value
 */
export default class LernaVersion extends Command {
  log = debugInstance(`${NS}:lerna`);
  logWarn = debugInstance(`${NS}:lerna:warn`);
  logError = debugInstance(`${NS}:lerna:error`);

  static description =
    'Wrapper for lerna version command, allowing to run version on specific packages';

  static examples = [`$ nr lerna-version`];

  static args = [{ name: 'args' }];

  static flags = {
    packages: flags.string({
      description: 'packages glob to be included in lerna version bump, e.g. --packages=packages/*',
      required: true,
    }),
  };

  async run() {
    enableDebug();
    const { args, flags } = this.parse(LernaVersion);

    this.log(`running in ${process.cwd()}`);

    try {
      /**
       *
       * Prettier
       *
       */

      const prettierOptions = await prettier.resolveConfig(
        path.join(process.cwd(), '.prettierrc'),
        { useCache: false, editorconfig: true }
      );
      function format(str: string): string {
        return prettier.format(str, {
          ...prettierOptions,
          parser: 'json-stringify',
        });
      }

      /**
       *
       * Command
       *
       */

      this.log(`reading package.json's workspaces config`);

      const packageJsonFilePath = path.resolve(process.cwd(), 'package.json');
      const packageJsonFile = fs.readFileSync(packageJsonFilePath, {
        encoding: 'utf8',
      });
      const packageJson = JSON.parse(packageJsonFile) as PackageJsonWorkspaces;

      if (!packageJson?.workspaces?.packages?.length) {
        this.logWarn(`missing packages in package.workspaces, aborting command`);
        return;
      }
      this.log(`replacing workspace.packages value with: ${chalk.greenBright(flags.packages)}`);

      const temporaryPackageJson = JSON.stringify(
        {
          ...packageJson,
          workspaces: { packages: [flags.packages] },
        } as PackageJsonWorkspaces,
        null,
        2
      );

      fs.writeFileSync(packageJsonFilePath, format(temporaryPackageJson));

      this.log(`updating index for package.json as --assume-unchanged`);

      assumeUnchanged('package.json');

      this.log(`executing lerna version`);

      const command = spawnSync(`yarn lerna version ${args.args || ''}`, {
        shell: getShellForPlatform(),
        stdio: 'inherit',
        env: process.env,
      });

      this.log(`restoring original package.json`);

      fs.writeFileSync(packageJsonFilePath, format(JSON.stringify(packageJson, null, 2)), {
        encoding: 'utf8',
      });

      this.log(`updating index for package.json as --no-assume-unchanged`);

      unAssumeUnchanged('package.json');
    } catch (error: any) {
      this.logError(`error occured, aborting: ${error}`);
      this.log(`updating index for package.json as --no-assume-unchanged`);
      unAssumeUnchanged('package.json');
    }

    function assumeUnchanged(filename: string) {
      spawnSync(`git update-index --assume-unchanged ${filename}`, {
        shell: getShellForPlatform(),
        stdio: 'inherit',
        env: process.env,
      });
    }

    function unAssumeUnchanged(filename: string) {
      spawnSync(`git update-index --no-assume-unchanged ${filename}`, {
        shell: getShellForPlatform(),
        stdio: 'inherit',
        env: process.env,
      });
    }
  }
}

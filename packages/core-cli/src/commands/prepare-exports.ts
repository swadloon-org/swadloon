import { Command } from '@oclif/command';
import { kebab } from 'case';
import * as chalk from 'chalk';
import debug from 'debug';
import * as fs from 'fs';
import * as path from 'path';
import { NS } from '../utilities/log.utilities';

// @ts-ignore
type PackageJsonPreconstruct = typeof import('../../../../package.json');
type PackageJsonPreconstructEntrypoint = {
  name: string; // 'my-package'
  files: string[]; // '/dist', '/config'
  preconstruct: {
    entrypoints: string[]; // ['index.ts', 'config/index.ts']
  };
};

/**
 * To be used with preconstruct
 * @see https://preconstruct.tools/
 */
export default class PrepareExports extends Command {
  log = debug(`${NS}:prepare-exports`);
  logWarn = debug(`${NS}:prepare-exports:warn`);
  logError = debug(`${NS}:prepare-exports:error`);

  static description = 'create export stubs for published packages';

  static examples = [`$ nr prepare-exports`];

  async init() {
    debug.enable('nr:core-cli:*');
  }

  async run() {
    this.log('reading preconstruct config in root package.json');
    const rootPackageJsonFile = fs.readFileSync(path.resolve('../../package.json'), {
      encoding: 'utf8',
    });
    const rootPackageJson = JSON.parse(rootPackageJsonFile) as PackageJsonPreconstruct;
    const rootPackageName = rootPackageJson.name;
    const packages = rootPackageJson.preconstruct?.packages as string[];
    if (!packages) {
      this.logError('preconstruct.packages must be set in package.json');
      return;
    }
    this.log(`opening root package with name: ${rootPackageName}`);
    this.log(`found ${packages.length} packages`);

    const packageJsonFile = fs.readFileSync(path.resolve(process.cwd(), 'package.json'), {
      encoding: 'utf8',
    });
    const packageJson = JSON.parse(packageJsonFile) as PackageJsonPreconstructEntrypoint;
    const packageName = packageJson.name.replace(/@.+\//gi, '');
    const packagePath = `packages/${packageName}`;
    const packageJsonEntryPoints = packageJson.preconstruct?.entrypoints
      ? packageJson.preconstruct.entrypoints
      : ['index.ts'];

    this.log(`found entrypoints: [${packageJsonEntryPoints}]`);

    packageJsonEntryPoints.forEach((entrypoint) => {
      const entrypointName = /\/index\.ts/.test(entrypoint)
        ? `${entrypoint.replace(/\/index\.ts/, '')}`
        : '';
      const entryPointId = entrypointName === '' ? 'dist' : entrypointName;
      const exportEntrypointName = `${kebab(rootPackageName)}-${packageName}${
        entrypointName ? '-' + entrypointName : ''
      }`;
      const entrypointPath = `${entryPointId === 'dist' ? '/dist' : '/' + entryPointId + '/dist'}`;
      const entryPointFullPath = entrypointPath;

      this.log(
        `creating export stubs for entrypoint: ${chalk.green(entryPointId)} in ${chalk.green(
          entrypointPath
        )}`
      );

      const cjsExportPath = path.join(
        process.cwd(),
        entryPointFullPath,
        `${exportEntrypointName}.cjs.js`
      );
      const cjsDeclarationExportPath = path.join(
        process.cwd(),
        entryPointFullPath,
        `${exportEntrypointName}.cjs.d.ts`
      );
      const esmExportPath = path.join(
        process.cwd(),
        entryPointFullPath,
        `${exportEntrypointName}.esm.js`
      );
      const pathToIndex = entryPointId === 'dist' ? 'index' : `${entryPointId}/index`;

      this.log(`creating cjs stubs: ${chalk.green(cjsExportPath)}`);
      if (fs.existsSync(cjsExportPath)) {
        fs.unlinkSync(cjsExportPath);
      }
      fs.writeFileSync(cjsExportPath, cjsTemplate({ pathToIndex }));

      this.log(`creating cjs declaration stubs: ${chalk.green(cjsDeclarationExportPath)}`);
      if (fs.existsSync(cjsDeclarationExportPath)) {
        fs.unlinkSync(cjsDeclarationExportPath);
      }
      fs.writeFileSync(cjsDeclarationExportPath, cjsDeclarationTemplate({ pathToIndex }));

      this.log(`creating esm index: ${chalk.green(esmExportPath)}`);
      if (fs.existsSync(esmExportPath)) {
        fs.unlinkSync(esmExportPath);
      }
      fs.writeFileSync(esmExportPath, esmTemplate({ pathToIndex }));
    });
  }
}

type PreconstructExport = {
  fileName: string;
  template: string;
};

// <root-package-name>-<package-name>.esm.ts
const esmTemplate = (props: { pathToIndex: string } = { pathToIndex: 'index' }) =>
  `export * from './${props.pathToIndex}';`;
// <root-package-name>-<package-name>.cjs.d.ts
const cjsTemplate = (props: { pathToIndex: string } = { pathToIndex: 'index' }) => `
/**
 * CommonJS stub to consume ESNext modules for NodeJS.
 *
 * It uses @babel/register and esm to compile modules on the
 * fly for the current version of NodeJS.
 */

 /**
  * enable the esm module loader https://github.com/standard-things/esm
  */
 require = require('esm')(module);

// @ts-nocheck
// @ts-ignore
Object.defineProperty(exports, '__esModule', { value: true });
const tslib_1 = require('tslib');
require('@babel/register')({
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
});
(0, tslib_1.__exportStar)(require('./${props.pathToIndex}'), exports);
`;
// <root-package-name>-<package-name>.cjs.d.ts
const cjsDeclarationTemplate = (props: { pathToIndex: string } = { pathToIndex: 'index' }) =>
  `export * from './${props.pathToIndex}';`;

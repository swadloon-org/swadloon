---
subject: Guides
title: TypeScript Packages Development
description: How to configure TypeScript packages to build libraries and apps.
tags:
  - nodejs
  - typescript
---

<DocHeader props={props}/>

## Overview

Building packages and apps with TypeScript in a monorepository has become one of
the most productive and popular pattern out there.

Colocating several packages in a single `git` repository has several advantages
over maintaining dozens of separated repositories. The best example and
explanation is probably the research paper
[Why Google Stores Billions of Lines of Code in a Single Repository](https://cacm.acm.org/magazines/2016/7/204032-why-google-stores-billions-of-lines-of-code-in-a-single-repository/fulltext)

TypeScript has several ways to leverage this pattern, we will explain how to
configure TypeScript-based libraries and apps and wire them together.

This repository uses the following tools:

- `tsc`: the TypeScript compiler -
  [docs](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- `yarn`: the Yarn (v1) package manager -
  [docs](https://classic.yarnpkg.com/en/)
- `lerna`: a tool for managing JavaScript projects with multiple packages -
  [docs](https://github.com/lerna/lerna)

## Directories and config files

Packages are located under the `/packages/` dir and have the following files and
directories:

- `package.json`: npm / node configuration file
- `tsconfig.json`: main configuration file for TypeScript compilation
- `tsconfig.commonjs.json`: **optional** configuration file when the package
  needs to be built for NodeJS (CommonJS format).
- `/src/`: source files
- `/types/`: location for types, typings or generated types
- `/scripts/`: directory for scripts files
- `/test/`: test files including end-to-end tests
- `/lib/`: output dir for libraries
- `/built/`: output dir for code that should be checked-in in `git`
- `/dist/`: output dir for single page apps
- `/public/`: output dir for static sites generator (e.g. Gatsby sites)

## `package.json` Configuration

Each package must have a standard `package.json` file with correct values for
the following fields:

- `name`: scoped name with the `<org-name>`
- `version`: semver version
- `description`: short description of what the package does
- `author`: contact info for the author
- `repository`: an
  [object](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#repository)
  that indicates where the package is located in the monorepo
- `main`: a module ID that is the primary entry point to your program.
- `module`: an ESM module ID that is the primary entry point to your program
- `files`: an array of files to include in your project
- `typings`: a path to TypeScript definition files (`.d.ts`)
- `scripts`: `npm` scripts to build and test the package, `clean`, `start`,
  `build` and `test` are the most common ones, please note that scripts related
  to `tsc` must be organized separately
- `dependencies`: required dependencies by the package, please note that all
  local packages that must be built before being used, must also be configured
  in the `references` field in `tsconfig.json`

Here is an example of a `package.json`:

```json
{
  "name": "@<org-name>/<package-name>",
  "version": "1.0.0",
  "description": "Loren ipsum",
  "author": {
    "email": "info@newrade.ca",
    "name": "Newrade",
    "url": "https://github.com/<org-name>/<repo-name>"
  },
  "repository": {
    "directory": "packages/<package-name",
    "type": "git",
    "url": "https://github.com/<org-name>/<repo-name>.git"
  },
  "license": "MIT",
  "main": "./lib/index.js",
  "module": "./lib/index.js",
  "files": ["./lib/**/*"],
  "scripts": {
    "build": "yarn tsc:build",
    "clean": "rm -rf lib/** && rm -f *.tsbuildinfo",
    "start": "yarn tsc:start",
    "tsc:build": "tsc --build",
    "tsc:start": "tsc --build --watch --preserveWatchOutput --verbose"
  },
  "typings": "./lib/index.d.ts",
  "dependencies": {
    "@<org-nam>/<package-name>": "^1"
  }
}
```

## `tsconfig.json` Configuration

The key point with packages in a monorepository is to leverage TypeScript's
project references feature
([docs](https://www.typescriptlang.org/docs/handbook/project-references.html)).

To makes `tsconfig.json` files more DRY, we have reusable base config files for
a number of use cases:

- `tsconfig.base.json`: has the base compiler options that all other
  `tsconfig.json` files can extend from.
- `tsconfig.browser-esm.json`: configuration for libraries that are consumed
  with `webpack` and standard loaders such as `ts-loader` and `babel-loader`.
- `tsconfig.browser-gatsby.json`: specific configuration for Gatsby sites that
  uses `ts-loader`.
- `tsconfig.node-esm.json`: for libraries that are consumed by NodeJS with a
  bundler like `ts-node` or `webpack`.
- `tsconfig.node-commonjs.json`: for libraries that must be consumed directly by
  NodeJS with no transformations
  ([ESM modules](https://nodejs.org/api/esm.html#esm_modules_ecmascript_modules)
  have been supported by NodeJS for some time now, but most of the ecosystem
  still uses CommonJS.)
- `tsconfig.json`: configuration that enables VS Code to navigate efficiently
  from one package to another in source files.
- `tsconfig.core.json`: special config file to be able to build core packages
  together after a `yarn/npm` install

**Note:** The `lib` property should be set according to what version of NodeJS
is used, see https://node.green/ to choose what to use.

### NodeJS Libraries

Here is an example for a NodeJS library that is built for CommonJS and ESM:

```json
// tsconfig.commonjs.json
{
  "extends": "../../tsconfig.node-commonjs.json",
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "lib/commonjs",
    "tsBuildInfoFile": "tsconfig.commonjs.tsbuildinfo",
    "rootDir": "src"
  },
  "include": ["src/**/*", "test/**/*"]
}
```

```json
// tsconfig.json
{
  "extends": "../../tsconfig.node-esm.json",
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "lib",
    "rootDir": "src"
  },
  "include": ["src/**/*", "test/**/*"]
}
```

### Browser Libraries

For a modern UI library:

```json
{
  "extends": "../../tsconfig.browser-esm.json",
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "lib",
    "rootDir": "src"
  },
  "include": ["src/**/*", "test/**/*"]
}
```

## `ts-node` Scripts

```json
{
  "build": "concurrently \"yarn tsc:build\" \"yarn copy:assets\"",
  "build:postinstall": "yarn build",
  "clean": "rm -rf lib/** && rm -f *.tsbuildinfo",
  "start": "yarn clean && concurrently \"yarn tsc:start\" \"yarn watch:assets\"",
  "test": "echo ok",
  "test:watch": "jest --watch",
  "tsc:build": "tsc --build",
  "tsc:start": "tsc --build --watch --preserveWatchOutput --verbose",
  "watch:assets": "onchange -i 'src/assets/**/*' -- yarn copy:assets"
}
```

```ts
// copy-assets.script.ts
import fs from 'fs-extra';

const copyFile = () => {
  fs.copySync(`./src/assets`, './lib/assets', {
    recursive: true,
    overwrite: true,
  });
  fs.copySync(
    `./src/icon-kits/newrade-icons`,
    './lib/icon-kits/newrade-icons',
    {
      recursive: true,
      overwrite: true,
    }
  );
};

copyFile();
```

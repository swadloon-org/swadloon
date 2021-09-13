# Newrade Core Open Source Monorepo

> A collection of libraries and utilities to build design systems, website and
> web apps.

---

![core-build](https://github.com/newrade/newrade-core/actions/workflows/core-workflow.yml/badge.svg)
![core-cli](https://github.com/newrade/newrade-core/actions/workflows/core-cli-workflow.yml/badge.svg)
![core-contentful-lib](https://github.com/newrade/newrade-core/actions/workflows/core-contentful-lib-workflow.yml/badge.svg)
![core-react-ui](https://github.com/newrade/newrade-core/actions/workflows/core-react-ui-workflow.yml/badge.svg)
![core-design-system](https://github.com/newrade/newrade-core/actions/workflows/core-design-system-workflow.yml/badge.svg)
![core-jest-config](https://github.com/newrade/newrade-core/actions/workflows/core-jest-config-workflow.yml/badge.svg)
![core-webpack-config](https://github.com/newrade/newrade-core/actions/workflows/core-webpack-config-workflow.yml/badge.svg)
![core-figma-extractor](https://github.com/newrade/newrade-core/actions/workflows/core-figma-extractor-workflow.yml/badge.svg)
![ze-design-website](https://github.com/newrade/newrade-core/actions/workflows/ze-design-website-workflow.yml/badge.svg)
![code-ql](https://github.com/newrade/newrade-core/actions/workflows/codeql-analysis.yml/badge.svg)

---

[![DeepScan grade](https://deepscan.io/api/teams/14287/projects/17743/branches/415210/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=14287&pid=17743&bid=415210)
[![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](https://commitizen.github.io/cz-cli/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Semver](http://img.shields.io/:semver-2.0.0-brightgreen.svg)](http://semver.org)
[![Lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![Tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
![Types](https://img.shields.io/npm/types/scrub-js.svg)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![license: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/newrade/newrade-core/blob/master/LICENSE.md)

---

## Overview

This repository contains several packages to build design systems, documentation
sites, websites and web apps.

The packages are all written in TypeScript and the repo works with lerna, yarn
and preconstruct.

This readme contains the essential instructions to get started; for the full
documentation, see the [core-docs](https://zedesignsystem.com/core-docs/)
website.

At a glance, this repository contains:

- A design system model, along with a default theme and UI components
- A reference design system implementation called
  [Ze Design System](https://zedesignsystem.com/design-system)
- A website built with the Ze Design System (https://zedesignsystem.com)
- CLI tools to automate various tasks like creating design tokens from Figma
- Configuration files for TypeScript / React / Node / Webpack / Jest and other
  essential tooling
- Github Actions workflows

You can also check a
[visualization of this repo](https://octo-repo-visualization.vercel.app/?repo=newrade%2Fnewrade-core).

## Docs

- Core docs home: https://zedesignsystem.com/core-docs/
- Ze Design System reference: https://zedesignsystem.com/design-system
- Ze Design System Website: https://zedesignsystem.com
- Techs used in this project: https://zedesignsystem.com/core-docs/tech/

Package-specific documentation:

- `packages/core-cli` — _oclif cli to automate tasks_ —
  [docs](https://zedesignsystem.com/core-docs/packages/core-cli/)
- `packages/core-figma-extractor` — _cli to extract design tokens from figma
  files_ —
  [docs](https://zedesignsystem.com/core-docs/packages/core-figma-extractor/)

## Get Started

There are three ways to use this project:

1. Install published versions of the packages you need
2. Contribute to this repo and its core packages to add functionnalities, tests
   and fix bugs
3. Create your own fork / mirror to add your own design system, websites and
   apps while leveraging the monorepo's packages and tools.

### Install NodeJS and Yarn

Install `nvm` to manage the NodeJS version on your machine:

- [nvm](https://github.com/nvm-sh/nvm) for Linux/MacOS
- [nvm-windows](https://github.com/coreybutler/nvm-windows) for Windows

You'll need to restart VSCode for the PATH to update.

> **Note for Windows users**: VSCode will need to be run with administration
> priviledges for build commands to run normally

Install NodeJS with:

```bash
# on linux / macos
nvm install v16
nvm use v16
nvm alias default v16

# on windows
# nvm-windows needs an exact version, see https://nodejs.org/en/ for exact released version
nvm install 16.9.1
nvm use 16.9.1

# test nvm command
nvm v
```

Install `yarn` v1.x.x with `npm`:

```bash
npm install --global yarn
```

If you can do:

```bash
node -v
yarn -v
```

Then `node` and `yarn` should be correctly installed.

### Steps to Install Published Packages

> As of 09/2021, packages are not yet published to npm, this will likely happen
> before this end of the year

```bash
# with npm
npm i --save @newrade/core-figma-extractor
# with yarn
yarn add @newrade/core-figma-extractor
```

### Steps to Create your Own Fork

See the complete guide on
[Creating your own fork](https://dev.zedesignsystem.com/core-docs/get-started/).

### Steps to Contribute to the Core Repo

Clone the repository:

```bash
git clone git@github.com:newrade/newrade-core.git
```

Open the project in vscode with the provided `.code-workspace` file:

```bash
code ./.vscode/newrade-core.code-workspace
```

Install dependencies with:

```bash
yarn
```

After dependencies are installed, each package will be set up so you can develop
locally.

Each package dependency is resolved by lerna and preconstruct and symlinks are
created, there is need to build packages manually while developping.

To start developing a package, use the `yarn dev` or `yarn start` command.

## Commands and Scripts Available

| Command         | Description                                                                                                                                                                   | Docs                                        |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `yarn`          | Execute `patch-package`,`preconstruct dev` in all core packages and then execute `yarn build:postinstall` for the packages that needs to do something after the core packages | [docs](https://classic.yarnpkg.com/en/docs) |
| `yarn clean`    | Execute `yarn clean` in all packages                                                                                                                                          |                                             |
| `yarn build`    | Build all `core-*` packages                                                                                                                                                   |                                             |
| `yarn test`     | Run test in all `core-*` packages                                                                                                                                             |                                             |
| `patch-package` | Execute `patch-package` on patches (see `./patches`)                                                                                                                          |                                             |
| `yarn release`  | Execute `lerna version`                                                                                                                                                       |                                             |

## Troubleshooting

To completely reset the repository, reinstall node_modules and recreate
symlinks, try:

```bash
yarn reset
```

## License

All `core-*` packages are [MIT licensed](/LICENSE), refer to each package's
package.json license information for more details.

---

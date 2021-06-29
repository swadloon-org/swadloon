# Newrade Core Open Source Monorepo

> A collection of libraries and utilities to build design systems, website and
> web apps.

---

![build](https://github.com/newrade/newrade-core/actions/workflows/core-workflow.yml/badge.svg)
![ze](https://github.com/newrade/newrade-core/actions/workflows/ze-design-website-workflow.yml/badge.svg)
![CodeQL](https://github.com/newrade/newrade-core/actions/workflows/codeql-analysis.yml/badge.svg)
[![DeepScan grade](https://deepscan.io/api/teams/14287/projects/17743/branches/415210/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=14287&pid=17743&bid=415210)

---

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](https://commitizen.github.io/cz-cli/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

---

## Overview

Documentation: https://zedesignsystem.com/docs

Design System: https://zedesignsystem.com/design-system

## Tech Stack

This monorepo uses:

- TypeScript
- React
- Jest
- Puppeteer
- NodeJS

Tools:

- Vercel
- Github
- CodeQL
- [Deepscan.io](deepscan.io)

## Quickstart

### Prerequisites

- linux or macos machine
- bash terminal
- [nvm](https://github.com/nvm-sh/nvm)
- [brew](https://brew.sh/)

### Get Started

Clone the repository:

```bash
git clone git@github.com:newrade/newrade-core.git
```

Open the project in vscode with the provided `.code-workspace` file:

```bash
code ./.vscode/newrade-core.code-workspace
```

Install `node`, `yarn` and dependencies:

```bash
# install correct version of node
nvm install v15
nvm alias default v15

# install yarn
npm install --global yarn

# install dependencies
yarn

# start building core packages
yarn start

# build core packages
yarn build

# test core packages
yarn test

# run prettier and eslint
yarn lint
```

### Commands Description

| Command         | Description                                                                                                                                                                            | Docs                                        |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `yarn`          | Execute `patch-package`, `yarn clean`, `yarn build` in all core packages and then execute `yarn build:postinstall` for the packages that needs to do something after the core packages | [docs](https://classic.yarnpkg.com/en/docs) |
| `yarn clean`    | Execute `yarn clean` in all packages (core and non core)                                                                                                                               |                                             |
| `yarn build`    | Build all `core-*` packages                                                                                                                                                            |                                             |
| `yarn test`     | Run test in all `core-*` packages                                                                                                                                                      |                                             |
| `patch-package` | Execute `patch-package` on patches (see `./patches`)                                                                                                                                   |                                             |

## Troubleshooting

To completely reset the repository and reinstall, try:

```bash
yarn reset
```

---

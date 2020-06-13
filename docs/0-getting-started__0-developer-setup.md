# Developer Setup

## Table of Contents

## Prerequisites

- WSL 2 for Windows users
- MacOS or Linux (Ubuntu LTS)

## Setup

### 1. Environment Files

Create a .env file with the following infos:

```env
NVM_NODE_VERSION=v14

MASTER_GIT_HOST=github.com
MASTER_REPO_ORG=newrade
MASTER_REPO_NAME=newrade

PROJECT_GIT_HOST=github.com
PROJECT_REPO_ORG=newrade
PROJECT_REPO_NAME=newrade
```

### 2. NVM

Install `nvm` (node version manager) by following the instructions here https://github.com/nvm-sh/nvm.

You may have to restart VS Code for changes to be applied to your path.

Make sure `nvm` is available in the terminal.

### 3. Brew

Install brew from the website: https://brew.sh/

> Note: For Windows user with WSL follow the instructions: [Installing WSL 2 On Windows 10](/link).

### 4. Yarn

To install `yarn`:

```bash
# install (first time)
brew install yarn

# to upgrade
brew upgrade yarn
```

### 5. NodeJS

Install the recommended NodeJS version with:

```bash
# install version of node specified in .env (NVM_NODE_VERSION)
yarn nvm
```

If you can do `node -v` you should be all set.

### 6. Install Depenencies

```bash
yarn
```

And that's it, you should be able to run other commands like `yarn build` and `yarn test`.

## Troubleshooting

### Permissions issues with /scripts

Set the permissions for the repo's scripts:

```bash
chmod 755 scripts/*
```

### NVM Warning Message About Unsupported Prefix

If you get a message similar to:

```bash
nvm is not compatible with the npm config "prefix" option: currently set to "/home/linuxbrew/.linuxbrew
```

Unset the `default` alias with:

```bash
nvm unalias default
```

---

## Editor Configuration

### .editorconfig

An `.editorconfig` is included so your IDE should pick up the rules.

### ESLint

A `.eslintrc.js` file is included.

Install the [VSCode plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

To run `eslint` in fix mode:

```bash
yarn lint:fix
```

### Prettier

[Prettier](https://prettier.io/) is used to format the codebase. It's recommended to install an IDE plugin so that `prettier` is applied on each save.

For VSCode, install the [prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and then enable `formatOnSave` in your config:

```json
{
  "editor.formatOnSave": true
}
```

### Recommended Extensions

Opening the folder with VSCode will prompt to install extensions listed in `.vscode/extensions.json`.

```json
{
  "recommendations": [
    "fabiospampinato.vscode-terminals",
    "fabiospampinato.vscode-open-in-node-modules",
    "jasonnutter.search-node-modules",
    "esbenp.prettier-vscode",
    "msjsdiag.debugger-for-chrome",
    "DigitalBrainstem.javascript-ejs-support",
    "mikestead.dotenv",
    "silvenon.mdx",
    "ms-vscode-remote.vscode-remote-extensionpack"
  ]
}
```

---

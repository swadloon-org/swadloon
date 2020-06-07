# Developer Setup

## Table of Contents

## Prerequisites

- dot env `.env` file with `NVM_NODE_VERSION` set

### NVM

Install `nvm` (node version manager) by following the instructions here https://github.com/nvm-sh/nvm.

You may have to restart VS Code for changes to be applied to your path.

Make sure `nvm` is available in the terminal.

Then set the permissions for the repo's scripts:

```bash
chmod 755 scripts/*
```

Install the recommended NodeJS version with :

```bash
# install version of node specified in .env (NVM_NODE_VERSION) and set it as default
npm run nvm
```

If you can do `node -v` you should be all set.

### Brew

Install brew from the website: https://brew.sh/

### Yarn

To install `yarn`:

```bash
# install (first time)
brew install yarn

# to upgrade
brew upgrade yarn
```

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

- [Terminals Manager](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-terminals)
- [Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Search node_modules](https://marketplace.visualstudio.com/items?itemName=jasonnutter.search-node-modules)
- [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
- [EJS language support](https://marketplace.visualstudio.com/items?itemName=DigitalBrainstem.javascript-ejs-support)
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)

---

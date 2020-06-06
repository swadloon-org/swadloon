# Developer Setup

## Table of Contents

## Prerequisites

Install `nvm` (node version manager), follow the instructions here https://github.com/nvm-sh/nvm

You may have to restart VSCode for changes to be applied to your path.

Make sure `nvm` is available in the terminal.

Install the recommended NodeJS version with :

```bash
# set permissions to scripts
chmod 755 scripts/*
npm run init
```

Install NodeJS version 12:

```bash
nvm install v12
```

To default to v12

```bash
nvm alias default v12
```

If you can do `node -v` you should be all set.

## Dependencies

Install dependencies:

```bash
npm install
```

## Editor Config & Linting

An `.editorconfig` is included so your IDE should pick up the rules.

A `.tslint` file is included.

To run `tslint` in fix mode:

```bash
npm run lint
```

[Prettier](https://prettier.io/) is used to format the codebase. It's recommended to install an IDE plugin so that `prettier` is applied on each save.

For VSCode, install the [prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and then enable `formatOnSave` in your config:

```json
{
  "editor.formatOnSave": true
}
```

To run prettier manually:

```bash
npm run prettier
```

---

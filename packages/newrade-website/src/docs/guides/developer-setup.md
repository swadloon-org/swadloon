# Developer Setup

## Table of Contents

## Required Tools and Sofwares

| Name   | Website                                             | Docs                                        | Doc Link             |
| :----- | :-------------------------------------------------- | :------------------------------------------ | -------------------- |
| `yarn` | [yarnpkg.com](https://classic.yarnpkg.com/lang/en/) | [docs](https://classic.yarnpkg.com/en/docs) | [[tools/yarn\|Yarn]] |

## Prerequisites

Install `nvm` (node version manager): https://github.com/nvm-sh/nvm

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

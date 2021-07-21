---
name: Developer Setup
description: How to setup your local environment to start developing.
tags:
  - tools
  - developer
  - onboarding
---

<DocHeader props={props}/>

## Required Tools and Software

## Prerequisites

Install `nvm` (node version manager): https://github.com/nvm-sh/nvm

Install the correct version of NodeJS:

```bash
# nvm will look into .nvmrc
nvm install
```

Set the default on your machine with:

```bash
nvm alias default <version>
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

[Prettier](https://prettier.io/) is used to format the codebase. It's
recommended to install an IDE plugin so that `prettier` is applied on each save.

For VSCode, install the
[prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
and then enable `formatOnSave` in your config:

```json
{
  "editor.formatOnSave": true
}
```

To run prettier manually:

```bash
npm run prettier
```

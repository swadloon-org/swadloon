---
subject: Guides
title: Developer Setup
description: How to setup your local environment to start developing.
tags:
  - tools
  - developer
  - onboarding
---

<DocHeader props={props}/>

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

## Cloning the repo

Clone the repo you are going to work in:

```bash
# upstream repo
git clone git@github.com:newrade/newrade-core.git
# or your repo
git clone git@github.com:<org-name>/<repository-name>.git <dir-name>
```

Open the workspace with the following command:

```bash
# upstream repo
code newrade-core/.vscode/newrade-core.code-workspace
# or your repo
code <repository-name>/.vscode/<org-name>.code-workspace
```

When opening the repo for the first time you will be prompted to install the
recommended extensions.

You can also use the command `CMD + Shift + p` and type in "show recommended",
if you collapse the OTHER RECOMMENDATIONS, you will see all our recommended
extensions.

## Dependencies

To install dependencies and build core packages, run:

```bash
yarn
```

## Editor Config

An `.editorconfig` is included so your IDE should pick up the rules.

## Formatting and Linting

When you open the repo using the `.code-workspace`, most settings are already
set for you.

[Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) are already
configured to run on each save.

To run `eslint` manually, run:

```bash
yarn lint
```

For VSCode, install the
[prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
and then enable `formatOnSave` in your config:

**Note:** this is already set up if you use the workspace.

```json
{
  "editor.formatOnSave": true
}
```

To run prettier manually:

```bash
yarn prettier
```

## Building Packages

Lerna is able to run `npm` scripts in multiple packages in parallel. You may
build only the packages you need by passing a ` --scope <scope>` to every
command.

To start watching every packages for changes:

```bash
# will build and watch all core packages
yarn start

# to run for core packages that matches core-docs-*
yarn start --scope @<org-name>/core-docs-*
```

To build for production:

```bash
# build all packages
yarn build

# to run for packages that matches core-docs-*
yarn lerna:build --scope @<org-name>/core-docs-*
```

To run tests in watch mode:

```bash
# run all tests in all core packages
yarn test

# to run for packages that matches @<org-name>/core-docs-*
yarn lerna:test --scope @<org-name>/core-docs-*
```

## Dot Config Files

### Git

We provide a sample `.gitconfig` in `packages/core-dev-config/.gitconfig`.

While the aliases are optional, we recommend the settings below to be set:

```conf
[user]
	name = <github-username>
	email = <github-email>

[fetch]
	prune = true

[pull]
  rebase = false #  (the default strategy)

[init]
	defaultBranch = main
```

To open your git config file on your local machine, run:

```bash
code ~/.gitconfig
```

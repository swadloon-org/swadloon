---
subject: Reference
title: Monorepo Manual - 📕
description:
  How to update a fork from the upstream repo and other useful commands.
---

<DocHeader props={props}/>

## Overview

In this section you will learn how to keep your fork updated with upstream
changes and other commands when interacting with forks.

## Prerequisites

- a forked repo with an remote called `upstream` pointing to the `newrade-core`
  repo

## Committing

Commits formatting is very important for automated changelogs and releases. We
follow the
[conventional-commits](https://www.conventionalcommits.org/en/v1.0.0/) format.

To commit in this repository you will need
[`commitizen`](https://commitizen.github.io/cz-cli/).

When you install dependencies with `yarn` a local version of `commitizen`, is
installed and can be run with:

```bash
yarn commit
```

You can also use `git cz` when `commitizen` is installed globally
(`npm i -g commitizen`). You may use either way.

When you run `commitizen`, you'll be prompted to fill in any required fields and
your commit message will be formatted according to the standards defined by
project maintainers:

```bash
$ yarn commit

cz-cli@4.0.3, cz-conventional-changelog@3.0.2

? Select the type of change that you're committing: (Use arrow keys)
❯ feat:     A new feature
  fix:      A bug fix
  docs:     Documentation only changes
  style:    Changes that do not affect the meaning of the code (white-space, formatting, ...
  refactor: A code change that neither fixes a bug nor adds a feature
  perf:     A code change that improves performance
  test:     Adding missing tests or correcting existing tests
(Move up and down to reveal more choices)
```

Once this is done, you can push normally:

```bash
git push
```

## Receiving Updates

You can be alerted about new releases by watching the `newrade-core` repository.

> **Tip:** is it now possible on Github to receive notifications for specific
> events when clicking on "Watch > Custom > check Releases only"

When new releases are available we also update the main
[CHANGELOG.md](https://github.com/newrade/newrade-core/blob/master/CHANGELOG.md)
file that contains general information about releases. Automated changelogs are
also generated for each packages (e.g.
[packages/core-react-ui/CHANGELOG.md](https://github.com/newrade/newrade-core/blob/master/packages/core-react-ui/CHANGELOG.md))

To pull updates from the `newrade-core` repo, first `fetch` changes from all
remotes:

```bash
git pull --all
```

then, create a branch on which you will test the new changes:

```bash
# can be master or dev depending on how your branches are set up
git checkout master
git checkout -b upgrade-core-july
```

pull the changes from the release branch:

```bash
git pull upstream release
```

Resolve any conflits that might occur and commit back the result.

```bash
# example when there are no more conflics
git add README.md

# complete the merge
git commit
```

Run `yarn` to make sure that your dependencies are up to date and to rebuild
core packages:

```bash
yarn
```

You'll want to make sure that the new changes don't break anything in your
applications. Thanks to TypeScript, it will be pretty obvious if you build a
package and errors happen.

At this point you'll want to commit and push the changes so that you can test,
build and deploy the upgraded packages.

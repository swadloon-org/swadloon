---
name: Monorepo Manual - 📕
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

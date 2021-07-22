---
subject: Guides
title: How to Create a Branch and Pull Request
description:
tags:
  - git
  - tooling
status: draft
---

<DocHeader props={props}/>

To work on a new feature fixed, first create a new branch from `dev` or `master`
branch

```bash
git checkout dev
```

Create a new branch:

```bash
git checkout -b myfeature
```

Work on a feature fix

Stage your changes with the VS Code UI or with `git add` command

Commit your changes:

```bash
yarn commit
```

To see the changes:

```bash
git status
```

Push the changes:

```bash
# for already existing branch
git push
# for new branch
git push --set-upstream origin myfeature
```

If there are changes you will need to `merge` or `rebase` them into your branch

If you not ready to commit your changes, you can stash them before pulling:

```bash
git add --all
git stash
```

To merge, pull the changes:

```bash
git pull
# to have the changes from dev branch
git pull origin dev
```

or

```bash
git fetch
git merge
# to have the changes from dev branch
git merge origin dev
```

If you had stashed changes, don't forget to reapply them:

```bash
git stash apply
```

Go on the repo under the pull request tab and open a PR from the new branch
targeting the `dev` or `master` branch

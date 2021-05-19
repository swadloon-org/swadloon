# How to Create a Branch and Pull Request

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

Push the changes:

```bash
git push
```

If there are changes you will need to `merge` or `rebase` them into your branch

To merge, pull the changes:

```bash
git pull
```

or

```bash
git fetch
git merge
```

Go on the repo under the pull request tab and open a PR from the new branch
targeting the `dev` or `master` branch

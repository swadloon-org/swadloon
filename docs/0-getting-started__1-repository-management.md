---
category: setup
tags:
  - git
  - git
---

# Repository Management

## Commit Style with [Commitizen](http://commitizen.github.io/cz-cli/)

To commit in this repository use `git cz` (with `commitizen` installed globally) or `npm run commit` when committing.

You'll be prompted to fill in any required fields and your commit messages will be formatted according to the standards defined by project maintainers:

```bash
$ yarn commit

cz-cli@4.0.3, cz-conventional-changelog@3.0.2

? Select the type of change that you\'re committing: (Use arrow keys)
❯ feat:     A new feature
  fix:      A bug fix
  docs:     Documentation only changes
  style:    Changes that do not affect the meaning of the code (white-space, formatting, ...
  refactor: A code change that neither fixes a bug nor adds a feature
  perf:     A code change that improves performance
  test:     Adding missing tests or correcting existing tests
(Move up and down to reveal more choices)
```

## Releases & Changelog

To publish new version:

```bash
# update changelogs interactively
yarn changelog

# push commit and tags
yarn push
```

To do the same as above and also create a Github release automatically:

```bash
# update changelogs, push commit and tags and create github release
yarn autorelease
```

## Auto Formatting

### Prettier and ESLint (JS, TS, CSS, HTML files)

TODO add setup for prettier and eslint in vscode

### Format Package (package.json)

https://www.npmjs.com/package/format-package

## Package Management

TODO document how to manage dependencies in the mono repo

TODO

https://yarnpkg.com/features/protocols#table

—--

# How to Commit

Commits formatting is very important for automated changelogs and releases. We follow the [conventional-commits](https://www.conventionalcommits.org/en/v1.0.0/) format.

To commit in this repository you will need [`commitizen`](https://commitizen.github.io/cz-cli/).

When you `npm install` a local version of `commitizen` can be run with:

```bash
npm run commit
```

You can also use `git cz` when `commitizen` is installed globally (`npm i -g commitizen`). You may use either way.

When you run `commitizen`, you'll be prompted to fill in any required fields and your commit message will be formatted according to the standards defined by project maintainers:

```bash
$ npm run commit

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

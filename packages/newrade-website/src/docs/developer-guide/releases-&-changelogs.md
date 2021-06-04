---
name: Releases & Changelogs
description:
tags:
---

# Releases & Changelogs

Since we use `commitizen` to format every commit (i.e. all commits are labeled
with `feat()` or `fix()` etc) it is possible to generate complete CHANGELOG
files for each package.

Lerna is used to perform this action.

Currently each package has its own version.

To generate the changelogs and tags for each package run:

```bash
npm run changelog
```

after reviewing the changes, you may push the tags and release commit with:

```bash
npm run release
```

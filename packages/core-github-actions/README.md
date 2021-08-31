> **Note:** this README is available online at
> [zedesignsystem.com/core-docs/packages/core-github-actions/](https://zedesignsystem.com/core-docs/packages/core-github-actions/)

---

## How to Use

### Development

Normally you will want to start the development build from the root directory to
build all required core packages at once — but in some cases you might want to
build just a specific package.

```bash
yarn start
```

### Build

> **Note:** Built lib files are outputted in `/built` where as `/lib` contains
> the tsc output files when compiling all core packages (during development).

To build the github actions files (with `webpack`) run:

```bash
yarn build:built
```

Output files in `/built/` should be commited since we don't compile the actions
code on the build.

### Test

```bash
yarn test
```

## References

- https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action
- https://github.com/actions/toolkit

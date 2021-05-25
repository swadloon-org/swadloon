# Github Actions

Custom github action writen in TypeScript to automate various tasks in the
monorepos.

Built lib files are outputted in `/built` where as `/lib` contains the tsc
output files when compiling all core packages (during normal development).

## How to Use

### Development

```bash
yarn start
```

### Build for Production

```bash
yarn build
```

## Test

```bash
yarn test
```

## References

- https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action
- https://github.com/actions/toolkit

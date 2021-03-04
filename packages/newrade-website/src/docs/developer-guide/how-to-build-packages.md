# How to Build Packages

Lerna is able to run `npm` scripts in multiple packages in parallel. You may build only the packages you need by passing a `-- --scope <scope>` to every command.

To start watching every packages for changes:

```bash
# will build and watch all packages
npm start

# to run for packages that matches core-docs-*, the first time you will need to run before 'npm run build'
npm start -- --scope @ai-ui/core-docs-*
```

To build for production:

```bash
# build all packages
npm run build

# to run for packages that matches core-docs-*
npm run build -- --scope @ai-ui/core-docs-*
```

To run tests in watch mode:

```bash
# run all tests in all packages
npm test

# to run for packages that matches core-docs-*
npm run test -- --scope @ai-ui/core-docs-*
```

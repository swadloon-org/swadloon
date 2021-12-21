# Figma Extractor

Utility library that connects to the Figma API and create tokens from styles in
a Figma file.

## How to use

Most of the time you will want to extract tokens with the help of a CLI to run
the extract function and pass arguments.

Check out the `figma-sync.ts` command in `core-cli` for a usage example.

```ts
await extract({
  figmaFile: env.FIGMA_FILE,
  figmaToken: env.FIGMA_TOKEN,
  outputDir: path.resolve(
    process.cwd(),
    args && args.path ? args.path : 'figma-export'
  ),
  inputColorThemeNamespace: false,
  outputVersion: flags.test ? false : true,
  outputDate: flags.test ? false : true,
});
```

There is bin available under `/bin/run.ts` that allows you to run the package
directly.

To try it out, set a `.env` file with API token and the Figma file id:

```env
#
# Figma
#
FIGMA_TOKEN=123lj12k3
FIGMA_FILE=ak12123123iioj
```

Then run the command:

```bash
yarn extract
```

For more options, check the `core-cli` command `nr figma-sync`.

## Architecture

By design, this package does not depends on external models. It produces tokens
according to its local models (see `src/models`).

## Development

To build:

```bash
yarn build
```

### Debugging

This package uses the debug `https://github.com/debug-js/debug` package.

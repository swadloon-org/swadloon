# Contentful Lib

> Package that contains scripts, content types and a number of preset values to
> create Contentful projects.

## How to Use

Start typechecking:

```bash
yarn start
```

Build lib:

```bash
yarn build
```

### Migration

Set up a `.env` file:

```
#
# Contentful
#
CONTENTFUL_PROJECT_NAME=<my-project>
CONTENTFUL_MIGRATION_FILE=<filename.ts>
CONTENTFUL_SPACEID=1234
CONTENTFUL_MANAGEMENT_TOKEN=1234
CONTENTFUL_ENV=master
```

Run the migration:

```bash
yarn run-migration
```

## Reference

- https://github.com/contentful/contentful-migration

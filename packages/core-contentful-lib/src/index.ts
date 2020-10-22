import { runMigration } from 'contentful-migration';

/**
 * @see https://github.com/contentful/contentful-migration
 */

const options = {
  filePath: '/Users/elliot/Documents/nrRepo/newrade/packages/core-contentful-lib/src/doggo.ts',
  spaceId: process.env.CONTENTFUL_ACCESS_SPACEID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

runMigration(options)
  .then(() => console.log('Migration Done!'))
  .catch((e) => console.error(e));

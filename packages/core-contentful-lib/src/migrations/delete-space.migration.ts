import * as Migration from 'contentful-migration';
import { COMMON_CONTENT_TYPE } from '../constants/content-types';

const program: Migration.MigrationFunction = function IndexModel(migration) {
  const ALL_CONTENT_TYPES = Object.values(COMMON_CONTENT_TYPE);

  ALL_CONTENT_TYPES.forEach((type) => {
    migration.deleteContentType(type);
  });
};

// @ts-ignore
export = program;

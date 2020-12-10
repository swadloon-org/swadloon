import * as Migration from 'contentful-migration';
import { createCommonContentTypes } from '../common/create-migration';

const program: Migration.MigrationFunction = function IndexModel(migration) {
  createCommonContentTypes(migration);

  /**
   * With Project
   */
  // createProject(migration);
  // createTag(migration);
};

// @ts-ignore
export = program;

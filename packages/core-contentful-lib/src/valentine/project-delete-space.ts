// @ts-nocheck
import * as Migration from 'contentful-migration';
import exportSpace from '../../contentful-export-space.json';

const program: Migration.MigrationFunction = function IndexModel(migration) {
  const allContentTypes = exportSpace.contentTypes.map((content) => content.sys.id);

  allContentTypes.forEach((type) => {
    migration.deleteContentType(type);
  });
};

// @ts-ignore
export = program;

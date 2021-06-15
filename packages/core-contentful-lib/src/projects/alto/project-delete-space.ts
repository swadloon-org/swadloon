import * as Migration from 'contentful-migration';
import path from 'path';
const exportSpace: any = require(path.join(__dirname, '../../../contentful-export-space.json'));

const program: Migration.MigrationFunction = function IndexModel(migration) {
  const allContentTypes = exportSpace.contentTypes.map((content: any) => content.sys.id);

  allContentTypes.forEach((type: any) => {
    migration.deleteContentType(type);
  });
};

// @ts-ignore
export = program;

import * as Migration from 'contentful-migration';
const exportSpace: any = require('../../../contentful-export-space.json');

const program: Migration.MigrationFunction = function IndexModel(migration) {
  const allContentTypes = exportSpace.contentTypes.map((content: any) => content.sys.id);

  allContentTypes.forEach((type: any) => {
    migration.deleteContentType(type);
  });
};

// @ts-ignore
export = program;

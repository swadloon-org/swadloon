import * as Migration from 'contentful-migration';

export const CompanyInfoExport: Migration.MigrationFunction = function (migration) {
  const companyInfo = migration.createContentType('CompanyInfo', {
    name: 'CompanyInfo',
  });
};

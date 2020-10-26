import * as Migration from 'contentful-migration';

export const CompanyAddressExport: Migration.MigrationFunction = function (migration) {
  const companyAddress = migration.createContentType('CompanyAddress', {
    name: 'CompanyAddress',
  });
};

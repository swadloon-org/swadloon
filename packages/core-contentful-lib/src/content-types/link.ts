import * as Migration from 'contentful-migration';
import { commonFields, labelFields, nameFields, urlFields } from '../common/types.models';

export const LinkExport: Migration.MigrationFunction = function (migration) {
  const link = migration.createContentType('Link', {
    name: 'Link',
  });

  const typeLink = link.createField('type', {
    ...commonFields,
    validations: [
      {
        in: ['EXTERNAL_URL', 'INTERNAL_PAGE'],
      },
    ],
  });

  const nameLink = link.createField('Name', { ...nameFields });

  const labelLink = link.createField('Label', { ...labelFields });

  const urlLink = link.createField('URL', { ...urlFields });
};

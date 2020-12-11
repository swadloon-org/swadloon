import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { COMMON_FIELD } from '../../common/common-fields';

export const createInfoTile: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType('infoTile', {
    name: 'InfoTile',
  });

  content.createField('illustration', { name: 'Illustration', type: 'Symbol' });

  content.createField('title', {
    name: COMMON_FIELD.TITLE,
    type: 'Symbol',
    localized: true,
  });

  content.createField('text', {
    name: pascal(COMMON_FIELD.TEXT),
    type: 'Text',
    localized: true,
  });
};

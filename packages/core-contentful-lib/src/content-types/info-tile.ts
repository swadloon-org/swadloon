import * as Migration from 'contentful-migration';
import { textFields, titleFields } from '../common/types.models';

export const InfoTileExport: Migration.MigrationFunction = function (migration) {
  const infoTile = migration.createContentType('InfoTile', {
    name: 'InfoTile',
  });
  const illustrationTile = infoTile.createField('Illustration', { name: 'Illustration', type: 'Symbol' });

  const titleTile = infoTile.createField('title', { ...titleFields });

  const textTile = infoTile.createField('Text', { ...textFields });
};

import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { ContentType } from '@newrade/core-website-api';
import { createBlock } from './block.contentful';
import { COMMON_FIELD } from './common-fields.contentful';

export function createGoogleMapsBlock(migration: Migration.default) {
  const content = createBlock(migration, ContentType.BLOCK_GOOGLE_MAPS, {
    name: ContentType.BLOCK_GOOGLE_MAPS,
    description: 'Configurable object for a GoogleMaps block.',
    displayField: COMMON_FIELD.NAME,
  });

  /**
   * For PlaceId
   */
  content.createField('placeId', {
    name: pascal('placeId'),
    type: 'Symbol',
  });

  /**
   * For latitude
   */
  content.createField('lat', {
    name: pascal('lat'),
    type: 'Symbol',
  });

  /**
   * For longitude
   */
  content.createField('long', {
    name: pascal('long'),
    type: 'Symbol',
  });

  /**
   * The map zoom level
   */
  content.createField('zoom', {
    name: pascal('zoom'),
    type: 'Symbol',
  });

  return content;
}

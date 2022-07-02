import { pascal } from 'case';
import * as Migration from 'contentful-migration';

import { CONTENT_TYPE } from '@newrade/core-website-api';

import { createBlock } from './block.contentful.js';
import { COMMON_FIELD } from './common-fields.contentful.js';

export function createGoogleMapsBlock(migration: Migration.default) {
  const content = createBlock(migration, CONTENT_TYPE.BLOCK_GOOGLE_MAPS, {
    name: CONTENT_TYPE.BLOCK_GOOGLE_MAPS,
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

import { pascal } from 'case';
import * as Migration from 'contentful-migration';

import { BlockType, CONTENT_TYPE } from '@newrade/core-website-api';

import { CONTENTFUL_WIDGET } from '../types/contentful-widget-ids.js';

import { createBlock } from './block.contentful.js';
import { COMMON_FIELD, mediaField } from './common-fields.contentful.js';

export function createImageBlock(migration: Migration.default) {
  const content = createBlock(migration, CONTENT_TYPE.BLOCK_IMAGE, {
    name: CONTENT_TYPE.BLOCK_IMAGE,
    description: 'Configurable object for an image block.',
    displayField: COMMON_FIELD.NAME,
  });

  /**
   * Type of the Block
   */
  content.editField(COMMON_FIELD.TYPE, {
    name: pascal(COMMON_FIELD.TYPE),

    type: 'Symbol',
    validations: [
      {
        in: [BlockType.image, BlockType.imageBackground],
      },
    ],
  });
  content.changeFieldControl(COMMON_FIELD.TYPE, 'builtin', CONTENTFUL_WIDGET.RADIO, {
    helpText: 'Select block type',
  });

  /**
   * For Media
   */
  content.createField(COMMON_FIELD.MEDIA, { ...mediaField });
  content.changeFieldControl(COMMON_FIELD.MEDIA, 'builtin', CONTENTFUL_WIDGET.ENTRY_CARD_EDITOR, {
    helpText: 'Select a media to set a single image or other media on the block.',
  });

  return content;
}

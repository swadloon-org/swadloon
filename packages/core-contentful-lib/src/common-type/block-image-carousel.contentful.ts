import { pascal } from 'case';
import * as Migration from 'contentful-migration';

import { CarouselDirection } from '@newrade/core-design-system';
import { BlockType, CONTENT_TYPE } from '@newrade/core-website-api';

import { CONTENTFUL_WIDGET } from '../types/contentful-widget-ids.js';
import { keys } from '../utilities.js';

import { createBlock } from './block.contentful.js';
import { COMMON_FIELD, mediaCollectionField } from './common-fields.contentful.js';

export function createImageCarouselBlock(migration: Migration.default) {
  const content = createBlock(migration, CONTENT_TYPE.BLOCK_IMAGE_CAROUSEL, {
    name: CONTENT_TYPE.BLOCK_IMAGE_CAROUSEL,
    description: 'Configurable object for an image carousel.',
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
        in: [BlockType.carousel],
      },
    ],
  });
  content.changeFieldControl(COMMON_FIELD.TYPE, 'builtin', CONTENTFUL_WIDGET.RADIO, {
    helpText: 'Select block type',
  });

  /**
   * Type of the Block
   */
  content.createField(COMMON_FIELD.CAROUSEL_DIRECTION, {
    name: pascal(COMMON_FIELD.CAROUSEL_DIRECTION),
    type: 'Symbol',
    validations: [
      {
        in: keys(CarouselDirection),
      },
    ],
  });
  content.changeFieldControl(COMMON_FIELD.CAROUSEL_DIRECTION, 'builtin', CONTENTFUL_WIDGET.RADIO, {
    helpText: 'Select carousel direction',
  });

  /**
   * MediaCollection the article main image
   */
  content.createField(COMMON_FIELD.MEDIAS, { ...mediaCollectionField });
  content.changeFieldControl(COMMON_FIELD.MEDIAS, 'builtin', CONTENTFUL_WIDGET.ENTRY_CARD_EDITOR, {
    helpText: 'Select a media collection to set images on the block.',
  });

  return content;
}

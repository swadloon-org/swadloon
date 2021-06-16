import { CarouselDirection } from '@newrade/core-design-system';
import { BlockType, ContentType } from '@newrade/core-website-api';
import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { CONTENTFUL_WIDGET } from '../../types/contentful-widget-ids';
import { keys } from '../utilities';
import { createBlock } from './block.contentful';
import { COMMON_FIELD, mediaCollectionField } from './common-fields.contentful';

export function createImageCarouselBlock(migration: Migration.default) {
  const content = createBlock(migration, ContentType.BLOCK_IMAGE_CAROUSEL, {
    name: ContentType.BLOCK_IMAGE_CAROUSEL,
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

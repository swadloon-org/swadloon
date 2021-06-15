import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { CONTENTFUL_WIDGET } from '../../types/contentful-widget-ids';
import { ContentType, BlockType } from '@newrade/core-website-api';
import { COMMON_FIELD, mediaField } from './common-fields.contentful';
import { Variant } from '@newrade/core-design-system';
import { keys } from '../utilities';

export function createBlock(migration: Migration.default) {
  const content = migration.createContentType(ContentType.BLOCK, {
    name: ContentType.BLOCK,
    description: 'Configurable object for blocks in a section.',
    displayField: COMMON_FIELD.NAME,
  });

  /**
   * For all name of block as name and description
   */
  content.createField(COMMON_FIELD.NAME, {
    name: pascal(COMMON_FIELD.NAME),
    type: 'Symbol',
    localized: false,
  });

  /**
   * Variant of the Block
   */
  content.createField(COMMON_FIELD.VARIANT, {
    name: pascal(COMMON_FIELD.VARIANT),

    type: 'Symbol',
    validations: [
      {
        in: keys(Variant),
      },
    ],
  });
  content.changeFieldControl(COMMON_FIELD.VARIANT, 'builtin', CONTENTFUL_WIDGET.RADIO, {
    helpText: 'Select block variant',
  });

  /**
   * Type of the Block
   */
  content.createField(COMMON_FIELD.TYPE, {
    name: pascal(COMMON_FIELD.TYPE),

    type: 'Symbol',
    validations: [
      {
        in: keys(BlockType),
      },
    ],
  });
  content.changeFieldControl(COMMON_FIELD.VARIANT, 'builtin', CONTENTFUL_WIDGET.RADIO, {
    helpText: 'Select block variant',
  });

  /**
   * For Text
   */
  content.createField(COMMON_FIELD.TEXT, {
    name: pascal(COMMON_FIELD.TEXT),
    type: 'Text',
    localized: true,
  });

  /**
   * For Link,
   */
  content.createField(COMMON_FIELD.LINK, {
    name: pascal(COMMON_FIELD.LINK),
    type: 'Link',
    linkType: 'Entry',
    validations: [{ linkContentType: [ContentType.LINK] }],
  });
  content.changeFieldControl(COMMON_FIELD.LINK, 'builtin', CONTENTFUL_WIDGET.ENTRY_LINK_EDITOR, {
    helpText: 'Select link in the block.',
  });

  /**
   * For MediaCollection
   */
  content.createField(COMMON_FIELD.MEDIAS, { ...mediaField });
  content.changeFieldControl(COMMON_FIELD.MEDIAS, 'builtin', CONTENTFUL_WIDGET.ENTRY_CARD_EDITOR, {
    helpText: 'Select a media collection to set images or other media on the block.',
  });

  return content;
}

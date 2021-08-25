import { Variant } from '@newrade/core-design-system';
import { BlockAlignment, BlockType, ContentType } from '@newrade/core-website-api';
import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { CONTENTFUL_WIDGET } from '../types/contentful-widget-ids';
import { keys } from '../utilities';
import { COMMON_FIELD } from './common-fields.contentful';

const baseBlockOptions: Migration.IContentTypeOptions = {
  name: ContentType.BLOCK,
  description: 'Configurable object for blocks in a section.',
  displayField: COMMON_FIELD.NAME,
};

export function createBlock(
  migration: Migration.default,
  contentTypeId: string = ContentType.BLOCK,
  contentTypeOptions: Migration.IContentTypeOptions = baseBlockOptions
) {
  const content = migration.createContentType(contentTypeId, contentTypeOptions);

  /**
   * Name of the block
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
  content.changeFieldControl(COMMON_FIELD.TYPE, 'builtin', CONTENTFUL_WIDGET.RADIO, {
    helpText: 'Select block type',
  });

  /**
   * Alignment for the block's content
   */
  content.createField(COMMON_FIELD.ALIGNMENT, {
    name: pascal(COMMON_FIELD.ALIGNMENT),
    type: 'Symbol',
    validations: [
      {
        in: keys(BlockAlignment),
      },
    ],
  });
  content.changeFieldControl(COMMON_FIELD.ALIGNMENT, 'builtin', CONTENTFUL_WIDGET.RADIO, {
    helpText: 'Select block content alignment',
  });

  /**
   * Text content for the block
   */
  content.createField(COMMON_FIELD.TEXT, {
    name: pascal(COMMON_FIELD.TEXT),
    type: 'Text',
    localized: true,
  });

  /**
   * A configurable Link
   */
  content.createField(COMMON_FIELD.LINK, {
    name: pascal(COMMON_FIELD.LINK),
    type: 'Link',
    linkType: 'Entry',
    validations: [{ linkContentType: [ContentType.LINK] }],
  });
  content.changeFieldControl(COMMON_FIELD.LINK, 'builtin', CONTENTFUL_WIDGET.ENTRY_LINK_EDITOR, {
    helpText: 'Select link for the the block.',
  });

  return content;
}

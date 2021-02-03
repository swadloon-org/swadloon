import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { CONTENTFUL_WIDGET } from '../../../../types/contentful-widget-ids';
import { keys } from '../../../utilities';
import { COMMON_CONTENT_TYPE } from '../../common-content-types';
import { COMMON_FIELD } from '../../common-fields';
import { COMMON_VARIANT, COMMON_VARIANT_LAYOUT } from '../../common-props-types';

export function createSectionV2(migration: Migration.default) {
  const content = migration.createContentType(COMMON_CONTENT_TYPE.SECTION_V2, {
    name: COMMON_CONTENT_TYPE.SECTION_V2,
    description: 'Configurable object for sections in a page.',
    displayField: COMMON_FIELD.NAME,
  });

  /**
   * For all name of section as name and description
   */
  content.createField(COMMON_FIELD.NAME, { name: pascal(COMMON_FIELD.NAME), type: 'Symbol', localized: true });

  content.createField(COMMON_FIELD.DESCRIPTION, {
    name: pascal(COMMON_FIELD.DESCRIPTION),
    type: 'Text',
    localized: true,
  });

  /**
   * For Type
   */
  content.createField(COMMON_FIELD.TYPE, {
    name: pascal(COMMON_FIELD.TYPE),
    type: 'Link',
    linkType: 'Entry',
    required: true,
    validations: [
      {
        linkContentType: [COMMON_CONTENT_TYPE.SECTION_TYPE],
      },
    ],
  });
  content.changeFieldControl(COMMON_FIELD.TYPE, 'builtin', CONTENTFUL_WIDGET.ENTRY_CARD_EDITOR, {
    helpText: 'Select section type',
  });

  /**
   * Variant Layout
   */
  content.createField(COMMON_FIELD.VARIANT_LAYOUT, {
    name: pascal(COMMON_FIELD.VARIANT_LAYOUT),

    type: 'Symbol',
    validations: [
      {
        in: keys(COMMON_VARIANT_LAYOUT),
      },
    ],
  });
  content.changeFieldControl(COMMON_FIELD.VARIANT_LAYOUT, 'builtin', CONTENTFUL_WIDGET.DROPDOWN, {
    helpText: 'Select section variant layout',
  });

  /**
   * Variant of the section
   */
  content.createField(COMMON_FIELD.VARIANT, {
    name: pascal(COMMON_FIELD.VARIANT),

    type: 'Symbol',
    validations: [
      {
        in: keys(COMMON_VARIANT),
      },
    ],
  });
  content.changeFieldControl(COMMON_FIELD.VARIANT, 'builtin', CONTENTFUL_WIDGET.DROPDOWN, {
    helpText: 'Select section variant',
  });

  /**
   * For Block into a section
   */
  content.createField(COMMON_FIELD.BLOCKS, {
    name: pascal(COMMON_FIELD.BLOCKS),
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: [COMMON_CONTENT_TYPE.BLOCK] }],
    },
  });

  /**
   * To present blog posts
   */
  content.createField(COMMON_FIELD.BLOG_POSTS, {
    name: pascal(COMMON_FIELD.BLOG_POSTS),
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: [COMMON_CONTENT_TYPE.BLOG] }],
    },
  });

  /**
   * To link portfolio entries
   */
  content.createField(COMMON_FIELD.PORTFOLIOS, {
    name: pascal(COMMON_FIELD.PORTFOLIOS),
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: [COMMON_CONTENT_TYPE.PORTFOLIO_PROJECT] }],
    },
  });

  return content;
}

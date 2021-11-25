import { pascal } from 'case';
import * as Migration from 'contentful-migration';

import { Variant } from '@newrade/core-design-system';
import { ContentType } from '@newrade/core-website-api';
import { SectionLayout } from '@newrade/core-website-api';

import { CONTENTFUL_WIDGET } from '../types/contentful-widget-ids';
import { keys } from '../utilities';

import { COMMON_FIELD } from './common-fields.contentful';

export function createSection(migration: Migration.default) {
  const content = migration.createContentType(ContentType.SECTION, {
    name: ContentType.SECTION,
    description: 'Configurable object for sections in a page.',
    displayField: COMMON_FIELD.NAME,
  });

  /**
   * For all name of section as name and description
   */
  content.createField(COMMON_FIELD.NAME, {
    name: pascal(COMMON_FIELD.NAME),
    type: 'Symbol',
    localized: true,
  });

  /**
   * Variant of the section
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
    helpText: 'Select section variant',
  });

  /**
   *  Layout
   */
  content.createField(COMMON_FIELD.LAYOUT, {
    name: pascal(COMMON_FIELD.LAYOUT),
    type: 'Symbol',
    validations: [
      {
        in: keys(SectionLayout),
      },
    ],
  });
  content.changeFieldControl(COMMON_FIELD.LAYOUT, 'builtin', CONTENTFUL_WIDGET.RADIO, {
    helpText: 'Select section variant layout',
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
      validations: [
        {
          linkContentType: [
            ContentType.BLOCK,
            ContentType.BLOCK_IMAGE,
            ContentType.BLOCK_IMAGE_CAROUSEL,
          ],
        },
      ],
    },
  });

  return content;
}

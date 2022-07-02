import { pascal } from 'case';
import * as Migration from 'contentful-migration';

import { Variant } from '@newrade/core-design-system';
import { CONTENT_TYPE } from '@newrade/core-website-api';
import { SectionLayout } from '@newrade/core-website-api';

import { CONTENTFUL_WIDGET } from '../types/contentful-widget-ids.js';
import { keys, values } from '../utilities.js';

import { createColorProps } from './color-props.contentful.js';
import { COMMON_FIELD } from './common-fields.contentful.js';

export function createSection(migration: Migration.default) {
  const content = migration.createContentType(CONTENT_TYPE.SECTION, {
    name: CONTENT_TYPE.SECTION,
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
        in: values(Variant),
      },
    ],
  });
  content.changeFieldControl(COMMON_FIELD.VARIANT, 'builtin', CONTENTFUL_WIDGET.RADIO, {
    helpText: 'Select section variant',
  });

  createColorProps(content);

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
            CONTENT_TYPE.BLOCK,
            CONTENT_TYPE.BLOCK_IMAGE,
            CONTENT_TYPE.BLOCK_IMAGE_CAROUSEL,
          ],
        },
      ],
    },
  });

  return content;
}

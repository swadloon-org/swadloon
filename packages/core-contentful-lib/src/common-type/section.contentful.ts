import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { CONTENTFUL_WIDGET } from '../../types/contentful-widget-ids';
import { CONTENT_TYPE } from '@newrade/core-gatsby-ui/src';
import { COMMON_FIELD } from './common-fields.contentful';
import { Variant } from '@newrade/core-design-system';
import { SectionLayout } from '@newrade/core-gatsby-ui/src';
import { keys } from '../utilities';

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

  content.createField(COMMON_FIELD.DESCRIPTION, {
    name: pascal(COMMON_FIELD.DESCRIPTION),
    type: 'Text',
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
        /**
         * TODO Change for GatsbyUI plus custom
         */

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
      /**
       * TODO change to custom block and basic block
       */

      validations: [{ linkContentType: [CONTENT_TYPE.BLOCK] }],
    },
  });

  return content;
}

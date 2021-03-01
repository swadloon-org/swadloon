import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { CONTENTFUL_WIDGET } from '../../types/contentful-widget-ids';
import { COMMON_FIELD } from '../common-type/common-fields';
import { COMMON_VARIANT } from '../common-type/common-props-types';
import { CUSTOM_CONTENT_TYPE } from '../common-type/custom-content-types';
import { CUSTOM_FIELD } from '../common-type/custom-fields';
import { keys } from '../utilities';

export function createBlock(migration: Migration.default) {
  const content = migration.createContentType(CUSTOM_CONTENT_TYPE.BLOCK_GOOGLE_MAP, {
    name: CUSTOM_CONTENT_TYPE.BLOCK_GOOGLE_MAP,
    description: 'Configurable object for custom blocks google map in a section.',
    displayField: COMMON_FIELD.NAME,
  });

  /**
   * For all name of block as name and description
   */
  content.createField(COMMON_FIELD.NAME, { name: pascal(COMMON_FIELD.NAME), type: 'Symbol', localized: true });

  content.createField(COMMON_FIELD.DESCRIPTION, {
    name: pascal(COMMON_FIELD.DESCRIPTION),
    type: 'Text',
    localized: true,
  });

  /**
   * Variant of the Block
   */
  content.createField(COMMON_FIELD.VARIANT, {
    name: pascal(COMMON_FIELD.VARIANT),

    type: 'Symbol',
    validations: [
      {
        /**
         * TODO CHANGE FOR GENERIC AND CUSTOM
         */
        in: keys(COMMON_VARIANT),
      },
    ],
  });
  content.changeFieldControl(COMMON_FIELD.VARIANT, 'builtin', CONTENTFUL_WIDGET.CHECKBOX, {
    helpText: 'Select block variant',
  });

  /**
   * Google map props
   */
  content.createField(CUSTOM_FIELD.PLACE_ID, { name: pascal(CUSTOM_FIELD.PLACE_ID), type: 'Symbol' });
  content.createField(CUSTOM_FIELD.LAT, { name: pascal(CUSTOM_FIELD.PLACE_ID), type: 'Symbol' });
  content.createField(CUSTOM_FIELD.LONG, { name: pascal(CUSTOM_FIELD.PLACE_ID), type: 'Symbol' });
  content.createField(CUSTOM_FIELD.ZOOM, { name: pascal(CUSTOM_FIELD.PLACE_ID), type: 'Symbol' });

  /**
   * For Text
   */
  content.createField(COMMON_FIELD.TEXT, { name: pascal(COMMON_FIELD.TEXT), type: 'Text', localized: true });

  return content;
}

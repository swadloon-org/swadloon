import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { CONTENTFUL_WIDGET } from '../../types/contentful-widget-ids';
import { COMMON_FIELD } from '../common-type/common-fields';
import { COMMON_VARIANT } from '../common-type/common-props-types';
import { CUSTOM_CONTENT_TYPE } from '../common-type/custom-content-types';
import { CUSTOM_FIELD } from '../common-type/custom-fields';
import { keys } from '../utilities';

export function createCustomBlockCostItem(migration: Migration.default) {
  const content = migration.createContentType(CUSTOM_CONTENT_TYPE.BLOCK_COST_ITEM, {
    name: CUSTOM_CONTENT_TYPE.BLOCK_COST_ITEM,
    description: 'Configurable object for custom blocks cost item in a section.',
    displayField: COMMON_FIELD.NAME,
  });

  /**
   * For all name of block as name and description
   */
  content.createField(COMMON_FIELD.TITLE, { name: pascal(COMMON_FIELD.TITLE), type: 'Symbol', localized: true });

  /**
   * Variant of the Block
   */
  content.createField(COMMON_FIELD.VARIANT, {
    name: pascal(COMMON_FIELD.VARIANT),

    type: 'Symbol',
    validations: [
      {
        /**
         * TODO CHANGE FOR CUSTOM
         */
        in: keys(COMMON_VARIANT),
      },
    ],
  });
  content.changeFieldControl(COMMON_FIELD.VARIANT, 'builtin', CONTENTFUL_WIDGET.CHECKBOX, {
    helpText: 'Select block variant',
  });

  /**
   * For Text
   */
  content.createField(COMMON_FIELD.TEXT, { name: pascal(COMMON_FIELD.TEXT), type: 'Text', localized: true });

  /**
   * Price text for the cost item
   */
  content.createField(CUSTOM_FIELD.PRICE_TEXT, {
    name: pascal(CUSTOM_FIELD.PRICE_TEXT),

    type: 'Symbol',
  });
  content.changeFieldControl(CUSTOM_FIELD.PRICE_TEXT, 'builtin', CONTENTFUL_WIDGET.SINGLE_LINE, {
    helpText: 'Write the current price for the current item',
  });

  return content;
}

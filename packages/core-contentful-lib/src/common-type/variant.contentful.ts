import { pascal } from 'case';
import * as Migration from 'contentful-migration';

import { Variant } from '@newrade/core-design-system';

import { CONTENTFUL_WIDGET } from '../types/contentful-widget-ids.js';
import { values } from '../utilities.js';

import { COMMON_FIELD } from './common-fields.contentful.js';

export const createVariantField = function (content: Migration.ContentType) {
  /**
   * Variant (importance)
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
    helpText: 'Select variant',
  });
};

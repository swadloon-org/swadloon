import { pascal } from 'case';
import * as Migration from 'contentful-migration';

import { COLOR_MODE, COLOR_SCHEME } from '@newrade/core-design-system';

import { CONTENTFUL_WIDGET } from '../types/contentful-widget-ids.js';
import { values } from '../utilities.js';

import { COMMON_FIELD } from './common-fields.contentful.js';

export const createColorProps = function (content: Migration.ContentType) {
  /**
   * Color mode
   */
  content.createField(COMMON_FIELD.COLOR_MODE, {
    name: pascal(COMMON_FIELD.COLOR_MODE),
    type: 'Symbol',
    validations: [
      {
        in: values(COLOR_MODE),
      },
    ],
  });
  content.changeFieldControl(COMMON_FIELD.COLOR_MODE, 'builtin', CONTENTFUL_WIDGET.RADIO, {
    helpText: 'Select color mode',
  });

  /**
   * Color scheme (forced)
   */
  content.createField(COMMON_FIELD.COLOR_SCHEME, {
    name: pascal(COMMON_FIELD.COLOR_SCHEME),
    type: 'Symbol',
    validations: [
      {
        in: values(COLOR_SCHEME),
      },
    ],
  });
  content.changeFieldControl(COMMON_FIELD.COLOR_SCHEME, 'builtin', CONTENTFUL_WIDGET.RADIO, {
    helpText: 'Select color scheme (forced)',
  });
};

import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { CONTENTFUL_WIDGET } from '../../../types/contentful-widget-ids';
import { enumValues } from '../../utilities';
import { COMMON_CONTENT_TYPE } from '../common-content-types';
import { COMMON_FIELD, TAG_LEVEL_1 } from '../common-fields';

export const createTag: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(COMMON_CONTENT_TYPE.TAG, {
    name: pascal(COMMON_CONTENT_TYPE.TAG),
  });

  content.createField(COMMON_FIELD.DESCRIPTION, {
    name: pascal(COMMON_FIELD.DESCRIPTION),
    type: 'Text',
    localized: true,
  });

  content.createField(COMMON_FIELD.TYPE, {
    name: pascal(COMMON_FIELD.TYPE),
    type: 'Array',
    required: true,
    validations: [{ size: { max: 1 } }],
    items: {
      type: 'Symbol',
      validations: [
        {
          in: enumValues(TAG_LEVEL_1),
        },
      ],
    },
  });
  content.changeFieldControl(COMMON_FIELD.TYPE, 'builtin', CONTENTFUL_WIDGET.DROPDOWN, {
    helpText: 'Select the tag type.',
  });
};

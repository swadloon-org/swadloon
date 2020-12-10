import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { VALENTINE_CONTENT_TYPE } from '../../valentine/constants/content-types';
import { VALENTINE_FIELD } from '../../valentine/constants/fields';

export const createTag: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(VALENTINE_CONTENT_TYPE.TAG, {
    name: VALENTINE_CONTENT_TYPE.TAG,
  });

  /**
   * For First Level
   */
  content.createField(VALENTINE_FIELD.FIRST_LEVEL, {
    name: pascal(VALENTINE_FIELD.FIRST_LEVEL),
    type: 'Array',
    validations: [{ size: { max: 5 } }],
    items: {
      type: 'Symbol',
      validations: [
        {
          in: ['test'],
        },
      ],
    },
  });
  /**
   * For Second Level
   */
  content.createField(VALENTINE_FIELD.SECOND_LEVEL, {
    name: pascal(VALENTINE_FIELD.SECOND_LEVEL),
    type: 'Array',
    validations: [{ size: { max: 5 } }],
    items: {
      type: 'Symbol',
      validations: [
        {
          in: ['test'],
        },
      ],
    },
  });
  /**
   * For Third Level
   */
  content.createField(VALENTINE_FIELD.THIRD_LEVEL, {
    name: pascal(VALENTINE_FIELD.THIRD_LEVEL),
    type: 'Array',
    validations: [{ size: { max: 5 } }],
    items: {
      type: 'Symbol',
      validations: [
        {
          in: ['test'],
        },
      ],
    },
  });
};
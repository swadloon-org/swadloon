import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { keys } from '../../utilities';
import { VALENTINE_CONTENT_TYPE } from '../../valentine/constants/content-types';
import { TagType, TAG_LEVEL_1, TAG_LEVEL_2, TAG_LEVEL_3 } from '../../valentine/constants/fields';

export const createTag: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(VALENTINE_CONTENT_TYPE.TAG, {
    name: VALENTINE_CONTENT_TYPE.TAG,
  });

  /**
   * For First Level
   */
  content.createField(TagType.FIRST_LEVEL, {
    name: pascal(TagType.FIRST_LEVEL),
    type: 'Array',
    validations: [{ size: { max: 5 } }],
    items: {
      type: 'Symbol',
      validations: [
        {
          in: keys(TAG_LEVEL_1),
        },
      ],
    },
  });
  /**
   * For Second Level
   */
  content.createField(TagType.SECOND_LEVEL, {
    name: pascal(TagType.SECOND_LEVEL),
    type: 'Array',
    validations: [{ size: { max: 5 } }],
    items: {
      type: 'Symbol',
      validations: [
        {
          in: keys(TAG_LEVEL_2),
        },
      ],
    },
  });
  /**
   * For Third Level
   */
  content.createField(TagType.THIRD_LEVEL, {
    name: pascal(TagType.THIRD_LEVEL),
    type: 'Array',
    validations: [{ size: { max: 5 } }],
    items: {
      type: 'Symbol',
      validations: [
        {
          in: keys(TAG_LEVEL_3),
        },
      ],
    },
  });
};

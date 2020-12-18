import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { COMMON_CONTENT_TYPE } from '../common/common-content-types';
import { COMMON_FIELD } from '../common/common-fields';

const program: Migration.MigrationFunction = function Program(migration) {
  const blogPost = migration.editContentType(COMMON_CONTENT_TYPE.PAGE);

  blogPost.createField(COMMON_FIELD.SLUG, {
    name: pascal(COMMON_FIELD.SLUG),
    type: 'Symbol',
    localized: true,
    required: true,
    validations: [
      {
        regexp: {
          pattern: `^(\/[a-z,0-9,-]+)*\/`,
          flags: `g`,
        },
      },
      {
        unique: true,
      },
    ],
  });

  migration.transformEntries({
    contentType: COMMON_CONTENT_TYPE.PAGE,
    from: ['route'],
    to: [COMMON_FIELD.SLUG],
    transformEntryForLocale: async (from, locale) => {
      return {
        [COMMON_FIELD.SLUG]: from.route[locale],
      };
    },
  });
};

// @ts-ignore
export = program;

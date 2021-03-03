import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { CONTENTFUL_WIDGET } from '../../types/contentful-widget-ids';
import { COMMON_VARIANT } from '../common-type/common-props-types';
import { keys } from '../utilities';

const program: Migration.MigrationFunction = function Program(migration) {
  const block = migration.editContentType('block');
  // set variant field to a default
  migration.transformEntries({
    contentType: 'block',
    from: ['variant'],
    to: ['variant'],
    transformEntryForLocale: async (from, locale) => {
      return {
        variant: null,
      };
    },
  });
};

// @ts-ignore
export = program;

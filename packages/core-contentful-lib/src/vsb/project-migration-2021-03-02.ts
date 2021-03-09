import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { CONTENTFUL_WIDGET } from '../../types/contentful-widget-ids';
import { COMMON_VARIANT } from '../common-type/common-props-types';
import { keys } from '../utilities';

const program: Migration.MigrationFunction = function Program(migration) {
  const block = migration.editContentType('block');
  // create new type field
  block.createField('type', {
    name: pascal('type'),
    type: 'Symbol',
    required: false,
    validations: [
      {
        in: ['text', 'image', 'carousel', 'googleMaps'],
      },
    ],
  });
  block.changeFieldControl('type', 'builtin', CONTENTFUL_WIDGET.RADIO);
  // move variant field to new fied
  migration.transformEntries({
    contentType: 'block',
    from: ['variant'],
    to: ['type'],
    transformEntryForLocale: async (from, locale) => {
      return {
        type: from.variant[locale],
      };
    },
  });
  // edit variant field
  block.editField('variant', {
    type: 'Symbol',
    required: false,
    validations: [
      {
        in: keys(COMMON_VARIANT),
      },
    ],
  });
};

// @ts-ignore
export = program;

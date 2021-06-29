import * as Migration from 'contentful-migration';

const program: Migration.MigrationFunction = function Program(migration) {
  // set variant field to a default
  migration.transformEntries({
    contentType: 'COST_ITEM',
    from: ['variant'],
    to: ['variant'],
    transformEntryForLocale: async (from, locale) => {
      return {
        type: 'customCostItem',
        variant: 'primary',
      };
    },
  });
};

// @ts-ignore
export = program;

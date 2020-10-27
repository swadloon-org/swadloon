import * as Migration from 'contentful-migration';
import { textFields, titleFields } from '../common/types.models';

export const ProcessStepExport: Migration.MigrationFunction = function (migration) {
  const processStep = migration.createContentType('ProcessStep', {
    name: 'ProcessStep',
  });

  const titleStep = processStep.createField('title', { ...titleFields });

  const descriptionStep = processStep.createField('description', {
    ...textFields,
  });
};

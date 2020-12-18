import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { COMMON_FIELD } from '../common/common-fields';
import { PROJECT_CONTENT_TYPE } from './project-props-types';

export function createCostItem(migration: Migration.default) {
  const costItems = migration.createContentType(PROJECT_CONTENT_TYPE.COST_ITEM, {
    name: pascal(PROJECT_CONTENT_TYPE.COST_ITEM),
  });
  costItems.createField(COMMON_FIELD.TITLE, { name: pascal(COMMON_FIELD.TITLE), type: 'Symbol', localized: true });
  costItems.createField(COMMON_FIELD.SUBTITLE, {
    name: pascal(COMMON_FIELD.SUBTITLE),
    type: 'Symbol',
    localized: true,
  });
  costItems.createField(COMMON_FIELD.TEXT, { name: pascal(COMMON_FIELD.TEXT), type: 'Text', localized: true });
}

export function createStep(migration: Migration.default) {
  const steps = migration.createContentType(PROJECT_CONTENT_TYPE.STEP, {
    name: pascal(PROJECT_CONTENT_TYPE.STEP),
  });
  steps.createField(COMMON_FIELD.TITLE, { name: pascal(COMMON_FIELD.TITLE), type: 'Symbol', localized: true });
  steps.createField(COMMON_FIELD.SUBTITLE, { name: pascal(COMMON_FIELD.SUBTITLE), type: 'Symbol', localized: true });
  steps.createField(COMMON_FIELD.TEXT, { name: pascal(COMMON_FIELD.TEXT), type: 'Text', localized: true });
}

import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { CONTENTFUL_WIDGET } from '../../types/contentful-widget-ids';
import { COMMON_CONTENT_TYPE } from '../common/common-content-types';
import { COMMON_FIELD, mediaField } from '../common/common-fields';
import { PROJECT_CONTENT_TYPE, PROJECT_FIELD } from './project-props-types';

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

export function createThematic(migration: Migration.default) {
  const thematic = migration.createContentType(PROJECT_CONTENT_TYPE.THEMATIC, {
    name: pascal(PROJECT_CONTENT_TYPE.THEMATIC),
  });
  thematic.createField(COMMON_FIELD.NAME, {
    name: pascal(COMMON_FIELD.NAME),
    type: 'Symbol',
    required: true,
    localized: true,
  });

  thematic.createField(PROJECT_FIELD.SUMMARY, { name: pascal(PROJECT_FIELD.SUMMARY), type: 'Symbol', localized: true });
  thematic.changeFieldControl(PROJECT_FIELD.SUMMARY, 'builtin', CONTENTFUL_WIDGET.MULTI_LINE, {});

  thematic.createField(COMMON_FIELD.DESCRIPTION, {
    name: pascal(COMMON_FIELD.DESCRIPTION),
    type: 'Text',
    localized: true,
  });

  thematic.createField(COMMON_FIELD.TAGS, {
    name: pascal(COMMON_FIELD.TAGS),
    type: 'Array',
    items: { type: 'Link', linkType: 'Entry', validations: [{ linkContentType: [COMMON_CONTENT_TYPE.TAG] }] },
  });
  thematic.changeFieldControl(COMMON_FIELD.TAGS, 'builtin', CONTENTFUL_WIDGET.ENTRY_LINK_EDITOR, {
    helpText: 'Creates a link to a tags.',
  });

  thematic.createField(COMMON_FIELD.MEDIAS, { ...mediaField });
  thematic.changeFieldControl(COMMON_FIELD.MEDIAS, 'builtin', CONTENTFUL_WIDGET.ENTRY_CARD_EDITOR, {
    helpText: 'Select a media collection to set images on the section.',
  });

  thematic.createField(PROJECT_FIELD.SERVICE, {
    name: pascal(PROJECT_FIELD.SERVICE),
    type: 'Array',
    items: { type: 'Link', linkType: 'Entry', validations: [{ linkContentType: [PROJECT_CONTENT_TYPE.SERVICE] }] },
  });
  thematic.changeFieldControl(PROJECT_FIELD.SERVICE, 'builtin', CONTENTFUL_WIDGET.ENTRY_LINK_EDITOR, {
    helpText: 'Creates a link to a tags.',
  });
}

export function createService(migration: Migration.default) {
  const service = migration.createContentType(PROJECT_CONTENT_TYPE.SERVICE, {
    name: pascal(PROJECT_CONTENT_TYPE.SERVICE),
  });
  service.createField(COMMON_FIELD.NAME, {
    name: pascal(COMMON_FIELD.NAME),
    type: 'Symbol',
    required: true,
    localized: true,
  });

  /**
   * For Type
   */
  service.createField(COMMON_FIELD.TYPE, {
    name: pascal(COMMON_FIELD.TYPE),
    type: 'Link',
    linkType: 'Entry',
    required: true,
    validations: [
      {
        linkContentType: [PROJECT_CONTENT_TYPE.SERVICE_CATEGORY],
      },
    ],
  });
  service.changeFieldControl(COMMON_FIELD.TYPE, 'builtin', CONTENTFUL_WIDGET.ENTRY_CARD_EDITOR, {
    helpText: 'Select section type',
  });

  service.createField(PROJECT_FIELD.SUMMARY, { name: pascal(PROJECT_FIELD.SUMMARY), type: 'Symbol', localized: true });
  service.changeFieldControl(PROJECT_FIELD.SUMMARY, 'builtin', CONTENTFUL_WIDGET.MULTI_LINE, {});

  service.createField(COMMON_FIELD.DESCRIPTION, {
    name: pascal(COMMON_FIELD.DESCRIPTION),
    type: 'Text',
    localized: true,
  });

  service.createField(COMMON_FIELD.TAGS, {
    name: pascal(COMMON_FIELD.TAGS),
    type: 'Array',
    items: { type: 'Link', linkType: 'Entry', validations: [{ linkContentType: [COMMON_CONTENT_TYPE.TAG] }] },
  });
  service.changeFieldControl(COMMON_FIELD.TAGS, 'builtin', CONTENTFUL_WIDGET.ENTRY_LINK_EDITOR, {
    helpText: 'Creates a link to a tags.',
  });

  service.createField(COMMON_FIELD.MEDIAS, { ...mediaField });
  service.changeFieldControl(COMMON_FIELD.MEDIAS, 'builtin', CONTENTFUL_WIDGET.ENTRY_CARD_EDITOR, {
    helpText: 'Select a media collection to set images on the section.',
  });

  service.createField(PROJECT_FIELD.TECHNOLOGY, {
    name: pascal(PROJECT_FIELD.TECHNOLOGY),
    type: 'Array',
    items: { type: 'Link', linkType: 'Entry', validations: [{ linkContentType: [PROJECT_CONTENT_TYPE.TECHNOLOGY] }] },
  });
  service.changeFieldControl(PROJECT_FIELD.TECHNOLOGY, 'builtin', CONTENTFUL_WIDGET.ENTRY_LINK_EDITOR, {
    helpText: 'Creates a link to a tags.',
  });
}

export const createServiceCategory = function (migration: Migration.default) {
  const serviceCategory = migration.createContentType(PROJECT_CONTENT_TYPE.SERVICE_CATEGORY, {
    name: PROJECT_CONTENT_TYPE.SERVICE_CATEGORY,
    displayField: COMMON_FIELD.NAME,
    description: 'Each section has a type to select the look and feel.',
  });

  /**
   * Service Category name
   */
  serviceCategory.createField(COMMON_FIELD.NAME, { name: pascal(COMMON_FIELD.NAME), type: 'Symbol' });

  serviceCategory.createField(COMMON_FIELD.TYPE, {
    name: pascal(COMMON_FIELD.TYPE),
    type: 'Symbol',
    required: true,
  });
  serviceCategory.changeFieldControl(COMMON_FIELD.TYPE, 'builtin', CONTENTFUL_WIDGET.DROPDOWN, {
    helpText: 'Select section type',
  });

  serviceCategory.createField(COMMON_FIELD.DESCRIPTION, {
    name: pascal(COMMON_FIELD.DESCRIPTION),
    type: 'Text',
    localized: true,
  });

  serviceCategory.createField('preview', {
    name: pascal('preview'),
    type: 'Link',
    linkType: 'Asset',
  });
  serviceCategory.changeFieldControl('preview', 'builtin', CONTENTFUL_WIDGET.ASSET_LINK_EDITOR, {
    helpText: `Preview of this section's type looks like`,
  });
};

export function createTechnology(migration: Migration.default) {
  const technology = migration.createContentType(PROJECT_CONTENT_TYPE.TECHNOLOGY, {
    name: pascal(PROJECT_CONTENT_TYPE.TECHNOLOGY),
  });
  technology.createField(COMMON_FIELD.NAME, {
    name: pascal(COMMON_FIELD.NAME),
    type: 'Symbol',
    required: true,
    localized: true,
  });

  technology.createField(PROJECT_FIELD.SUMMARY, {
    name: pascal(PROJECT_FIELD.SUMMARY),
    type: 'Symbol',
    localized: true,
  });
  technology.changeFieldControl(PROJECT_FIELD.SUMMARY, 'builtin', CONTENTFUL_WIDGET.MULTI_LINE, {});

  technology.createField(COMMON_FIELD.DESCRIPTION, {
    name: pascal(COMMON_FIELD.DESCRIPTION),
    type: 'Text',
    localized: true,
  });

  technology.createField(COMMON_FIELD.TAGS, {
    name: pascal(COMMON_FIELD.TAGS),
    type: 'Array',
    items: { type: 'Link', linkType: 'Entry', validations: [{ linkContentType: [COMMON_CONTENT_TYPE.TAG] }] },
  });
  technology.changeFieldControl(COMMON_FIELD.TAGS, 'builtin', CONTENTFUL_WIDGET.ENTRY_LINK_EDITOR, {
    helpText: 'Creates a link to a tags.',
  });

  technology.createField(COMMON_FIELD.MEDIAS, { ...mediaField });
  technology.changeFieldControl(COMMON_FIELD.MEDIAS, 'builtin', CONTENTFUL_WIDGET.ENTRY_CARD_EDITOR, {
    helpText: 'Select a media collection to set images on the section.',
  });
}

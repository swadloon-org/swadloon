import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { COMMON_CONTENT_TYPE } from '../constants/content-types';
import { CONTENTFUL_WIDGET } from '../constants/contentful-widget-ids';
import { COMMON_FIELD, nameField, urlField } from '../constants/fields';

export const createLink: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(COMMON_CONTENT_TYPE.LINK, {
    name: pascal(COMMON_CONTENT_TYPE.LINK),
  });

  content.createField(COMMON_FIELD.TYPE, {
    name: pascal(COMMON_FIELD.TYPE),
    type: 'Symbol',
    required: true,
    validations: [
      {
        in: ['EXTERNAL_URL', 'INTERNAL_PAGE'],
      },
    ],
  });

  content.createField(COMMON_FIELD.NAME, { ...nameField, required: true });

  content.createField(COMMON_FIELD.LABEL, {
    name: pascal(COMMON_FIELD.LABEL),
    type: 'Symbol',
    localized: true,
  });

  content.createField(COMMON_FIELD.URL, { ...urlField });
  content.changeFieldControl(COMMON_FIELD.URL, 'builtin', CONTENTFUL_WIDGET.SINGLE_LINE, {
    helpText: 'Enter the external URL (e.g. https://site.com/content)',
  });

  content.createField(COMMON_FIELD.PAGE, {
    name: pascal(COMMON_FIELD.PAGE),
    type: 'Link',
    linkType: 'Entry',
    validations: [{ linkContentType: [COMMON_CONTENT_TYPE.PAGE] }],
  });
  content.changeFieldControl(COMMON_FIELD.PAGE, 'builtin', CONTENTFUL_WIDGET.ENTRY_LINK_EDITOR, {
    helpText: 'Creates a link to an internal page.',
  });

  content.createField(COMMON_FIELD.SECTION, {
    name: pascal(COMMON_FIELD.SECTION),
    type: 'Link',
    linkType: 'Entry',
    validations: [{ linkContentType: [COMMON_CONTENT_TYPE.SECTION] }],
  });
  content.changeFieldControl(COMMON_FIELD.SECTION, 'builtin', CONTENTFUL_WIDGET.ENTRY_LINK_EDITOR, {
    helpText: 'Creates a link to a section of a page, make sure that the selected section is set on the page set above',
  });
};

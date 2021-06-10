import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { CONTENTFUL_WIDGET } from '../../types/contentful-widget-ids';
import { COMMON_CONTENT_TYPE } from '../common-type/common-content-types';
import { COMMON_FIELD, LINK_TYPE, urlField } from '../common-type/common-fields';
import { keys } from '../utilities';

export const createLink: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(COMMON_CONTENT_TYPE.LINK, {
    name: pascal(COMMON_CONTENT_TYPE.LINK),
    displayField: COMMON_FIELD.NAME,
  });

  content.createField(COMMON_FIELD.TYPE, {
    name: pascal(COMMON_FIELD.TYPE),
    type: 'Symbol',
    required: true,
    validations: [
      {
        in: keys(LINK_TYPE),
      },
    ],
  });

  content.createField(COMMON_FIELD.NAME, {
    name: pascal(COMMON_FIELD.NAME),
    type: 'Symbol',
    required: true,
  });

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
    helpText:
      'Creates a link to a section of a page, make sure that the selected section is set on the page set above',
  });
};

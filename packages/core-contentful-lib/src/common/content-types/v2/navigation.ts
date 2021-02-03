import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { CONTENTFUL_WIDGET } from '../../../../types/contentful-widget-ids';
import { COMMON_CONTENT_TYPE } from '../../common-content-types';
import { COMMON_FIELD } from '../../common-fields';

export function createNavigation(migration: Migration.default) {
  const content = migration.createContentType(COMMON_CONTENT_TYPE.NAVIGATION, {
    name: COMMON_CONTENT_TYPE.NAVIGATION,
    description: 'Configurable object for sections in a page.',
    displayField: COMMON_FIELD.NAME,
  });

  /**
   * For all name of navigation as name
   */
  content.createField(COMMON_FIELD.NAME, { name: pascal(COMMON_FIELD.NAME), type: 'Symbol', localized: true });

  /**
   * For Link,
   */
  content.createField(COMMON_FIELD.LINK, {
    name: pascal(COMMON_FIELD.LINK),
    type: 'Link',
    linkType: 'Entry',
    validations: [{ linkContentType: [COMMON_CONTENT_TYPE.LINK] }],
  });
  content.changeFieldControl(COMMON_FIELD.LINK, 'builtin', CONTENTFUL_WIDGET.ENTRY_LINK_EDITOR, {
    helpText: 'Select a link in the section.',
  });

  /**
   * For sub Navigation
   */
  content.createField(COMMON_FIELD.SUB_NAVIGATION, {
    name: pascal(COMMON_FIELD.SUB_NAVIGATION),
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: [COMMON_CONTENT_TYPE.NAVIGATION] }],
    },
  });
  return content;
}

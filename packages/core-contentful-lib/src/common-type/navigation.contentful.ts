import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { CONTENTFUL_WIDGET } from '../../types/contentful-widget-ids';
import { ContentType, NavComponent } from '@newrade/core-website-api';
import { COMMON_FIELD } from './common-fields.contentful';
import { keys } from '../utilities';

export function createNavigation(migration: Migration.default) {
  const content = migration.createContentType(ContentType.NAVIGATION, {
    name: ContentType.NAVIGATION,
    description: 'Configurable object for sections in a page.',
    displayField: COMMON_FIELD.NAME,
  });

  /**
   * For all name of navigation as name
   */
  content.createField(COMMON_FIELD.NAME, {
    name: pascal(COMMON_FIELD.NAME),
    type: 'Symbol',
    required: true,
    localized: true,
  });

  /**
   * Component to associate with the Navigation entry
   */
  content.createField(COMMON_FIELD.COMPONENT, {
    name: pascal(COMMON_FIELD.COMPONENT),
    type: 'Symbol',
    required: true,
    validations: [
      {
        in: keys(NavComponent),
      },
    ],
  });
  content.changeFieldControl(COMMON_FIELD.COMPONENT, 'builtin', CONTENTFUL_WIDGET.RADIO, {
    helpText: 'Select the component associated with the Navigation entry',
  });

  /**
   * For Link,
   */
  content.createField(COMMON_FIELD.LINKS, {
    name: pascal(COMMON_FIELD.LINKS),
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: [ContentType.LINK] }],
    },
  });
  content.changeFieldControl(COMMON_FIELD.LINK, 'builtin', CONTENTFUL_WIDGET.ENTRY_LINK_EDITOR, {
    helpText: 'Add one or more links.',
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
      validations: [{ linkContentType: [ContentType.NAVIGATION] }],
    },
  });
  content.changeFieldControl(
    COMMON_FIELD.SUB_NAVIGATION,
    'builtin',
    CONTENTFUL_WIDGET.ENTRY_LINK_EDITOR,
    {
      helpText: 'Select sub navigation entries.',
    }
  );

  return content;
}

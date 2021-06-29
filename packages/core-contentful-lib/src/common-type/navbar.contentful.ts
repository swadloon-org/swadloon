import { Variant } from '@newrade/core-design-system';
import { ContentType, NavbarLayout } from '@newrade/core-website-api';
import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { CONTENTFUL_WIDGET } from '../../types/contentful-widget-ids';
import { keys } from '../utilities';
import { COMMON_FIELD } from './common-fields.contentful';

export function createNavbar(migration: Migration.default) {
  const content = migration.createContentType(ContentType.NAVBAR, {
    name: ContentType.NAVBAR,
    description: 'Configuration for the navbar.',
    displayField: COMMON_FIELD.NAME,
  });

  /**
   * Navbar's name
   * @example "Main Website Navbar"
   */
  content.createField(COMMON_FIELD.NAME, {
    name: pascal(COMMON_FIELD.NAME),
    type: 'Symbol',
    localized: false,
    required: true,
  });

  /**
   * Navbar predefined layout
   */
  content.createField(COMMON_FIELD.LAYOUT, {
    name: pascal(COMMON_FIELD.LAYOUT),
    type: 'Symbol',
    validations: [
      {
        in: keys(NavbarLayout),
      },
    ],
  });
  content.changeFieldControl(COMMON_FIELD.LAYOUT, 'builtin', CONTENTFUL_WIDGET.RADIO, {
    helpText: 'Select navbar layout',
  });

  /**
   * Variant of the section
   */
  content.createField(COMMON_FIELD.VARIANT, {
    name: pascal(COMMON_FIELD.VARIANT),
    type: 'Symbol',
    validations: [
      {
        in: keys(Variant),
      },
    ],
  });
  content.changeFieldControl(COMMON_FIELD.VARIANT, 'builtin', CONTENTFUL_WIDGET.RADIO, {
    helpText: 'Select section variant',
  });

  /**
   * Navigation config object
   */
  content.createField(COMMON_FIELD.NAVIGATION, {
    name: pascal(COMMON_FIELD.NAVIGATION),
    type: 'Link',
    linkType: 'Entry',
    validations: [{ linkContentType: [ContentType.NAVIGATION] }],
  });
  content.changeFieldControl(
    COMMON_FIELD.NAVIGATION,
    'builtin',
    CONTENTFUL_WIDGET.ENTRY_LINK_EDITOR,
    {
      helpText: 'Navigation object for this navbar',
    }
  );

  return content;
}

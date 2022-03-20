import { pascal } from 'case';
import * as Migration from 'contentful-migration';

import { CONTENT_TYPE, NavbarLayout } from '@newrade/core-website-api';

import { CONTENTFUL_WIDGET } from '../types/contentful-widget-ids';
import { keys } from '../utilities';

import { createColorProps } from './color-props.contentful';
import { COMMON_FIELD } from './common-fields.contentful';
import { createVariantField } from './variant.contentful';

export function createNavbar(migration: Migration.default) {
  const content = migration.createContentType(CONTENT_TYPE.NAVBAR, {
    name: CONTENT_TYPE.NAVBAR,
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

  createVariantField(content);

  createColorProps(content);

  /**
   * Navigation config object
   */
  content.createField(COMMON_FIELD.NAVIGATION, {
    name: pascal(COMMON_FIELD.NAVIGATION),
    type: 'Link',
    linkType: 'Entry',
    validations: [{ linkContentType: [CONTENT_TYPE.NAVIGATION] }],
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

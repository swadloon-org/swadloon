import { pascal } from 'case';
import * as Migration from 'contentful-migration';

import { Variant } from '@newrade/core-design-system';
import { CONTENT_TYPE, FooterLayout } from '@newrade/core-website-api';

import { CONTENTFUL_WIDGET } from '../types/contentful-widget-ids.js';
import { keys, values } from '../utilities.js';

import { COMMON_FIELD } from './common-fields.contentful.js';

export function createFooter(migration: Migration.default) {
  const content = migration.createContentType(CONTENT_TYPE.FOOTER, {
    name: CONTENT_TYPE.FOOTER,
    description: 'Configuration for the footer.',
    displayField: COMMON_FIELD.NAME,
  });

  /**
   * Footer's name
   * @example "Main Website Footer" or "Documentation Site Footer"
   */
  content.createField(COMMON_FIELD.NAME, {
    name: pascal(COMMON_FIELD.NAME),
    type: 'Symbol',
    localized: false,
    required: true,
  });

  /**
   * Footer predefined layout
   */
  content.createField(COMMON_FIELD.LAYOUT, {
    name: pascal(COMMON_FIELD.LAYOUT),
    type: 'Symbol',
    validations: [
      {
        in: keys(FooterLayout),
      },
    ],
  });
  content.changeFieldControl(COMMON_FIELD.LAYOUT, 'builtin', CONTENTFUL_WIDGET.RADIO, {
    helpText: 'Select footer layout',
  });

  /**
   * Variant of the section
   */
  content.createField(COMMON_FIELD.VARIANT, {
    name: pascal(COMMON_FIELD.VARIANT),
    type: 'Symbol',
    validations: [
      {
        in: values(Variant),
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
    validations: [{ linkContentType: [CONTENT_TYPE.NAVIGATION] }],
  });
  content.changeFieldControl(
    COMMON_FIELD.NAVIGATION,
    'builtin',
    CONTENTFUL_WIDGET.ENTRY_LINK_EDITOR,
    {
      helpText: 'Navigation object for this footer',
    }
  );

  /**
   * Company info config object
   */
  content.createField(COMMON_FIELD.COMPANY_INFO, {
    name: pascal(COMMON_FIELD.COMPANY_INFO),
    type: 'Link',
    linkType: 'Entry',
    validations: [{ linkContentType: [CONTENT_TYPE.COMPANY_INFO] }],
  });
  content.changeFieldControl(
    COMMON_FIELD.COMPANY_INFO,
    'builtin',
    CONTENTFUL_WIDGET.ENTRY_LINK_EDITOR,
    {
      helpText: 'Select the CompanyInfo object for this Footer',
    }
  );

  /**
   * Blocks inside a Footer
   */
  content.createField(COMMON_FIELD.BLOCKS, {
    name: pascal(COMMON_FIELD.BLOCKS),
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: [CONTENT_TYPE.BLOCK] }],
    },
  });

  /**
   * For privacy notices
   */
  content.createField('privacyNoticeLinks', {
    name: pascal('privacyNoticeLinks'),
    type: 'Link',
    linkType: 'Entry',
    validations: [{ linkContentType: [CONTENT_TYPE.LINK] }],
  });
  content.changeFieldControl('privacyNoticeLinks', 'builtin', CONTENTFUL_WIDGET.ENTRY_LINK_EDITOR, {
    helpText: 'Select links to privacy notice pages',
  });

  /**
   * For terms of service or use
   */
  content.createField('termsOfServicesLink', {
    name: pascal('termsOfServicesLink'),
    type: 'Link',
    linkType: 'Entry',
    validations: [{ linkContentType: [CONTENT_TYPE.LINK] }],
  });
  content.changeFieldControl(
    'termsOfServicesLink',
    'builtin',
    CONTENTFUL_WIDGET.ENTRY_LINK_EDITOR,
    {
      helpText: 'Select links to privacy notice pages',
    }
  );

  return content;
}

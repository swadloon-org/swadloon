import { ContentType, FooterLayout } from '@newrade/core-website-api';
import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { CONTENTFUL_WIDGET } from '../../types/contentful-widget-ids';
import { keys } from '../utilities';
import { COMMON_FIELD } from './common-fields.contentful';

export function createFooter(migration: Migration.default) {
  const content = migration.createContentType(ContentType.FOOTER, {
    name: ContentType.FOOTER,
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
    validations: [{ linkContentType: [ContentType.COMPANY_INFO] }],
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
      validations: [{ linkContentType: [ContentType.BLOCK] }],
    },
  });

  /**
   * For privacy notices
   */
  content.createField('privacyNoticeLinks', {
    name: pascal('privacyNoticeLinks'),
    type: 'Link',
    linkType: 'Entry',
    validations: [{ linkContentType: [ContentType.LINK] }],
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
    validations: [{ linkContentType: [ContentType.LINK] }],
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

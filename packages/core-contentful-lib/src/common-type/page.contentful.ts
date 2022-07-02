import { pascal } from 'case';
import * as Migration from 'contentful-migration';

import { CONTENT_TYPE } from '@newrade/core-website-api';

import { CONTENTFUL_WIDGET } from '../types/contentful-widget-ids.js';

import { COMMON_FIELD } from './common-fields.contentful.js';

export function createPage(migration: Migration.default) {
  const content = migration.createContentType(CONTENT_TYPE.PAGE, {
    name: CONTENT_TYPE.PAGE,
    description: 'Model to hold informations for pages',
    displayField: COMMON_FIELD.NAME,
  });

  /**
   * Unique page name
   */
  content.createField(COMMON_FIELD.NAME, {
    name: pascal(COMMON_FIELD.NAME),
    type: 'Symbol',
    required: true,
    validations: [
      {
        unique: true,
      },
    ],
  });

  /**
   * Page title used to set the page title (SEO)
   */
  content.createField(COMMON_FIELD.TITLE, {
    name: pascal(COMMON_FIELD.TITLE),
    type: 'Symbol',
    localized: true,
  });

  /**
   * Page slug / route
   */
  content.createField(COMMON_FIELD.SLUG, {
    name: pascal(COMMON_FIELD.SLUG),
    type: 'Symbol',
    localized: true,
    validations: [
      {
        regexp: {
          pattern: `^(\/[a-z,0-9,-]+)*\/`,
          flags: `g`,
        },
      },
      {
        unique: true,
      },
    ],
  });
  content.changeFieldControl(COMMON_FIELD.SLUG, 'builtin', CONTENTFUL_WIDGET.SLUG_EDITOR, {
    helpText: 'The page route after the domain, e.g. /route/',
  });

  /**
   * Description of the page for SEO
   */
  content.createField(COMMON_FIELD.DESCRIPTION, {
    name: pascal(COMMON_FIELD.DESCRIPTION),
    type: 'Text',
    localized: true,
  });
  content.changeFieldControl(COMMON_FIELD.DESCRIPTION, 'builtin', CONTENTFUL_WIDGET.MULTI_LINE, {
    helpText: 'Enter the page description, it will be used for SEO purposes',
  });

  /**
   * Page sections'
   */
  content.createField(COMMON_FIELD.SECTIONS, {
    name: pascal(COMMON_FIELD.SECTIONS),
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: [CONTENT_TYPE.SECTION] }],
    },
  });
}

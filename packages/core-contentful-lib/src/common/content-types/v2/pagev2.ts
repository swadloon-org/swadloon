import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { CONTENTFUL_WIDGET } from '../../../../types/contentful-widget-ids';
import { COMMON_CONTENT_TYPE } from '../../common-content-types';
import { COMMON_FIELD } from '../../common-fields';

export function createPageV2(migration: Migration.default) {
  const content = migration.createContentType(COMMON_CONTENT_TYPE.PAGE, {
    name: COMMON_CONTENT_TYPE.PAGE,
    description: 'Model to hold informations for pages',
    displayField: COMMON_FIELD.NAME,
  });

  /**
   * Unique page name
   */
  content.createField(COMMON_FIELD.NAME, {
    name: pascal(COMMON_FIELD.NAME),
    type: 'Symbol',
    validations: [
      {
        unique: true,
      },
    ],
  });

  /**
   * Type of the page
   */
  content.createField(COMMON_FIELD.TYPE, {
    name: pascal(COMMON_FIELD.TYPE),
    type: 'Link',
    linkType: 'Entry',
    required: true,
    validations: [
      {
        linkContentType: [COMMON_CONTENT_TYPE.PAGE_TYPE],
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
  content.createField(COMMON_FIELD.SECTIONS_V2, {
    name: pascal(COMMON_FIELD.SECTION_V2),
    type: 'Array',
    items: { type: 'Link', linkType: 'Entry', validations: [{ linkContentType: [COMMON_CONTENT_TYPE.SECTION_V2] }] },
  });
}

import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { CONTENTFUL_WIDGET } from '../../types/contentful-widget-ids';
import { CONTENT_TYPE, LinkComponent, LinkType } from '@newrade/core-gatsby-ui/src';
import { COMMON_FIELD, urlField } from './common-fields.contentful';
import { keys } from '../utilities';
import { Icon, Variant } from '@newrade/core-design-system';

export const createLink: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(CONTENT_TYPE.LINK, {
    name: pascal(CONTENT_TYPE.LINK),
    displayField: COMMON_FIELD.NAME,
  });

  content.createField(COMMON_FIELD.NAME, {
    name: pascal(COMMON_FIELD.NAME),
    type: 'Symbol',
    required: true,
  });

  content.createField(COMMON_FIELD.TYPE, {
    name: pascal(COMMON_FIELD.TYPE),
    type: 'Symbol',
    required: true,
    validations: [
      {
        in: keys(LinkType),
      },
    ],
  });
  content.changeFieldControl(COMMON_FIELD.TYPE, 'builtin', CONTENTFUL_WIDGET.RADIO, {
    helpText: 'Select link type',
  });

  /**
   * Variant of the link
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
    helpText: 'Select link variant',
  });

  /**
   * Component for rendering the link
   */
  content.createField(COMMON_FIELD.COMPONENT, {
    name: pascal(COMMON_FIELD.COMPONENT),
    type: 'Symbol',
    required: true,
    validations: [
      {
        in: keys(LinkComponent),
      },
    ],
  });
  content.changeFieldControl(COMMON_FIELD.VARIANT, 'builtin', CONTENTFUL_WIDGET.RADIO, {
    helpText: 'Select the component to render the link',
  });

  content.createField(COMMON_FIELD.LABEL, {
    name: pascal(COMMON_FIELD.LABEL),
    type: 'Symbol',
    localized: true,
  });

  content.createField(COMMON_FIELD.Icon, {
    name: pascal(COMMON_FIELD.Icon),
    type: 'Link',
    linkType: 'Entry',
    validations: [
      {
        in: keys(Icon),
      },
    ],
  });
  content.changeFieldControl(COMMON_FIELD.SECTION, 'builtin', CONTENTFUL_WIDGET.DROPDOWN, {
    helpText: 'Select the icon',
  });

  content.createField(COMMON_FIELD.URL, { ...urlField });
  content.changeFieldControl(COMMON_FIELD.URL, 'builtin', CONTENTFUL_WIDGET.SINGLE_LINE, {
    helpText: 'Enter the external URL (e.g. https://site.com/content)',
  });

  content.createField(COMMON_FIELD.PAGE, {
    name: pascal(COMMON_FIELD.PAGE),
    type: 'Link',
    linkType: 'Entry',
    validations: [{ linkContentType: [CONTENT_TYPE.PAGE] }],
  });
  content.changeFieldControl(COMMON_FIELD.PAGE, 'builtin', CONTENTFUL_WIDGET.ENTRY_LINK_EDITOR, {
    helpText: 'Creates a link to an internal page.',
  });

  content.createField(COMMON_FIELD.SECTION, {
    name: pascal(COMMON_FIELD.SECTION),
    type: 'Link',
    linkType: 'Entry',
    validations: [{ linkContentType: [CONTENT_TYPE.SECTION] }],
  });
  content.changeFieldControl(COMMON_FIELD.SECTION, 'builtin', CONTENTFUL_WIDGET.ENTRY_LINK_EDITOR, {
    helpText:
      'Creates a link to a section of a page, make sure that the selected section is set on the page set above',
  });
};

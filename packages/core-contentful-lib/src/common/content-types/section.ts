import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import {
  COMMON_CONTENT_TYPE,
  COMMON_VARIANT,
  SPECIFIC_CONTENT_TYPE,
  SPECIFIC_SECTION_TYPE,
} from '../constants/content-types';
import { CONTENTFUL_WIDGET } from '../constants/contentful-widget-ids';
import { COMMON_FIELD, mediaField } from '../constants/fields';
import { SPECIFIC_FIELD } from '../constants/specific-fields';

export function createSection(migration: Migration.default, options: { type: SPECIFIC_SECTION_TYPE[] }) {
  const content = migration.createContentType(COMMON_CONTENT_TYPE.SECTION, {
    name: COMMON_CONTENT_TYPE.SECTION,
    description: 'Configurable object for sections in a page.',
  });

  /**
   * For all name of section as name and description
   */
  content.createField(COMMON_FIELD.NAME, { name: pascal(COMMON_FIELD.NAME), type: 'Symbol', localized: true });
  content.createField(COMMON_FIELD.DESCRIPTION, {
    name: pascal(COMMON_FIELD.DESCRIPTION),
    type: 'Text',
    localized: true,
  });

  /**
   * For Type
   */
  content.createField(COMMON_FIELD.TYPE, {
    name: pascal(COMMON_FIELD.TYPE),
    type: 'Link',
    linkType: 'Entry',
    required: true,
    validations: [
      {
        linkContentType: [COMMON_CONTENT_TYPE.SECTION_TYPE],
      },
    ],
  });

  /**
   * For Variant
   */

  const allValidationVariant = Object.keys(COMMON_VARIANT).map((element: string) => {
    return element;
  });

  content.createField(COMMON_FIELD.VARIANT, {
    name: pascal(COMMON_FIELD.VARIANT),
    type: 'Array',
    validations: [{ size: { max: 1 } }],
    items: {
      type: 'Symbol',
      validations: [
        {
          in: allValidationVariant,
        },
      ],
    },
  });
  content.changeFieldControl(COMMON_FIELD.VARIANT, 'builtin', CONTENTFUL_WIDGET.LIST, {
    helpText: 'Provide Text',
  });

  /**
   * For Title and TitleHighlight
   */
  content.createField(COMMON_FIELD.TITLE, { name: pascal(COMMON_FIELD.TITLE), type: 'Symbol', localized: true });
  content.createField('titleHighlight', {
    name: 'TitleHighlight',
    type: 'Symbol',
    localized: true,
  });

  /**
   * For SUBTITLE
   */
  content.createField(COMMON_FIELD.SUBTITLE, {
    name: pascal(COMMON_FIELD.SUBTITLE),
    type: 'Symbol',
    localized: true,
  });

  /**
   * For Text
   */
  content.createField(COMMON_FIELD.TEXT, { name: pascal(COMMON_FIELD.TEXT), type: 'Text', localized: true });

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
    helpText: 'Select a media collection to set images on the section.',
  });

  /**
   * For MediaCollection
   */
  content.createField(COMMON_FIELD.MEDIAS, { ...mediaField });
  content.changeFieldControl(COMMON_FIELD.MEDIAS, 'builtin', CONTENTFUL_WIDGET.ENTRY_CARD_EDITOR, {
    helpText: 'Select a media collection to set images on the section.',
  });

  /**
   * For Tiles & steps
   */
  content.createField(COMMON_FIELD.TILES, {
    name: pascal(COMMON_FIELD.TILES),
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: [COMMON_CONTENT_TYPE.TILE] }],
    },
  });

  /**
   * For section into a section
   */
  content.createField(COMMON_FIELD.SUB_SECTIONS, {
    name: pascal(COMMON_FIELD.SUB_SECTIONS),
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: [COMMON_CONTENT_TYPE.SECTION] }],
    },
  });

  /**
   * For Project_Preview || Blog_Preview || Nothing at all
   */
  options.type.forEach((type_section) => {
    switch (type_section) {
      case SPECIFIC_SECTION_TYPE.BLOG: {
        content.createField(SPECIFIC_FIELD.BLOG_POSTS, {
          name: pascal(SPECIFIC_FIELD.BLOG_POSTS),
          type: 'Array',
          items: {
            type: 'Link',
            linkType: 'Entry',
            validations: [{ linkContentType: [SPECIFIC_CONTENT_TYPE.BLOG] }],
          },
        });
        break;
      }
      case SPECIFIC_SECTION_TYPE.PROJECT: {
        content.createField(SPECIFIC_FIELD.PROJECTS, {
          name: pascal(SPECIFIC_FIELD.PROJECTS),
          type: 'Array',
          items: {
            type: 'Link',
            linkType: 'Entry',
            validations: [{ linkContentType: [SPECIFIC_CONTENT_TYPE.PROJECT] }],
          },
        });
        const projectEnable: boolean = true;
        break;
      }
      case SPECIFIC_SECTION_TYPE.NONE: {
        break;
      }
    }
  });
}

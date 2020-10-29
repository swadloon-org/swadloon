import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { COMMON_CONTENT_TYPE } from '../constants/content-types';
import { CONTENTFUL_WIDGET } from '../constants/contentful-widget-ids';
import { COMMON_FIELD, mediaField } from '../constants/fields';

export enum SECTION_TYPE {
  TYPE_1_GROUP,
  TYPE_1_NORMAL,
  TYPE_1_REVERSED,
  TYPE_2,
  TYPE_3_GROUP,
  TYPE_3,
  TYPE_4,
  TYPE_5,
  TYPE_6_GROUP,
  TYPE_6,
  TYPE_7,
  VIDEO,
  BLOG_PREVIEW,
  JOB_EMPLOYER,
  JOB_CANDIDATES,
  PROCESS_PRIMARY,
  PROCESS_SECONDARY,
  TESTIMONIAL,
}

export enum SECTION_IMAGE_POSITION {
  LEFT,
  RIGHT,
}

export const createSectionType: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(COMMON_CONTENT_TYPE.SECTION_TYPE, {
    name: COMMON_CONTENT_TYPE.SECTION_TYPE,
    displayField: COMMON_FIELD.NAME,
    description: 'Each section has a type to select the look and feel.',
  });

  content.createField(COMMON_FIELD.NAME, { name: pascal(COMMON_FIELD.NAME), type: 'Symbol' });

  content.createField(COMMON_FIELD.DESCRIPTION, {
    name: pascal(COMMON_FIELD.DESCRIPTION),
    type: 'Text',
    localized: true,
  });

  content.createField('preview', {
    name: pascal('preview'),
    type: 'Link',
    linkType: 'Asset',
  });
  content.changeFieldControl('preview', 'builtin', CONTENTFUL_WIDGET.ASSET_LINK_EDITOR, {
    helpText: `Preview of this section's type looks like`,
  });
};

export const createSection: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(COMMON_CONTENT_TYPE.SECTION, {
    name: COMMON_CONTENT_TYPE.SECTION,
    description: 'Configurable object for sections in a page.',
  });
  /**
   * For all types
   */
  content.createField(COMMON_FIELD.NAME, { name: pascal(COMMON_FIELD.NAME), type: 'Symbol', localized: true });
  content.createField(COMMON_FIELD.DESCRIPTION, {
    name: pascal(COMMON_FIELD.DESCRIPTION),
    type: 'Text',
    localized: true,
  });
  /**
   * For all types
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
   * For TYPE_1, TYPE_2, TYPE_3, TYPE_4, TYPE_5, TYPE_6, VIDEO,
   * BLOG_PREVIEW, JOB_EMPLOYER, JOB_CANDIDATES, PROCESS_PRIMARY, PROCESS_SECONDARY
   */
  content.createField(COMMON_FIELD.TITLE, { name: pascal(COMMON_FIELD.TITLE), type: 'Symbol', localized: true });
  content.createField('titleHighlight', {
    name: 'TitleHighlight',
    type: 'Symbol',
    localized: true,
  });
  /**
   * For TYPE_1, TYPE_2, TYPE_3, TYPE_4, TYPE_5,
   * BLOG_PREVIEW
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
   * For TYPE_1, TYPE_2, TYPE_3, TYPE_4, TYPE_5, TYPE_6, VIDEO,
   * BLOG_PREVIEW, JOB_EMPLOYER, JOB_CANDIDATES, PROCESS_PRIMARY, PROCESS_SECONDARY
   */
  content.createField(COMMON_FIELD.TEXT, { name: pascal(COMMON_FIELD.TEXT), type: 'Text', localized: true });
  /**
   * For TYPE_6
   */
  content.createField('illustration', { name: 'Illustration', type: 'Link', linkType: 'Asset' });
  /**
   * For TYPE_3
   */
  content.createField('titleTab', { name: 'TitleTab', type: 'Symbol', localized: true });
  /**
   * TYPE_2, TYPE_3, TYPE_5
   */
  content.createField(COMMON_FIELD.MEDIAS, { ...mediaField });
  content.changeFieldControl(COMMON_FIELD.MEDIAS, 'builtin', CONTENTFUL_WIDGET.ENTRY_CARD_EDITOR, {
    helpText: 'Select a media collection to set images on the section.',
  });
  /**
   * TYPE_2, TYPE_3, TYPE_5
   */
  content.createField('imagePosition', {
    name: 'ImagePosition',
    type: 'Symbol',
    validations: [
      {
        in: [SECTION_IMAGE_POSITION.LEFT, SECTION_IMAGE_POSITION.RIGHT],
      },
    ],
  });
  /**
   * For TYPE_4, TYPE_7
   */
  content.createField('infoTiles', {
    name: 'InfoTile',
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['infoTile'] }],
    },
  });
  /**
   * For TYPE_5
   */
  content.createField('infoChecks', {
    name: 'InfoChecks',
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['infoCheck'] }],
    },
  });
  /**
   * For JOB_EMPLOYER, JOB_CANDIDATES
   */
  content.createField('jobGroup', {
    name: 'JobGroup',
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['jobGroup'] }],
    },
  });
  /**
   * For PROCESS_PRIMARY, PROCESS_SECONDARY
   */
  content.createField('processStep', {
    name: 'ProcessStep',
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['processStep'] }],
    },
  });
  /**
   * For BLOG_PREVIEW
   */
  content.createField(COMMON_FIELD.BLOG_POSTS, {
    name: pascal(COMMON_FIELD.BLOG_POSTS),
    type: 'Array',
    items: { type: 'Link', linkType: 'Entry', validations: [{ linkContentType: [COMMON_CONTENT_TYPE.BLOG] }] },
  });
  content.changeFieldControl(COMMON_FIELD.BLOG_POSTS, 'builtin', CONTENTFUL_WIDGET.ENTRY_CARD_EDITOR, {
    helpText: 'Select a media collection to set images on the section.',
  });
  /**
   * For TYPE_1_GROUP, TYPE_3_GROUP, TYPE_6_GROUP
   */
  content.createField('subSections', {
    name: 'SubSections',
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: [COMMON_CONTENT_TYPE.SECTION] }],
    },
  });
};

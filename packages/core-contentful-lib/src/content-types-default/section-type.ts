import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { COMMON_CONTENT_TYPE } from '../constants/content-types';
import { CONTENTFUL_WIDGET } from '../constants/contentful-widget-ids';
import { COMMON_FIELD } from '../constants/fields';

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

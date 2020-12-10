import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { COMMON_CONTENT_TYPE } from '../constants/content-types';
import { CONTENTFUL_WIDGET } from '../constants/contentful-widget-ids';
import { COMMON_FIELD } from '../constants/fields';

export enum SECTION_TYPE {
  TYPE_1_GROUP = 'type_1Group',
  TYPE_1_NORMAL = 'type_1Normal',
  TYPE_1_REVERSED = 'type_1Reversed',
  TYPE_2 = 'type_2',
  TYPE_3_GROUP = 'type_3Group',
  TYPE_3 = 'type_3',
  TYPE_4 = 'type_4',
  TYPE_5 = 'type_5',
  TYPE_6_GROUP = 'type_6Group',
  TYPE_6 = 'type_6',
  TYPE_7 = 'type_7',
  VIDEO = 'video',
  BLOG_PREVIEW = 'blogPreview',
  JOB_EMPLOYER = 'jobEmployer',
  JOB_CANDIDATES = 'jobCandidates',
  PROCESS_PRIMARY = 'processPrimary',
  PROCESS_SECONDARY = 'processSecondary',
  TESTIMONIAL = 'testimonial',
}

export const createSectionType: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(COMMON_CONTENT_TYPE.SECTION_TYPE, {
    name: COMMON_CONTENT_TYPE.SECTION_TYPE,
    displayField: COMMON_FIELD.NAME,
    description: 'Each section has a type to select the look and feel.',
  });
  /**
   * For Name
   */
  content.createField(COMMON_FIELD.NAME, { name: pascal(COMMON_FIELD.NAME), type: 'Symbol' });

  const allValidationType = Object.keys(SECTION_TYPE).map((element: string) => {
    return element;
  });

  content.createField(COMMON_FIELD.TYPE, {
    name: pascal(COMMON_FIELD.TYPE),
    type: 'Link',
    linkType: 'Entry',
    required: true,
    validations: [
      {
        linkContentType: allValidationType,
      },
    ],
  });

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

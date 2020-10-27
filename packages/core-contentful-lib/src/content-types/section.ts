import * as Migration from 'contentful-migration';
import { COMMON_CONTENT_TYPE } from '../common/types.constants';
import { commonFields, titleFields } from '../common/types.models';

export const sectionExport: Migration.MigrationFunction = function (migration) {
  const Section = migration.createContentType(COMMON_CONTENT_TYPE.SECTION, {
    name: 'Section',
    description: 'To Do',
  });
  const type = Section.createField('type', {
    ...commonFields,
    validations: [
      {
        in: [
          'type1group',
          'type1',
          'type2',
          'type3',
          'type4',
          'type5',
          'type6',
          'type7',
          'video',
          'jobEmployer',
          'jobCandidates',
        ],
      },
    ],
  });
  const variant = Section.createField('variant', {
    name: 'Variant',
    type: 'Symbol',
    required: true,
    validations: [
      {
        in: ['Primary', 'PrimaryReversed', 'Secondary', 'SecondaryReversed', 'Tertiary', 'TertiaryReversed'],
      },
    ],
  });
  const titleSection = Section.createField('title', { ...titleFields, required: true });
  const titleHighlightSection = Section.createField('titleHighlight', {
    name: 'TitleHighlight',
    type: 'Symbol',
    localized: true,
  });
  const descriptionSection = Section.createField('description', { name: 'Description', type: 'Text', localized: true });

  const imageCollection = Section.createField('imageCollection', {
    name: 'imageCollection',
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: [COMMON_CONTENT_TYPE.IMAGE_COLLECTION] }],
    },
  });
};

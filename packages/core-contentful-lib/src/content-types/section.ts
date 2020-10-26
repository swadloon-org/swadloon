import * as Migration from 'contentful-migration';
import { COMMON_TYPE } from '../common/types.constants';
import { commonFields } from '../common/types.models';

export const sectionExport: Migration.MigrationFunction = function (migration) {
  const Section = migration.createContentType(COMMON_TYPE.SECTION, {
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
  // type
  //   .name('Type')
  //   .type('Symbol')
  //   .required(true)
  //   .validations([
  //     {
  //       in: [
  //         'type1group',
  //         'type1',
  //         'type2',
  //         'type3',
  //         'type4',
  //         'type5',
  //         'type6',
  //         'type7',
  //         'video',
  //         'jobEmployer',
  //         'jobCandidates',
  //       ],
  //     },
  //   ]);

  const variant = Section.createField('variant');
  variant
    .name('Variant')
    .type('Symbol')
    .required(true)
    .validations([
      {
        in: ['Primary', 'PrimaryReversed', 'Secondary', 'SecondaryReversed', 'Tertiary', 'TertiaryReversed'],
      },
    ]);

  const titleSection = Section.createField('title');
  titleSection.name('Title').type('Symbol').required(true).localized(true);

  const titleHighlightSection = Section.createField('titleHighlight');
  titleHighlightSection.name('TitleHighlight').type('Symbol').localized(true);

  const descriptionSection = Section.createField('description');
  descriptionSection.name('Description').type('Text').localized(true);
};

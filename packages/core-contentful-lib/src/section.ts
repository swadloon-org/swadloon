import Migration from 'contentful-migration';

export function SectionTest(migration: Migration) {
  const Section = migration.createContentType('Section', {
    name: 'Section',
  });

  const type = Section.createField('type');
  type
    .name('Type')
    .type('Symbol')
    .required(true)
    .validations([
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
    ]);

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
  titleHighlightSection.name('TitleHighlight').type('Symbol').required(true).localized(true);

  const descriptionSection = Section.createField('description');
  descriptionSection.name('Description').type('Text').required(true).localized(true);
}

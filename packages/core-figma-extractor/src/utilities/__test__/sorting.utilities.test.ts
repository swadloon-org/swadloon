import { sortColorNames } from '../sorting.utilities';

describe('sorting utilities', () => {
  describe(`${sortColorNames.name}`, () => {
    it('should sort colors names by their theme', () => {
      expect(sortColorNames(['darkPrimary700', 'lightPrimary700'])).toEqual([
        'lightPrimary700',
        'darkPrimary700',
      ]);
    });

    it('should sort colors names by their theme and by name', () => {
      expect(
        sortColorNames(['darkPrimary700', 'lightPrimary700', 'lightPrimary1000', 'darkPrimary1000'])
      ).toEqual(['lightPrimary1000', 'lightPrimary700', 'darkPrimary1000', 'darkPrimary700']);
    });

    it('should sort colors names by their theme and by name and by their level', () => {
      expect(
        sortColorNames([
          'darkPrimary700',
          'lightPrimary700',
          'lightPrimary1000',
          'darkPrimary1000',
          'lightPrimary500',
        ])
      ).toEqual([
        'lightPrimary1000',
        'lightPrimary700',
        'lightPrimary500',
        'darkPrimary1000',
        'darkPrimary700',
      ]);
    });

    it('should sort colors names correctly', () => {
      expect(
        sortColorNames([
          'lightPrimary700',
          'darkPrimary700',
          'lightPrimary1000',
          'lightPrimary100',
          'darkPrimary900',
          'lightPrimary900',
          'darkPrimary100',
          'darkPrimary300',
          'lightBG1',
          'lightSecondary900',
          'lightPrimary500',
          'lightPrimary800',
          'lightPrimary200',
          'darkPrimary500',
          'darkPrimary1000',
          'darkPrimary800',
          'darkPrimary200',
          'lightGrey0White',
          'lightGrey1000',
          'lightBG2',
        ])
      ).toEqual([
        'lightPrimary1000',
        'lightPrimary900',
        'lightPrimary800',
        'lightPrimary700',
        'lightPrimary500',
        'lightPrimary200',
        'lightPrimary100',
        'lightSecondary900',
        'lightGrey1000',
        'lightGrey0White',
        'lightBG1',
        'lightBG2',
        'darkPrimary1000',
        'darkPrimary900',
        'darkPrimary800',
        'darkPrimary700',
        'darkPrimary500',
        'darkPrimary300',
        'darkPrimary200',
        'darkPrimary100',
      ]);
    });
  });
});

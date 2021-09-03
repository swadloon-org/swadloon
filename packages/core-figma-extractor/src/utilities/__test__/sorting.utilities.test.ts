import { sortColorNames } from '../sorting.utilities';

describe('sorting utilities', () => {
  const colorNames = [
    'lightBG1',
    'lightSecondary900',
    'lightPrimary500',
    'lightPrimary1000',
    'darkPrimary500',
    'darkPrimary1000',
    'lightGrey0White',
    'lightGrey1000',
    'lightBG2',
  ];

  describe(`${sortColorNames.name}`, () => {
    it('should sort colors names correctly', () => {
      expect(sortColorNames(colorNames)).toEqual([
        'lightPrimary1000',
        'lightPrimary500',
        'lightSecondary900',
        'lightGrey1000',
        'lightGrey0White',
        'lightBG1',
        'lightBG2',
        'darkPrimary1000',
        'darkPrimary500',
      ]);
    });
  });
});

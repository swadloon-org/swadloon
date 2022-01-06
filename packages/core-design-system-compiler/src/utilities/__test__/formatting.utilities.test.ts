import { formatNameNumberKebabCase } from '../formatting.utilities';

describe('formattting utilities', () => {
  const colorNames = [
    'lightBG1',
    'lightBg1',
    'lightSecondary900',
    'lightPrimary500',
    'lightPrimary1000',
    'lightGrey0White',
    'lightGrey1000',
    'lightBG2',
  ];

  describe(`${formatNameNumberKebabCase.name}`, () => {
    it('should split numbers from camel case', () => {
      expect(colorNames.map(formatNameNumberKebabCase)).toEqual([
        'light-b-g-1',
        'light-bg-1',
        'light-secondary-900',
        'light-primary-500',
        'light-primary-1000',
        'light-grey-0-white',
        'light-grey-1000',
        'light-b-g-2',
      ]);
    });
  });
});

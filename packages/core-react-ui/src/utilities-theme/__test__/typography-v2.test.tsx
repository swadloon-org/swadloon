import { defaultBaseFontSize } from '../../default-theme/default-sizing.js';
import { defaultTypography } from '../../default-theme/default-typography.js';
import { getCSSTypographyV2 } from '../typography-v2.utilities.js';

describe('typography v2 utilities', () => {
  describe(`${getCSSTypographyV2.name}`, () => {
    it('should create a valid CSS typography object', () => {
      expect(
        getCSSTypographyV2({ ...defaultTypography, baseFontSize: defaultBaseFontSize })
      ).toMatchSnapshot();
    });
  });
});

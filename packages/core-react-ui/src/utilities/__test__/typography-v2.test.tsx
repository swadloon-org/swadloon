import { defaultBaseFontSize } from '../../default-theme/default-sizing';
import { defaultTypography } from '../../default-theme/default-typography';
import { getCSSTypographyV2 } from '../typography-v2.utilities';

describe('typography v2 utilities', () => {
  describe(`${getCSSTypographyV2.name}`, () => {
    it('should create a valid CSS typography object', () => {
      expect(
        getCSSTypographyV2({ ...defaultTypography, baseFontSize: defaultBaseFontSize })
      ).toMatchSnapshot();
    });
  });
});

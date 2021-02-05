import { CapsizeTextStyle, TextStyle } from '@newrade/core-design-system';
import { defaultFallbackSansFonts, defaultSansFont } from '../../design-system/default-fonts';
import { defaultBaseFontSize } from '../../design-system/default-sizing';
import { defaultTypography } from '../../design-system/default-typography';
import { createCSSCapsizeTextStyle } from '../text.utilities';
import { getCSSTypography } from '../typography.utilities';

describe('colors utilities', () => {
  describe(`${createCSSCapsizeTextStyle.name}`, () => {
    it('should create a valid CSS typography object', () => {
      const textStyle: TextStyle & CapsizeTextStyle = {
        font: [defaultSansFont, ...defaultFallbackSansFonts],
        capHeight: 55,
        lineGap: 19,
      };
      expect(createCSSCapsizeTextStyle({ baseFontSize: defaultBaseFontSize, ...textStyle })).toMatchSnapshot();
    });
  });

  describe(`${getCSSTypography.name}`, () => {
    it('should create a valid CSS typography object', () => {
      expect(getCSSTypography({ ...defaultTypography, baseFontSize: defaultBaseFontSize })).toMatchSnapshot();
    });
  });
});

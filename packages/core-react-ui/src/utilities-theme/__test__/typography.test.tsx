import { CapsizeTextStyle, TextStyle } from '@newrade/core-design-system';

import { defaultFallbackSansFonts, defaultSansFont } from '../../default-theme/default-fonts.js';
import { defaultBaseFontSize } from '../../default-theme/default-sizing.js';
import { defaultTypography } from '../../default-theme/default-typography.js';
import { createCSSCapsizeTextStyle } from '../text-capsize.utilities.js';
import { getCSSTypographyV2 } from '../typography-v2.utilities.js';

describe('typography utilities', () => {
  describe(`${createCSSCapsizeTextStyle.name}`, () => {
    it('should create a valid CSS typography object', () => {
      const textStyle: TextStyle & CapsizeTextStyle = {
        fontFamily: [defaultSansFont, ...defaultFallbackSansFonts],
        capHeight: 55,
        lineGap: 19,
      };
      expect(
        createCSSCapsizeTextStyle({ baseFontSize: defaultBaseFontSize, ...textStyle })
      ).toMatchSnapshot();
    });
  });

  describe(`${createCSSCapsizeTextStyle.name}`, () => {
    it('should respect the passed fontSize', () => {
      const textStyle: TextStyle & CapsizeTextStyle = {
        fontFamily: [defaultSansFont, ...defaultFallbackSansFonts],
        fontSize: 16,
        lineGap: 12,
      };
      const textStyleCSS = createCSSCapsizeTextStyle({
        baseFontSize: defaultBaseFontSize,
        ...textStyle,
      });
      expect(textStyleCSS.fontSize).toEqual(textStyle.fontSize?.toString());
    });
  });

  describe(`${getCSSTypographyV2.name}`, () => {
    it('should create a valid CSS typography object', () => {
      expect(
        getCSSTypographyV2({ ...defaultTypography, baseFontSize: defaultBaseFontSize })
      ).toMatchSnapshot();
    });
  });
});

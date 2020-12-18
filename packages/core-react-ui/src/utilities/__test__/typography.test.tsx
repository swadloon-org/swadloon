import { defaultTypography } from '../../design-system/default-typography';
import { getCSSTypography } from '../typography.utilities';
import { defaultBaseFontSize } from '../../design-system/default-sizing';
import { createCSSTextStyle } from '../text.utilities';
import { TextStyle } from '@newrade/core-design-system';
import { defaultSansFont, defaultFallbackSansFonts } from '../../design-system/default-fonts';

describe('colors utilities', () => {
  describe(`${createCSSTextStyle.name}`, () => {
    it('should create a valid CSS typography object', () => {
      const textStyle: TextStyle = {
        font: [defaultSansFont, ...defaultFallbackSansFonts],
        capHeight: 55,
        lineGap: 19,
      };
      expect(createCSSTextStyle({ baseFontSize: defaultBaseFontSize, ...textStyle })).toMatchSnapshot();
    });
  });

  describe(`${getCSSTypography.name}`, () => {
    it('should create a valid CSS typography object', () => {
      expect(getCSSTypography({ ...defaultTypography, baseFontSize: defaultBaseFontSize })).toMatchSnapshot();
    });
  });
});

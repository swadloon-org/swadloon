import { CSSDesignSystem } from '../design-system/css-design-system';
import { defaultTheme } from '../design-system/default-theme';
import { generatedCSSColors } from './colors.mock';
import { createCSSTheme } from './theme.utilities';

describe('theme utilities', () => {
  describe(`${createCSSTheme.name}`, () => {
    it('should create a valid CSS theme', () => {
      expect(createCSSTheme(defaultTheme)).toEqual({
        name: defaultTheme.name,
        variation: defaultTheme.variation,
        colors: generatedCSSColors,
      } as CSSDesignSystem);
    });
  });
});

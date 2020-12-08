import { CSSDesignSystem } from '../design-system/css-design-system';
import { defaultTheme } from '../design-system/default-theme';
import { generatedCSSColors } from './colors.mock';
import { createCSSTheme } from './theme.utilities';

describe('theme utilities', () => {
  describe(`${createCSSTheme.name}`, () => {
    it('should create a valid CSS theme', () => {
      const defaultCSSTheme = createCSSTheme(defaultTheme);
      expect(defaultCSSTheme.name).toEqual(defaultTheme.name);
      expect(defaultCSSTheme.variation).toEqual(defaultTheme.variation);
      expect(defaultCSSTheme.colors).toEqual(generatedCSSColors);
    });
  });
});

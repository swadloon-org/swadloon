import { defaultTheme } from '../../design-system/default-theme';
import { createCSSTheme } from '../theme.utilities';

describe('theme utilities', () => {
  describe(`${createCSSTheme.name}`, () => {
    it('should create a valid CSS theme', () => {
      const defaultCSSTheme = createCSSTheme(defaultTheme);
      expect(defaultCSSTheme.name).toMatchSnapshot();
      expect(defaultCSSTheme.variation).toMatchSnapshot();
      expect(defaultCSSTheme.colors).toMatchSnapshot();
    });
  });
});

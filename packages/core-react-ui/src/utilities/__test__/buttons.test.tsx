import { defaultTheme } from '../../default-theme/default-theme';
import { getCSSButtons } from '../buttons.utilities';

describe('buttons utilities', () => {
  describe(`${getCSSButtons.name}`, () => {
    it(`should generate CSS variable names for a given Colors object`, () => {
      const buttonsCSS = getCSSButtons(defaultTheme);
      expect(buttonsCSS).toMatchSnapshot();
    });
  });
});

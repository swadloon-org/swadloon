import { defaultButtons } from '../../default-theme/src.js';
import { getCSSButtons } from '../buttons.utilities.js';

describe('buttons utilities', () => {
  describe(`${getCSSButtons.name}`, () => {
    it(`should generate CSS variable names for a given Colors object`, () => {
      const buttonsCSS = getCSSButtons(defaultButtons);
      expect(buttonsCSS).toMatchSnapshot();
    });
  });
});

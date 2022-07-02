import { CSSButtons } from '../../css-design-system/css-buttons.js';
import { defaultCSSButtons } from '../../default-theme/default-buttons-css.js';
import { setVarsValuesToStyleObject } from '../component.utilities.js';

describe('component utilities', () => {
  describe(`${setVarsValuesToStyleObject.name}`, () => {
    it(`should correctly replaced passed values in a style object`, () => {
      const modified = setVarsValuesToStyleObject<CSSButtons>(defaultCSSButtons, {
        variants: {
          primary: {
            borderColor: 'red',
          },
        },
      });

      expect(modified.variants.primary.borderColor).toEqual('red');
    });
  });
});

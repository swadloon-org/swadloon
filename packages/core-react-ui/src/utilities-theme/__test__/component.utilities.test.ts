import { defaultCSSButtons } from '../../default-theme/default-buttons-css';
import { CSSButtons } from '../../design-system/css-buttons';
import { setVarsValuesToStyleObject } from '../component.utilities';

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

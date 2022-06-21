import { getFormattedCSSVar, getFormattedCSSVarName } from '../props.utilities.js';

describe('props utilities', () => {
  describe(`${getFormattedCSSVar.name}`, () => {
    it(`should format passed values into a valid css variable`, () => {
      expect(
        getFormattedCSSVar({
          prefix: 'btn',
        })
      ).toEqual('var(--btn)');
      expect(
        getFormattedCSSVar({
          prefix: 'btnNN',
        })
      ).toEqual('var(--btn-n-n)');
      expect(
        getFormattedCSSVar({
          prefix: 'button',
          category: 'primary',
          propName: 'borderWidth',
        })
      ).toEqual('var(--btn-prim-bor-width)');
      expect(
        getFormattedCSSVarName({
          prefix: 'button',
          category: 'primary',
          propName: 'borderWidth',
        })
      ).toEqual('--btn-prim-bor-width');
    });
  });
});

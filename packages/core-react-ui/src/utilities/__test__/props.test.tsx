import { getFormattedCSSVar, getFormattedCSSVarName } from '../props.utilities';

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
          category: 'primaryReversed',
          propName: 'borderWidth',
        })
      ).toEqual('var(--btn-prim-rev-bor-width)');
      expect(
        getFormattedCSSVarName({
          prefix: 'button',
          category: 'primaryReversed',
          propName: 'borderWidth',
        })
      ).toEqual('--btn-prim-rev-bor-width');
    });
  });
});

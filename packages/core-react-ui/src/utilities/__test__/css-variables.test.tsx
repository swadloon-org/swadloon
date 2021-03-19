import { CSSBoxVarNames } from '../../design-system/css-box';
import { getCSSVarNameForBox } from '../box.utilities';

describe('css variables utilities', () => {
  describe(`${getCSSVarNameForBox.name}`, () => {
    it(`should format passed values into a valid css variable`, () => {
      const boxCSSVar = getCSSVarNameForBox({
        box: {
          width: 1,
          height: 1,
          padding: {
            default: 1,
          },
        },
        prefix: 'btn-large',
        varBrackets: false,
      });

      expect(boxCSSVar).toEqual({
        width: '--btn-lg-width',
        height: '--btn-lg-height',
        backgroundColor: '--btn-lg-bg-color',
        padding: {
          default: '--btn-lg-pad',
          top: '--btn-lg-pad-top',
          right: '--btn-lg-pad-right',
          bottom: '--btn-lg-pad-bottom',
          left: '--btn-lg-pad-left',
        },
        border: {
          default: {
            color: '--btn-lg-bor-color',
            style: '--btn-lg-bor-style',
            width: '--btn-lg-bor-width',
            radius: '--btn-lg-bor-radius',
          },
        },
      } as CSSBoxVarNames);
    });
  });
});

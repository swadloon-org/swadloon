import { BorderStyles } from '@newrade/core-design-system';

import { defaultColors } from '../../default-theme/default-colors';
import { CSSBoxVarNames } from '../../design-system/css-box';
import { getCSSVarNameForBox } from '../box.utilities';

export const defaultButtonBorder: BorderStyles = {
  default: {
    width: 1,
    style: 'solid',
    color: defaultColors.colorIntents.primary,
    radius: {
      all: 3,
    },
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
};

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
          border: defaultButtonBorder,
          outline: {},
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
        outline: {
          color: '--btn-lg-out-color',
          style: '--btn-lg-out-style',
          width: '--btn-lg-out-width',
          radius: '--btn-lg-out-radius',
        },
      } as CSSBoxVarNames);
    });
  });
});

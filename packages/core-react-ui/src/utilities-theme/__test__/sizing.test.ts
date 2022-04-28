import { Sizing, VIEWPORT } from '@newrade/core-design-system';

import { defaultSizing } from '../../default-theme/default-sizing';
import { getCSSSizingStepV2, getCSSSizingV2 } from '../sizing.utilities';

describe('sizing utilities', () => {
  describe(`${getCSSSizingV2.name}`, () => {
    it('should create matching CSS Sizing object', () => {
      const sizing = getCSSSizingV2(defaultSizing) as Sizing<string>;
      expect(sizing).toMatchSnapshot();
    });
  });

  describe(`${getCSSSizingStepV2.name}`, () => {
    it('should create valid CSS sizing steps, given predefined one precise number for each', () => {
      const steps = getCSSSizingStepV2({
        desktop: {
          x0: 4,
          x1: 9,
          x10: 606,
          x2: 13,
          x3: 21,
          x4: 34,
          x5: 55,
          x6: 89,
          x7: 144,
          x8: 232,
          x9: 375,
        },
        mobile: {
          x0: 6,
          x1: 9,
          x10: 468,
          x2: 14,
          x3: 20,
          x4: 30,
          x5: 45,
          x6: 68,
          x7: 110,
          x8: 179,
          x9: 289,
        },
        tablet: {
          x0: 4,
          x1: 9,
          x10: 606,
          x2: 13,
          x3: 21,
          x4: 34,
          x5: 55,
          x6: 89,
          x7: 144,
          x8: 232,
          x9: 375,
        },
      });
      expect(steps).toEqual({
        desktop: {
          x0: '4px',
          x1: '9px',
          x10: '606px',
          x2: '13px',
          x3: '21px',
          x4: '34px',
          x5: '55px',
          x6: '89px',
          x7: '144px',
          x8: '232px',
          x9: '375px',
        },
        mobile: {
          x0: '6px',
          x1: '9px',
          x10: '468px',
          x2: '14px',
          x3: '20px',
          x4: '30px',
          x5: '45px',
          x6: '68px',
          x7: '110px',
          x8: '179px',
          x9: '289px',
        },
        tablet: {
          x0: '4px',
          x1: '9px',
          x10: '606px',
          x2: '13px',
          x3: '21px',
          x4: '34px',
          x5: '55px',
          x6: '89px',
          x7: '144px',
          x8: '232px',
          x9: '375px',
        },
      });
    });

    it('should create valid CSS sizing steps, given modular ratio options', () => {
      const steps = getCSSSizingStepV2(
        {
          desktop: {
            x0: 4,
            x1: 9,
            x2: 13,
            x3: 21,
            x4: 34,
            x5: 55,
            x6: 89,
            x7: 144,
            x8: 232,
            x9: 375,
            x10: 606,
          },
          mobile: {
            x0: 6,
            x1: 9,
            x2: 14,
            x3: 20,
            x4: 30,
            x5: 45,
            x6: 68,
            x7: 110,
            x8: 179,
            x9: 289,
            x10: 468,
          },
          tablet: {
            x0: 4,
            x1: 9,
            x2: 13,
            x3: 21,
            x4: 34,
            x5: 55,
            x6: 89,
            x7: 144,
            x8: 232,
            x9: 375,
            x10: 606,
          },
        },
        {
          [VIEWPORT.desktop]: 1,
          [VIEWPORT.tablet]: 2,
          [VIEWPORT.mobile]: 3,
        }
      );
      expect(steps).toEqual({
        desktop: {
          x0: '4px',
          x1: 'calc(var(--size-x0) * 1 * 1)',
          x2: 'calc(var(--size-x0) * 1 * 1 * 1)',
          x3: 'calc(var(--size-x0) * 1 * 1 * 1 * 1)',
          x4: 'calc(var(--size-x0) * 1 * 1 * 1 * 1 * 1)',
          x5: 'calc(var(--size-x0) * 1 * 1 * 1 * 1 * 1 * 1)',
          x6: 'calc(var(--size-x0) * 1 * 1 * 1 * 1 * 1 * 1 * 1)',
          x7: 'calc(var(--size-x0) * 1 * 1 * 1 * 1 * 1 * 1 * 1 * 1)',
          x8: 'calc(var(--size-x0) * 1 * 1 * 1 * 1 * 1 * 1 * 1 * 1 * 1)',
          x9: 'calc(var(--size-x0) * 1 * 1 * 1 * 1 * 1 * 1 * 1 * 1 * 1 * 1)',
          x10: 'calc(var(--size-x0) * 1 * 1 * 1 * 1 * 1 * 1 * 1 * 1 * 1 * 1 * 1)',
        },
        tablet: {
          x0: '4px',
          x1: 'calc(var(--size-x0) * 2 * 2)',
          x2: 'calc(var(--size-x0) * 2 * 2 * 2)',
          x3: 'calc(var(--size-x0) * 2 * 2 * 2 * 2)',
          x4: 'calc(var(--size-x0) * 2 * 2 * 2 * 2 * 2)',
          x5: 'calc(var(--size-x0) * 2 * 2 * 2 * 2 * 2 * 2)',
          x6: 'calc(var(--size-x0) * 2 * 2 * 2 * 2 * 2 * 2 * 2)',
          x7: 'calc(var(--size-x0) * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2)',
          x8: 'calc(var(--size-x0) * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2)',
          x9: 'calc(var(--size-x0) * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2)',
          x10: 'calc(var(--size-x0) * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2)',
        },
        mobile: {
          x0: '6px',
          x1: 'calc(var(--size-x0) * 3 * 3)',
          x2: 'calc(var(--size-x0) * 3 * 3 * 3)',
          x3: 'calc(var(--size-x0) * 3 * 3 * 3 * 3)',
          x4: 'calc(var(--size-x0) * 3 * 3 * 3 * 3 * 3)',
          x5: 'calc(var(--size-x0) * 3 * 3 * 3 * 3 * 3 * 3)',
          x6: 'calc(var(--size-x0) * 3 * 3 * 3 * 3 * 3 * 3 * 3)',
          x7: 'calc(var(--size-x0) * 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3)',
          x8: 'calc(var(--size-x0) * 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3)',
          x9: 'calc(var(--size-x0) * 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3)',
          x10: 'calc(var(--size-x0) * 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3)',
        },
      });
    });
  });
});

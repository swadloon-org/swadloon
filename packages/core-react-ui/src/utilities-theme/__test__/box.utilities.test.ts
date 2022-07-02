import { Color } from '@newrade/core-design-system';

import {
  getCSSBorderStyles,
  getCSSBoxMargin,
  getCSSBoxPadding,
  getCSSBoxRadius,
  getCSSOutlineStyles,
} from '../box.utilities.js';

describe('box utilities', () => {
  /**
   *
   * Box model
   *
   */

  describe(`${getCSSBoxPadding.name}`, () => {
    it('should create valid CSS box model properties', () => {
      expect(
        getCSSBoxPadding({
          default: 2,
        })
      ).toEqual({ default: `2px` });
    });
  });

  describe(`${getCSSBoxMargin.name}`, () => {
    it('should create valid CSS box model properties', () => {
      expect(
        getCSSBoxMargin({
          left: -2,
        })
      ).toEqual({ left: `-2px` });
    });
  });

  /**
   *
   * Borders
   *
   */

  describe(`${getCSSBorderStyles.name}`, () => {
    const borderColor: Color = {
      h: 222,
      s: 50,
      l: 50,
    };

    it('should create valid CSS border properties when using the default prop', () => {
      expect(
        getCSSBorderStyles({
          default: {
            width: 1,
            style: 'solid',
            color: borderColor,
            radius: {
              all: 3,
            },
          },
          top: {},
          right: {},
          bottom: {},
          left: {},
        }).default
      ).toEqual({ color: 'hsl(222, 50%, 50%, 1)', radius: '3px', style: 'solid', width: '1px' });
    });

    it('should create valid CSS border properties when using different border props', () => {
      expect(
        getCSSBorderStyles({
          default: {},
          top: {
            width: 1,
            style: 'solid',
            color: borderColor,
            radius: {
              all: 3,
            },
          },
          right: {
            width: 2,
            style: 'solid',
            color: borderColor,
            radius: {
              all: 3,
            },
          },
          bottom: {
            width: 3,
            style: 'solid',
            color: borderColor,
            radius: {
              all: 3,
            },
          },
          left: {
            width: 4,
            style: 'solid',
            color: borderColor,
            radius: {
              all: 3,
            },
          },
        })
      ).toEqual({
        default: {
          color: '',
          radius: '',
          style: '',
          width: '',
        },
        bottom: {
          color: 'hsl(222, 50%, 50%, 1)',
          radius: '3px',
          style: 'solid',
          width: '3px',
        },
        left: {
          color: 'hsl(222, 50%, 50%, 1)',
          radius: '3px',
          style: 'solid',
          width: '4px',
        },
        right: {
          color: 'hsl(222, 50%, 50%, 1)',
          radius: '3px',
          style: 'solid',
          width: '2px',
        },
        top: {
          color: 'hsl(222, 50%, 50%, 1)',
          radius: '3px',
          style: 'solid',
          width: '1px',
        },
      });
    });
  });

  /**
   *
   * Outlines
   *
   */

  describe(`${getCSSOutlineStyles.name}`, () => {
    const borderColor: Color = {
      h: 222,
      s: 50,
      l: 50,
    };

    it('should create valid CSS outline properties when using the default prop', () => {
      expect(
        getCSSOutlineStyles({
          width: 1,
          style: 'solid',
          color: borderColor,
          radius: {
            all: 3,
          },
        })
      ).toEqual({ color: 'hsl(222, 50%, 50%, 1)', radius: '3px', style: 'solid', width: '1px' });
    });
  });

  /**
   *
   * Radius
   *
   */

  describe(`${getCSSBoxRadius.name}`, () => {
    it('should create a valid CSS radius property when all sides have the same radius', () => {
      expect(
        getCSSBoxRadius({
          all: 2,
          topLeft: 2,
          topRight: 2,
          bottomRight: 2,
          bottomLeft: 2,
        })
      ).toBe('2px');
    });

    it('should create a valid CSS radius property when each side has different radiuses', () => {
      expect(
        getCSSBoxRadius({
          topLeft: 1,
          topRight: 2,
          bottomRight: 3,
          bottomLeft: 4,
        })
      ).toBe('1px 2px 3px 4px');
    });
  });
});

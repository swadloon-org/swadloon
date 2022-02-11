import React from 'react';

import { cleanup, render } from '@testing-library/react';

import { Color } from '@newrade/core-design-system';

import { defaultColors } from '../../default-theme/default-colors';
import { getColorFromHex, getCSSColor, getCSSColorsV2, getCSSHexColor } from '../colors.utilities';

describe('colors utilities', () => {
  describe(`${getCSSColor.name}`, () => {
    it('should create a valid CSS color from a Color object', () => {
      const color: Color = {
        h: 222,
        s: 40,
        l: 50,
        a: 80,
      };
      const cssColor = getCSSColor(color);
      expect(cssColor).toBe('hsl(222, 40%, 50%, 0.8)');
    });

    it('should create a valid CSS color from a Color object with no transparency', () => {
      const color: Color = {
        h: 222,
        s: 40,
        l: 50,
        a: 100,
      };
      const cssColor = getCSSColor(color);
      expect(cssColor).toBe('hsl(222, 40%, 50%, 1)');
    });

    it(`should create a valid CSS color from a Color object the param 'a' not set`, () => {
      const color: Color = {
        h: 222,
        s: 40,
        l: 50,
      };
      const cssColor = getCSSColor(color);
      expect(cssColor).toBe('hsl(222, 40%, 50%, 1)');
    });

    it(`should create a valid CSS color that can be applied to a div`, () => {
      const color: Color = {
        h: 222,
        s: 40,
        l: 50,
      };
      const result = render(
        <div className="1" style={{ backgroundColor: getCSSColor(color) }}></div>
      );
      expect(result.container.firstChild).toBeDefined();
      if (result.container.firstChild) {
        const element = result.container.getElementsByClassName('1');
        if (!element) {
          fail('element div not found');
        }
        // @ts-ignore
        expect(element[0]).toHaveStyle(`backgroundColor: hsl(222 40%, 50%, 1)`);
      }
      cleanup();
    });
  });

  describe(`${getCSSHexColor.name}`, () => {
    it('should create a valid HEX CSS color from a Color object', () => {
      const color: Color = {
        h: 0,
        s: 100,
        l: 50,
      };
      const cssColor = getCSSHexColor(color);
      expect(cssColor).toBe('#f00');
    });
  });

  describe(`${getColorFromHex.name}`, () => {
    it('should create a valid Color object from a hex color', () => {
      const color = getColorFromHex('#36acaa');
      expect(color).toEqual({
        h: 179,
        s: 52,
        l: 44,
        a: 100,
      });
    });
  });

  describe(`${getCSSColorsV2.name}`, () => {
    it(`should generate a CSS colors from a Colors object`, () => {
      const colors = getCSSColorsV2(defaultColors);
      expect(colors).toMatchSnapshot();
    });
  });
});

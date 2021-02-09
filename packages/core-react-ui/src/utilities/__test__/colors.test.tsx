import { Color } from '@newrade/core-design-system';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { defaultColorIntents, defaultColors, defaultColorsColors } from '../../design-system/default-colors';
import {
  getCSSColor,
  getCSSColors,
  getCSSHexColor,
  getCSSVarForColors,
  getCSSVarNamesForColors,
} from '../colors.utilities';

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
      expect(cssColor).toBe('hsl(222deg 40% 50% / 80%)');
    });

    it('should create a valid CSS color from a Color object with no transparency', () => {
      const color: Color = {
        h: 222,
        s: 40,
        l: 50,
        a: 100,
      };
      const cssColor = getCSSColor(color);
      expect(cssColor).toBe('hsl(222deg 40% 50% / 100%)');
    });

    it(`should create a valid CSS color from a Color object the param 'a' not set`, () => {
      const color: Color = {
        h: 222,
        s: 40,
        l: 50,
      };
      const cssColor = getCSSColor(color);
      expect(cssColor).toBe('hsl(222deg 40% 50% / 100%)');
    });

    it(`should create a valid CSS color that can be applied to a div`, () => {
      const color: Color = {
        h: 222,
        s: 40,
        l: 50,
      };
      const result = render(<div className="1" style={{ backgroundColor: getCSSColor(color) }}></div>);
      expect(result.container.firstChild).toBeDefined();
      if (result.container.firstChild) {
        const element = result.container.getElementsByClassName('1');
        if (!element) {
          fail('element div not found');
        }
        // @ts-ignore
        expect(element[0]).toHaveStyle(`backgroundColor: hsl(222deg 40% 50% / 100%)`);
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

  describe(`${getCSSVarNamesForColors.name}`, () => {
    it(`should generate CSS variable names for a given Colors object`, () => {
      const vars = getCSSVarNamesForColors({ colors: defaultColorsColors, colorIntents: defaultColorIntents });
      expect(vars).toMatchSnapshot();
    });

    it(`should generate CSS statement to access Colors CSS vars`, () => {
      const vars = getCSSVarForColors({ colors: defaultColorsColors, colorIntents: defaultColorIntents });
      expect(vars).toMatchSnapshot();
    });
  });

  describe(`${getCSSColors.name}`, () => {
    it(`should generate a CSS colors from a Colors object`, () => {
      const colors = getCSSColors(defaultColors);
      expect(colors).toMatchSnapshot();
    });
  });
});

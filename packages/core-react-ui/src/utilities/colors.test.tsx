import { Color } from '@newrade/core-design-system';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { defaultColorIntents, defaultColors, defaultColorsColors } from '../design-system/default-colors';
import { generatedColorCSSVarNames, generatedCSSColors } from './colors.mock';
import { getCSSColor, getCSSColors, getCSSVarForColors, getCSSVarNamesForColors } from './colors.utilities';

describe('colors utilities', () => {
  describe(`${getCSSColor.name}`, () => {
    it('should create a valid CSS color from a Color object', () => {
      const color: Color = {
        h: 222,
        s: 40,
        l: 50,
        a: 80,
      };
      expect(getCSSColor(color)).toBe('hsl(222deg 40% 50% / 80%)');
    });

    it('should create a valid CSS color from a Color object with no transparency', () => {
      const color: Color = {
        h: 222,
        s: 40,
        l: 50,
        a: 100,
      };
      expect(getCSSColor(color)).toBe('hsl(222deg 40% 50% / 100%)');
    });

    it(`should create a valid CSS color from a Color object the param 'a' not set`, () => {
      const color: Color = {
        h: 222,
        s: 40,
        l: 50,
      };
      expect(getCSSColor(color)).toBe('hsl(222deg 40% 50% / 100%)');
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

  describe(`${getCSSVarNamesForColors.name}`, () => {
    it(`should generate CSS variable names for a given Colors object`, () => {
      expect(getCSSVarNamesForColors({ colors: defaultColorsColors, colorIntents: defaultColorIntents })).toEqual(
        generatedColorCSSVarNames
      );
    });

    it(`should generate CSS statement to access Colors CSS vars`, () => {
      expect(getCSSVarForColors({ colors: defaultColorsColors, colorIntents: defaultColorIntents })).toEqual(
        generatedColorCSSVarNames.map((cssVar) => `var(${cssVar})`)
      );
    });
  });

  describe(`${getCSSColors.name}`, () => {
    it(`should generate a CSS colors from a Colors object`, () => {
      expect(getCSSColors(defaultColors)).toEqual(generatedCSSColors);
    });
  });
});

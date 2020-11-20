import { Color } from '@newrade/core-design-system';
import { getCSSColor } from './colors.utilities';

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

    it(`should create a valid CSS color from a Color object the param 'a' not set`, () => {
      const color: Color = {
        h: 222,
        s: 40,
        l: 50,
      };
      expect(getCSSColor(color)).toBe('hsl(222deg 40% 50% / 100%)');
    });
  });
});

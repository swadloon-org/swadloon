import { getCSSBoxShadow, getCSSTextShadow } from '../effects.utilities.js';

describe('shadows utilities', () => {
  describe(`${getCSSBoxShadow.name}`, () => {
    it('should create a valid CSS box-shadow property', () => {
      expect(
        getCSSBoxShadow({
          offsetX: 0,
          offsetY: 0,
          blur: 1,
          spread: 0,
          color: {
            h: 222,
            s: 90,
            l: 90,
            a: 70,
          },
        })
      ).toBe('0px 0px 1px 0px hsl(222, 90%, 90%, 0.7)');
    });
    it('should create a valid CSS text-shadow property', () => {
      expect(
        getCSSTextShadow({
          offsetX: 0,
          offsetY: 0,
          blur: 1,
          color: {
            h: 222,
            s: 90,
            l: 90,
            a: 70,
          },
        })
      ).toBe('0px 0px 1px hsl(222, 90%, 90%, 0.7)');
    });
  });
});

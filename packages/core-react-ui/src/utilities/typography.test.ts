import { getCSSShadow } from './shadows.utilities';

describe('shadows utilities', () => {
  describe(`${getCSSShadow.name}`, () => {
    it('should create a valid CSS box-shadow property', () => {
      expect(
        getCSSShadow({
          offsetX: 0,
          offsetY: 0,
          blur: 1,
          spread: 0,
          color: {
            h: 222,
            s: 90,
            l: 90,
            a: 0.7,
          },
        })
      ).toBe('0px 0px 1px 0px hsl(222deg 90% 90% / 0.7%)');
    });
  });
});

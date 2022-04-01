import { round } from '../../utilities-iso';

describe('math utilities', () => {
  describe(`${round.name}`, () => {
    it('should round number to the specified precision', () => {
      expect(round({ value: 1234.0002, precision: 0 })).toBe(1234);
      expect(round({ value: 1234.1, precision: 0 })).toBe(1234);
      expect(round({ value: 1234.5, precision: 1 })).toBe(1234.5);
      expect(round({ value: 1234.0002, precision: 4 })).toBe(1234.0002);
    });
  });
});

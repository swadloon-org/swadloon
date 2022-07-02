import { getScaledValue } from '../scale.utilities.js';

describe('scale utilities', () => {
  describe(`${getScaledValue.name}`, () => {
    it('should return correct scaled value', () => {
      expect(
        getScaledValue({
          step: 0,
          base: 12,
          ratio: 'goldenSection',
        })
      ).toEqual(12);
      expect(
        getScaledValue({
          step: 1,
          base: 12,
          ratio: 'goldenSection',
          precision: 0,
        })
      ).toEqual(19);
      expect(
        getScaledValue({
          step: 1,
          base: 12,
          ratio: 'goldenSection',
        })
      ).toEqual(19.416);
      expect(
        getScaledValue({
          step: 2,
          base: 12,
          ratio: 'goldenSection',
        })
      ).toEqual(31.4151);
      expect(
        getScaledValue({
          step: 4,
          base: 12,
          ratio: 'goldenSection',
        })
      ).toEqual(82.2423);
      expect(
        getScaledValue({
          step: 4,
          base: 12,
          ratio: 'goldenSection',
        })
      ).toEqual(82.2423);
      expect(
        getScaledValue({
          step: 3,
          base: 12,
          ratio: 'goldenSection',
        })
      ).toEqual(50.8296);
    });
  });
});

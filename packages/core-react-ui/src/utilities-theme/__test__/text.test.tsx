import { convertPxLetterSpacingToEm } from '../text.utilities.js';

describe('text utilities', () => {
  describe(`${convertPxLetterSpacingToEm.name}`, () => {
    it(`should correctly format numeral letter spacing to em unit`, () => {
      expect(
        convertPxLetterSpacingToEm({
          value: '1px',
          fontSize: '16px',
        })
      ).toEqual('0.0625em');
    });
  });
});

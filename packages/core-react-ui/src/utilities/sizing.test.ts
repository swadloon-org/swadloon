import { createSizingStep } from './sizing.utilities';

describe('sizing utilities', () => {
  describe(`${createSizingStep.name}`, () => {
    it('should create a valid sizing steps', () => {
      expect(
        createSizingStep({
          value,
          baseFontSize,
        })
      ).toBe(Number);
    });
  });
});

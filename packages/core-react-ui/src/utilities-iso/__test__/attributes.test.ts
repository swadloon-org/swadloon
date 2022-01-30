import { getFormattedAnchorId } from '../attributes.utilities';

describe('attributes utilities', () => {
  describe(`${getFormattedAnchorId.name}`, () => {
    it('should format id with leading digit', () => {
      expect(getFormattedAnchorId('1234')).toBe('id-1234');
    });

    it('should format id with pascal cases', () => {
      expect(getFormattedAnchorId('PascalCase')).toBe('pascalcase');
    });

    it('should format id with uppercase', () => {
      expect(getFormattedAnchorId('UPPER')).toBe('upper');
    });
  });
});

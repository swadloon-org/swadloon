import { getIdFromSelfLink } from '../cliniko-patients.controller';

describe(`cliniko patients utilities`, () => {
  describe(`${getIdFromSelfLink.name}`, () => {
    it('should extract the id from a self link path', () => {
      expect(getIdFromSelfLink('https://api.ca1.cliniko.com/v1/treatment_note_templates/608098732734417720')).toBe(
        608098732734417720
      );
    });
  });
});

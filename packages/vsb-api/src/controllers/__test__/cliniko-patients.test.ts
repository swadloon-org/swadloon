import { getIdFromSelfLink } from '../../utilities/cliniko.utilities';

describe(`cliniko patients utilities`, () => {
  describe(`${getIdFromSelfLink.name}`, () => {
    it('should extract the id from a self link path', () => {
      const id = getIdFromSelfLink('https://api.ca1.cliniko.com/v1/treatment_note_templates/608098732734417720');
      expect(id).toBe(608098732734417720);
    });
  });
});

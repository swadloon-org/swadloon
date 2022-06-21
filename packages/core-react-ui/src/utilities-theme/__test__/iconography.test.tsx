import { defaultIconography } from '../../default-theme/src.js';
import { getCSSIconography } from '../iconography.utilities.js';

describe('iconography utilities', () => {
  describe(`${getCSSIconography.name}`, () => {
    it('should create a valid CSS typography object', () => {
      expect(getCSSIconography(defaultIconography)).toMatchSnapshot();
    });
  });
});

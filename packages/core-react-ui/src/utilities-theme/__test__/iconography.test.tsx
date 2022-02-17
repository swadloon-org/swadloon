import { defaultIconography } from '../../default-theme';
import { getCSSIconography } from '../iconography.utilities';

describe('iconography utilities', () => {
  describe(`${getCSSIconography.name}`, () => {
    it('should create a valid CSS typography object', () => {
      expect(getCSSIconography(defaultIconography)).toMatchSnapshot();
    });
  });
});

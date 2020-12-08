import { defaultSizing } from '../design-system/default-sizing';
import { generatedCSSSizing } from './sizing.mock';
import { getCSSSizing } from './sizing.utilities';

describe('shadows utilities', () => {
  describe(`${getCSSSizing.name}`, () => {
    it('should create a valid CSS box-shadow property', () => {
      expect(getCSSSizing(defaultSizing)).toEqual(generatedCSSSizing);
    });
  });
});

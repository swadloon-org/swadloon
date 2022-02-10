import { Sizing } from '@newrade/core-design-system';

import { defaultSizing } from '../../default-theme/default-sizing';
import { getCSSSizingV2 } from '../sizing.utilities';

describe('shadows utilities', () => {
  describe(`${getCSSSizingV2.name}`, () => {
    it('should create a valid CSS box-shadow property', () => {
      const sizing = getCSSSizingV2(defaultSizing) as Sizing<string>;
      expect(sizing).toMatchSnapshot();
    });
  });
});

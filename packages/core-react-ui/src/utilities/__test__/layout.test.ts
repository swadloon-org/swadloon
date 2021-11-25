import { Layout } from '@newrade/core-design-system';

import { defaultLayout } from '../../default-theme/default-layout';
import { getCSSLayout } from '../layout.utilities';

describe('layout utilities', () => {
  describe(`${getCSSLayout.name}`, () => {
    it('should create a valid CSS layout config', () => {
      const layout = getCSSLayout(defaultLayout) as Layout<string>;
      expect(layout).toMatchSnapshot();
    });
  });
});

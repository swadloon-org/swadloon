import { LayoutV2 } from '@newrade/core-design-system';

import { defaultLayout } from '../../default-theme/default-layout';
import { getCSSLayoutV2 } from '../layout.utilities';

describe('layout utilities', () => {
  describe(`${getCSSLayoutV2.name}`, () => {
    it('should create a valid CSS layout config', () => {
      const layout = getCSSLayoutV2(defaultLayout) as LayoutV2<string>;
      expect(layout).toMatchSnapshot();
    });
  });
});

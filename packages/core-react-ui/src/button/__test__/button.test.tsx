import React from 'react';

import { renderTest } from '../../utilities-test/test-render.utilities';
import { Button } from '../button';

describe('the button component', () => {
  it('should render correctly', () => {
    const { container } = renderTest(<Button>Hello world</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

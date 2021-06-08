import React from 'react';
import { renderTest } from '../../utilities/test-render';
import { ButtonV2 } from '../button-v2';

describe('the button component (v2)', () => {
  it('should render correctly', () => {
    const { container } = renderTest(<ButtonV2>Hello world</ButtonV2>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

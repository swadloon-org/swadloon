import React from 'react';

import { renderTest } from '../../utilities-test/test-render.utilities.js';
import { Center } from '../center.js';

describe('props', () => {
  it('should render correctly', () => {
    const maxWidth = '800px';
    const { container } = renderTest(
      <Center
        className="center"
        contentClassName="center-div"
        style={{ color: 'red' }}
        maxWidth={maxWidth}
      >
        Hello world
      </Center>
    );
    const component = container.getElementsByClassName('center')[0];
    const center = component?.getElementsByTagName('div')[1];
    expect(component).toMatchSnapshot();
    expect(center).toHaveTextContent('Hello world');
    expect(center).toHaveClass('center-div');
    // TODO: tried to test custom css variables in style
    // expect(window.getComputedStyle(center).maxWidth).toEqual(maxWidth);
  });
});

import React from 'react';

import { fireEvent } from '@testing-library/dom';

import { renderTest } from '../../utilities-test/test-render.utilities';

import { TestComponent } from './test-component';
import { TestFormComponent } from './test-form-component';

describe(`the Primitive component`, () => {
  it('should have a display name', () => {
    expect((TestComponent as React.NamedExoticComponent).displayName).toBe('TestComponent');
  });

  const testComponentRender = renderTest(
    <TestComponent
      as={'span'}
      id={'test id with no hyphen'}
      className={'test-classname'}
      classNames={['test-classname1']}
      testCustomProp={'hey'}
    ></TestComponent>
  );
  const testComponentElement = testComponentRender.container
    .getElementsByClassName('test-classname')
    .item(0);

  it('should normalize id', () => {
    expect(testComponentElement?.getAttribute('id')).toBe('test-id-with-no-hyphen');
  });

  it('should merge className, classNames and custom props', () => {
    expect(testComponentElement?.getAttribute('data-test-custom-prop')).toBe('hey');
  });

  it('should merge custom props', () => {
    expect(testComponentElement?.getAttribute('data-test-custom-prop')).toBe('hey');
  });

  it('should create an element according to the `as` prop', () => {
    expect(testComponentElement?.tagName).toBe('SPAN');
  });

  it('should pass the event listeners', () => {
    const handleClick = jest.fn();
    const testComponentClickRender = renderTest(
      <TestComponent
        className={'test-click'}
        classNames={['test-classname1']}
        testCustomProp={'hey'}
        onClick={handleClick}
      >
        Click me
      </TestComponent>
    );

    fireEvent.click(testComponentClickRender.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should create an element according to the `AsElement` prop', () => {
    const testAsElementRender = renderTest(
      <TestComponent
        AsElement={<TestComponent testCustomProp={'as-element'}></TestComponent>}
        className={'test-ref'}
        testCustomProp={'hey'}
      ></TestComponent>
    );

    const testRefElement = testAsElementRender.container.getElementsByClassName('test-ref').item(0);
    expect(testRefElement?.getAttribute('data-test-custom-prop')).toBe('hey');
  });

  it('should infer the correct props for form element', () => {
    const handleSubmit = jest.fn();
    const testFormElementRender = renderTest(
      <TestFormComponent
        className={'test-ref'}
        customProp={'hey'}
        onSubmit={handleSubmit}
      ></TestFormComponent>
    );

    const testFormElement = testFormElementRender.container
      .getElementsByClassName('test-ref')
      .item(0);

    expect(testFormElement?.tagName).toBe('FORM');
  });
});

/// <reference types="@newrade/core-types/src/mdx" />

import { spawnSync } from 'child_process';

import React from 'react';

import { render } from '@testing-library/react';

import * as importedModule from './jest-setup.js';

/**
 * @description Test Jest setup itself, e.g. if the Jest test can compile from TypeScript
 * or if they can handle ES6 features like dynamic import()
 */
describe('jest', () => {
  it('should compile typescript', () => {
    const a = 'hello!';
    expect(typeof a).toBe('string');
  });

  it('should compile spread operator', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 2, c: 3 };
    expect({ ...obj1, ...obj2 }).toEqual({ a: 2, b: 2, c: 3 });
  });

  it('should compile dynamic import with .then', () => {
    const lazyImport = import('./jest-setup.js').then((module) => {
      expect(module.jestSetup).toEqual('jestSetup');
    });
  });

  it('should compile dynamic import with await keyword', async () => {
    const lazyImport = await import('./jest-setup.js');
    expect(lazyImport.jestSetup).toEqual('jestSetup');
  });

  it('should correctly import a .js import', () => {
    expect(importedModule.jestSetup).toEqual('jestSetup');
  });

  // it('should compile .md (mdx) files', async () => {
  //   const lazyImport = await import('./test-mdx.md');
  //   expect(lazyImport.default).toEqual('jestSetup');
  // });

  class DummyComponent extends React.Component {
    render() {
      return (
        <>
          <div className={'dummy'} data-testid="hello">
            hello!
          </div>
        </>
      );
    }
  }

  it('should compile a React component', () => {
    const { getByText, getByTestId } = render(<DummyComponent />);
    getByText(/hello/i);
    getByTestId(/hello/i);
  });

  it('should run commands correctly', () => {
    const command = spawnSync(`echo ok`, {
      shell: true,
      stdio: 'pipe',
      env: process.env,
    });

    expect(command.stdout.toString()).toMatch(/ok/);
  });
});

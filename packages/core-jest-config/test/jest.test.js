"use strict";
/// <reference types="@newrade/core-types/lib/mdx" />
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = require("@testing-library/react");
const react_2 = (0, tslib_1.__importDefault)(require("react"));
/**
 * @description Test Jest setup itself, e.g. if the Jest test can compile from TypeScript
 *     or if they can handle ES6 features like dynamic import()
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
        const lazyImport = Promise.resolve().then(() => (0, tslib_1.__importStar)(require('./jest-setup'))).then((module) => {
            expect(module.jestSetup).toEqual('jestSetup');
        });
    });
    it('should compile dynamic import with await keyword', async () => {
        const lazyImport = await Promise.resolve().then(() => (0, tslib_1.__importStar)(require('./jest-setup')));
        expect(lazyImport.jestSetup).toEqual('jestSetup');
    });
    // TODO
    // it('should compile .mdx files', async () => {
    //   const lazyImport = await import('./test-mdx.md');
    //   expect(lazyImport.default).toEqual('jestSetup');
    // });
    class DummyComponent extends react_2.default.Component {
        render() {
            return (react_2.default.createElement(react_2.default.Fragment, null,
                react_2.default.createElement("div", { className: 'dummy', "data-testid": "hello" }, "hello!")));
        }
    }
    it('should compile a React component', () => {
        const { getByText, getByTestId } = (0, react_1.render)(react_2.default.createElement(DummyComponent, null));
        getByText(/hello/i);
        getByTestId(/hello/i);
    });
});
//# sourceMappingURL=jest.test.js.map
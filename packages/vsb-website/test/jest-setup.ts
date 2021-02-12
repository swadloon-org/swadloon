/**
 * https://github.com/testing-library/jest-dom#installation
 */
import '@testing-library/jest-dom';

// dummy export to test dynamic import()
export const jestSetup = 'jestSetup';

jest.setTimeout(10000); // 10 second timeout

/**
 * https://github.com/testing-library/jest-dom#installation
 */
import '@testing-library/jest-dom';

// dummy export to test dynamic import()
export const jestSetup = 'jestSetup';

/**
 * Disable runtime styles
 *
 * @see https://vanilla-extract.style/documentation/setup/#test-environments
 */
import '@vanilla-extract/css/disableRuntimeStyles';

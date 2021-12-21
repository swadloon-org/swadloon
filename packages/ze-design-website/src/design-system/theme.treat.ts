import { createTheme } from 'treat';

import { lightCssTheme, lightTheme } from '@newrade/ze-design-system/src/design-system/theme';

/**
 * Export theme object so they are compiled by treat
 */
export { lightCssTheme as cssTheme, lightTheme as theme };

/**
 * Treat theme reference
 */
export const light = createTheme({ theme: lightTheme, cssTheme: lightCssTheme });

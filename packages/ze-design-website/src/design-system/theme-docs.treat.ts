import { createTheme } from 'treat';

import { defaultCSSTheme, defaultTheme } from '@newrade/core-react-ui/default-theme';

/**
 * Export theme object so they are compiled by treat
 */
export { defaultCSSTheme, defaultTheme };

/**
 * Treat theme reference
 */
export const docsTheme = createTheme({ theme: defaultTheme, cssTheme: defaultCSSTheme });

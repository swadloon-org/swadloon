import { createTheme } from 'treat';
import { defaultTheme, defaultCSSTheme } from '@newrade/core-react-ui/default-theme';

/**
 * Export theme object so they are compiled by treat
 */
export { defaultTheme, defaultCSSTheme };

/**
 * Treat theme reference
 */
export const docsTheme = createTheme({ theme: defaultTheme, cssTheme: defaultCSSTheme });

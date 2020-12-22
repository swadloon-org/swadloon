import { defaultCSSTheme, defaultTheme } from '@newrade/core-react-ui';
import { createTheme } from 'treat';

export const theme = defaultTheme;
export const cssTheme = defaultCSSTheme;

/**
 * Treat theme reference
 */
export const light = createTheme({ theme: defaultTheme, cssTheme: defaultCSSTheme });

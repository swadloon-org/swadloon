import { createTheme } from 'treat';
import { cssTheme, theme } from '@newrade/ze-design-system/lib/design-system/theme';

/**
 * Export theme object so they are compiled by treat
 */
export { cssTheme, theme };

/**
 * Treat theme reference
 */
export const light = createTheme({ theme, cssTheme });

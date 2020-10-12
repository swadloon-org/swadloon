import { createTheme } from 'treat';
import { Theme } from './css-design-system';
import { defaultCSSTheme, defaultTheme } from './default-theme';

export const light = createTheme({ theme: defaultTheme, cssTheme: defaultCSSTheme } as Theme);

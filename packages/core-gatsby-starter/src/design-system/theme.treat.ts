import { defaultCSSTheme, defaultTheme, Theme } from '@newrade/core-react-ui';
import { createTheme } from 'treat';

export const light = createTheme({ theme: defaultTheme, cssTheme: defaultCSSTheme } as Theme);

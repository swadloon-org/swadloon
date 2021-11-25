import React, { ReactNode } from 'react';

import { Theme } from '../design-system';
import { logError } from '../utilities/log.utilities';

import { useIsSSR } from './use-is-ssr';

/**
 * Context to hold the theme's tokens
 */
export const TreatThemeContext = React.createContext<Theme | null>(null);

/**
 * Threat theme provider to pass the tokens value to children
 */
export const TreatThemeProvider = ({ theme, children }: { theme: Theme; children: ReactNode }) => (
  <TreatThemeContext.Provider value={theme}>{children}</TreatThemeContext.Provider>
);

/**
 * Hook to consume the theme tokens
 */
export function useTreatTheme(): Theme {
  const value = React.useContext(TreatThemeContext);
  const isSSR = useIsSSR();
  if (!value) {
    logError(`no treat theme provided, ssr: ${isSSR}`);
    throw new Error(`no treat theme provided, isSSR: ${isSSR}`);
  }
  const { theme, cssTheme } = value;
  return {
    theme,
    cssTheme,
  };
}

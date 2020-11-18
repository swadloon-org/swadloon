import React, { ReactNode } from 'react';
import { Theme } from '@newrade/core-react-ui';

/**
 * Context to hold the theme's tokens
 */
export const TreatThemeContext = React.createContext<Theme>(null);

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
  if (!value) {
    throw new Error('no treat theme provided');
  }
  const { theme, cssTheme } = value;
  return {
    theme,
    cssTheme,
  };
}

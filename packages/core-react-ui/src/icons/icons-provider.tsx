import React, { ReactNode } from 'react';
import { Theme } from '../design-system/css-design-system';

/**
 * Context to hold the theme's tokens
 */
export const IconsContext = React.createContext<Theme | null>(null);

/**
 * Threat theme provider to pass the tokens value to children
 */
export const IconsProvider = ({ theme, children }: { theme: Theme; children: ReactNode }) => (
  <IconsContext.Provider value={theme}>{children}</IconsContext.Provider>
);

/**
 * Hook to consume the theme tokens
 */
export function useIcons(): Theme {
  const value = React.useContext(IconsContext);
  if (!value) {
    throw new Error('no treat theme provided');
  }
  const { theme, cssTheme } = value;
  return {
    theme,
    cssTheme,
  };
}

import React, { ReactNode } from 'react';

import { CSSRuntimeThemeConfig, CSSThemeProviderConfig } from '../design-system/css-theme-config';

type CSSThemeContextType = {
  /**
   * The static configuration object set for each application
   */
  config: CSSThemeProviderConfig;
  /**
   * The selected theme
   */
  selected?: CSSRuntimeThemeConfig;
};

/**
 * Context
 */
export const CSSThemeContext = React.createContext<CSSThemeContextType | null>(null);

/**
 * Provider for CSSThemeContext
 */
export const CSSThemeProvider = ({
  config,
  children,
}: {
  config: CSSThemeContextType;
  children: ReactNode;
}) => <CSSThemeContext.Provider value={config}>{children}</CSSThemeContext.Provider>;

/**
 * Hook to consume the context's value
 */
export function useCSSTheme(): CSSThemeContextType {
  const value = React.useContext(CSSThemeContext);

  if (!value) {
    throw new Error('CSSThemeContext must be defined');
  }

  return value;
}

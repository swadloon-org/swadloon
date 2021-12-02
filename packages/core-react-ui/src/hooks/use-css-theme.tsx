import React, { ReactNode, useEffect } from 'react';

import { defaultTheme } from '../default-theme';
import { CSSRuntimeThemeConfig, CSSThemeProviderConfig } from '../design-system/css-theme-config';
import { useIsSSR } from '..';

type CSSThemeContextType = {
  /**
   * The static configuration object set for each application
   */
  config: CSSThemeProviderConfig;
  /**
   * The selected theme
   */
  selected?: CSSRuntimeThemeConfig;
  /**
   * Callback to change the theme
   */
  onChangeTheme: (themeName: string) => void;
};

type CSSThemeContextOptions = {
  /**
   * Option to apply the selected theme's classnames to the :root element (html)
   * @default false
   */
  applyThemeToRootElement: boolean;
};

export const defaultCSSThemeConfig: CSSThemeProviderConfig = {
  autoDetect: true,
  themes: [
    {
      name: defaultTheme.name,
      colorScheme: defaultTheme.colorScheme,
      classNames: {},
      default: true,
    },
  ],
};

/**
 * Context
 */
export const CSSThemeContext = React.createContext<CSSThemeContextType | null>(null);

CSSThemeContext.displayName = 'CSSThemeContext';

/**
 * Provider for CSSThemeContext
 */
export const CSSThemeProvider = ({
  value,
  options,
  children,
}: {
  value: CSSThemeContextType;
  options: CSSThemeContextOptions;
  children: ReactNode;
}) => {
  const isSSR = useIsSSR();
  const config = value.config;
  const themes = value.config.themes;
  const defaultTheme = config.themes.find((theme) => theme.default);

  useEffect(() => {
    if (!options.applyThemeToRootElement) {
      return;
    }

    if (isSSR) {
      return;
    }

    if (!value.selected?.classNames) {
      return;
    }
    const themeClassNamesToAdd = Object.values(value.selected.classNames);
    const rootElement = window.document.documentElement;
    rootElement.classList.forEach((existingClassName) =>
      rootElement.classList.remove(existingClassName)
    );
    if (!themeClassNamesToAdd.length) {
      return;
    }
    themeClassNamesToAdd.forEach((className) => {
      rootElement.classList.add(className);
    });
  }, [isSSR, options.applyThemeToRootElement, value.selected?.classNames]);

  return <CSSThemeContext.Provider value={value}>{children}</CSSThemeContext.Provider>;
};

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

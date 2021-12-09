import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import { GLOBAL_CSS_THEME, LOCAL_STORAGE_CSS_THEME_PROP } from '@newrade/core-gatsb-config/config';

import { defaultTheme } from '../default-theme';
import { CSSRuntimeThemeConfig, CSSThemeProviderConfig } from '../design-system/css-theme-config';
import { useIsSSR } from '../hooks/use-is-ssr';
import { debugInstance, NS } from '../utilities/log.utilities';

import { useFirstRender } from './use-first-render.hook';
import { usePreferColorScheme } from './use-prefer-color-scheme';

const log = debugInstance(`${NS}:css-theme`);
const logWarn = debugInstance(`${NS}:css-theme:warn`);
const logError = debugInstance(`${NS}:css-theme:error`);

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
  onChangeTheme?: (themeName: string) => void;
};

type CSSThemeContextOptions = {
  /**
   * Option to apply the selected theme's classnames to the :root element (html)
   * @default false
   */
  applyThemeToRootElement?: boolean;
  /**
   * Option to automatically save the last selected theme in local storage
   * @default false
   */
  syncToLocalStorage?: boolean;
};

export const defaultOptions: CSSThemeContextOptions = {
  applyThemeToRootElement: false,
  syncToLocalStorage: false,
};

export const defaultCSSThemeConfig: CSSThemeProviderConfig = {
  autoDetect: true,
  themes: [
    {
      name: defaultTheme.name,
      colorScheme: defaultTheme.colorScheme,
      className: GLOBAL_CSS_THEME.LIGHT,
      classNames: {},
      default: true,
    },
  ],
};

/**
 * Context
 */
export const CSSThemeContext = React.createContext<CSSThemeContextType | undefined>(undefined);

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
  options?: CSSThemeContextOptions;
  children: ReactNode;
}) => {
  const { applyThemeToRootElement, syncToLocalStorage } = { ...defaultOptions, ...options };
  const isSSR = useIsSSR();
  const { colorScheme } = usePreferColorScheme();

  /**
   * Check if theme preference is already set in local storage
   */
  const localStorageThemeName = useRef<string | null>(null);
  localStorageThemeName.current = isSSR
    ? null
    : window.localStorage.getItem(LOCAL_STORAGE_CSS_THEME_PROP);

  /**
   * Init internal context value
   */
  const [internalValue, setInternalValue] = useState<CSSThemeContextType | undefined>(
    value ? value : undefined
  );

  /**
   * Default handler for selected theme change
   */

  const themes = internalValue?.config.themes;
  const selectedTheme = internalValue?.selected;

  const handleChangeThemeName = useCallback(
    function handleChangeThemeName(themeName: string) {
      log(`changing theme to: ${themeName}`);
      const foundTheme = themes?.find((theme) => theme.name === themeName);
      if (foundTheme) {
        if (syncToLocalStorage) {
          window.localStorage.setItem(LOCAL_STORAGE_CSS_THEME_PROP, foundTheme.className);
        }
        setInternalValue({ ...(internalValue as CSSThemeContextType), selected: foundTheme });
      }
    },
    [syncToLocalStorage, internalValue, themes]
  );

  //
  // if a change handler is not set, use the default implementation
  //
  if (internalValue && !internalValue.onChangeTheme) {
    internalValue.onChangeTheme = handleChangeThemeName;
  }

  /**
   * Handle user's color scheme preference changes
   */
  useEffect(() => {
    //
    // only update if there are no selectedTheme
    //
    if (!selectedTheme) {
      return;
    }
    if (colorScheme !== selectedTheme.colorScheme) {
      log(`user color scheme is: ${colorScheme}`);
      const foundThemeForColorSceme = themes?.find((theme) => theme.colorScheme === colorScheme);
      if (foundThemeForColorSceme) {
        if (
          internalValue?.selected &&
          internalValue.selected.name !== foundThemeForColorSceme.name
        ) {
          log(`user color scheme is: ${colorScheme}`);
          setInternalValue({ ...internalValue, selected: foundThemeForColorSceme });
          return;
        }
      }
    }
  }, [colorScheme]);

  /**
   * Sync the external value with the internal's
   */
  useEffect(() => {
    if (value) {
      if (!internalValue) {
        log(`initial css theme context set`);
        setInternalValue(value);
      }
    }
  }, [value, handleChangeThemeName]);

  /**
   * Sync the current value from localstorage
   */
  useEffect(() => {
    if (isSSR) {
      return;
    }

    const foundTheme = themes?.find((theme) => theme.className === localStorageThemeName.current);

    if (
      internalValue?.selected &&
      internalValue.selected.className !== localStorageThemeName.current
    ) {
      if (foundTheme) {
        log(`setting selected theme to: ${foundTheme.name}`);
        setInternalValue({ ...internalValue, selected: foundTheme });
      }
      return;
    }

    if (!internalValue?.selected) {
      log(`setting initial selected theme to: ${foundTheme?.name}`);
      setInternalValue({ ...(internalValue as CSSThemeContextType), selected: foundTheme });
    }
  }, [isSSR, localStorageThemeName.current]);

  /**
   * Sync the selected theme with external changes
   */
  useEffect(() => {
    //
    // only update if the external selected is defined AND different from the internal one
    //
    if (!value.selected) {
      return;
    }

    if (value.selected.name !== internalValue?.selected?.name) {
      setInternalValue({ ...value, selected: value.selected });
      return;
    }

    if (!internalValue?.selected) {
      setInternalValue({ ...internalValue, selected: value.selected });
    }
  }, [internalValue, value, value?.selected]);

  /**
   * Handle context changes
   */
  useEffect(() => {
    if (!applyThemeToRootElement) {
      return;
    }

    if (isSSR) {
      return;
    }

    if (!internalValue?.selected?.classNames) {
      return;
    }
    const globalThemeClassNameToAdd = internalValue.selected.className;
    const globalThemeClassNamesToRemove = themes
      ?.filter((theme) => theme.name !== selectedTheme?.name)
      .map((theme) => theme.className);
    const themeClassNamesToAdd = Object.values(internalValue.selected.classNames);
    const rootElement = window.document.documentElement;

    //
    // clean up classes from other themes
    //
    globalThemeClassNamesToRemove?.forEach((themeClassNameToRemove) => {
      if (rootElement.classList.contains(themeClassNameToRemove)) {
        rootElement.classList.remove(themeClassNameToRemove);
      }
    });
    //
    // add classname from selected theme
    //
    if (!rootElement.classList.contains(globalThemeClassNameToAdd)) {
      log(`adding className: ${globalThemeClassNameToAdd}`);
      rootElement.classList.add(globalThemeClassNameToAdd);
    }

    if (!themeClassNamesToAdd.length) {
      return;
    }
  }, [
    isSSR,
    applyThemeToRootElement,
    themes,
    internalValue?.selected?.className,
    internalValue?.selected?.classNames,
    selectedTheme?.name,
    value?.selected,
  ]);

  return <CSSThemeContext.Provider value={internalValue}>{children}</CSSThemeContext.Provider>;
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

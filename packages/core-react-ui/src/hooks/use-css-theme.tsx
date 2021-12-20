import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import { defaultTheme } from '../default-theme';
import { CSSRuntimeThemeConfig, CSSThemeProviderConfig } from '../design-system/css-theme-config';
import {
  GLOBAL_CSS_THEME_SCHEME,
  LOCAL_STORAGE_CSS_THEME_NAME_PROP,
  LOCAL_STORAGE_CSS_THEME_SCHEME_PROP,
} from '../global/global-theme-classnames';
import { useIsSSR } from '../hooks/use-is-ssr';
import { debugInstance, NS } from '../utilities/log.utilities';

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
  themes: [
    {
      name: defaultTheme.name,
      colorScheme: defaultTheme.colorScheme,
      className: 'global-css-theme-ze',
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
  const localStorageThemeScheme = useRef<GLOBAL_CSS_THEME_SCHEME | null>(null);
  localStorageThemeScheme.current = isSSR
    ? null
    : (window.localStorage.getItem(LOCAL_STORAGE_CSS_THEME_SCHEME_PROP) as GLOBAL_CSS_THEME_SCHEME);
  const localStorageThemeName = useRef<string | null>(null);
  localStorageThemeName.current = isSSR
    ? null
    : window.localStorage.getItem(LOCAL_STORAGE_CSS_THEME_NAME_PROP);

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
      const foundThemeSchemeClassName =
        foundTheme && foundTheme.colorScheme === 'dark'
          ? GLOBAL_CSS_THEME_SCHEME.DARK
          : GLOBAL_CSS_THEME_SCHEME.LIGHT;
      if (foundTheme) {
        if (syncToLocalStorage) {
          window.localStorage.setItem(
            LOCAL_STORAGE_CSS_THEME_SCHEME_PROP,
            foundThemeSchemeClassName
          );
          window.localStorage.setItem(LOCAL_STORAGE_CSS_THEME_NAME_PROP, foundTheme.className);
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

    const foundThemeByName = themes?.find(
      (theme) => theme.className === localStorageThemeName.current
    );
    const foundThemeByScheme = themes?.find((theme) => {
      if (localStorageThemeScheme.current === GLOBAL_CSS_THEME_SCHEME.LIGHT) {
        return theme.colorScheme === 'light';
      }
      if (localStorageThemeScheme.current === GLOBAL_CSS_THEME_SCHEME.DARK) {
        return theme.colorScheme === 'dark';
      }
    });

    log(`loaded theme name from localstorage got: ${foundThemeByName?.name}`);
    log(`loaded theme scheme from localstorage got: ${foundThemeByScheme?.name}`);

    if (
      internalValue?.selected &&
      internalValue.selected.className !== localStorageThemeScheme.current
    ) {
      if (foundThemeByScheme) {
        log(`setting selected theme to: ${foundThemeByScheme.name}`);
        setInternalValue({ ...internalValue, selected: foundThemeByScheme });
      }
      return;
    }

    if (!internalValue?.selected) {
      //
      // if we have a previous theme set in local storage, and it is found in the themes list, we set it as selected
      //
      if (foundThemeByName) {
        log(`setting theme to: ${foundThemeByName.name}`);
        setInternalValue({ ...(internalValue as CSSThemeContextType), selected: foundThemeByName });
        return;
      }

      //
      // if we don't have a previous theme set in local storage, we take the first theme that matches the user's color scheme
      //

      log(`no previous theme selected, defaulting to : ${foundThemeByScheme?.name}`);
      setInternalValue({ ...(internalValue as CSSThemeContextType), selected: foundThemeByScheme });
    }
  }, [isSSR, localStorageThemeName.current, localStorageThemeScheme.current]);

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
   * Handle context changes in DOM
   */
  useEffect(() => {
    if (!applyThemeToRootElement) {
      return;
    }

    if (isSSR) {
      return;
    }

    if (!internalValue?.selected?.className) {
      return;
    }
    const globalThemeClassNameToAdd = internalValue.selected.className;
    const globalThemeClassNamesToRemove = themes
      ?.filter((theme) => theme.name !== selectedTheme?.name)
      .map((theme) => theme.className);
    const rootElement = window.document.documentElement;

    //
    // update the global theme scheme classname
    //
    if (internalValue.selected.colorScheme === 'light') {
      if (rootElement.classList.contains(GLOBAL_CSS_THEME_SCHEME.DARK)) {
        rootElement.classList.remove(GLOBAL_CSS_THEME_SCHEME.DARK);
      }
      rootElement.classList.add(GLOBAL_CSS_THEME_SCHEME.LIGHT);
    }
    if (internalValue.selected.colorScheme === 'dark') {
      if (rootElement.classList.contains(GLOBAL_CSS_THEME_SCHEME.LIGHT)) {
        rootElement.classList.remove(GLOBAL_CSS_THEME_SCHEME.LIGHT);
      }
      rootElement.classList.add(GLOBAL_CSS_THEME_SCHEME.DARK);
    }
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
  }, [
    isSSR,
    applyThemeToRootElement,
    themes,
    internalValue?.selected?.colorScheme,
    internalValue?.selected?.className,
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

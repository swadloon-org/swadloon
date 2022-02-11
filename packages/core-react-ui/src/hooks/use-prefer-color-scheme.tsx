import React, { useEffect } from 'react';

import { COLOR_SCHEME } from '@newrade/core-design-system';

import { useIsSSR } from './use-is-ssr';

export function usePreferColorScheme() {
  const isSSR = useIsSSR();
  const [colorScheme, setColorScheme] = React.useState<COLOR_SCHEME | undefined>(undefined);

  useEffect(() => {
    if (isSSR) {
      return;
    }
    const updatedColorScheme = getThemeForActiveScheme(query().matches);
    if (colorScheme !== updatedColorScheme) {
      setColorScheme(updatedColorScheme);
    }
  }, [isSSR]);

  useEffect(() => {
    if (isSSR) {
      return;
    }

    const mediaQuery = query();
    const handleChangeColorScheme = (event: MediaQueryListEvent) => {
      const updatedColorScheme = getThemeForActiveScheme(event.matches);
      if (colorScheme !== updatedColorScheme) {
        setColorScheme(updatedColorScheme);
      }
    };

    mediaQuery.addEventListener('change', handleChangeColorScheme);
    return () => {
      mediaQuery.removeEventListener('change', handleChangeColorScheme);
    };
  }, [isSSR]);

  return {
    colorScheme,
  };

  function query() {
    return window.matchMedia(`(prefers-color-scheme: dark)`);
  }

  function getThemeForActiveScheme(matches: boolean): COLOR_SCHEME {
    return matches ? COLOR_SCHEME.DARK : COLOR_SCHEME.LIGHT;
  }
}

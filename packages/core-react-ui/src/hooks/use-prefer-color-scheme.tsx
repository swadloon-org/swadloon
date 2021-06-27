import React from 'react';

export const usePreferColorScheme = () => {
  const [colorScheme, setColorScheme] = React.useState<'light' | 'dark'>(
    getThemeForActiveScheme(query().matches)
  );

  React.useEffect(() => {
    const q = query();
    const handleChangeColorScheme = (event: MediaQueryListEvent) => {
      setColorScheme(getThemeForActiveScheme(event.matches));
    };

    if (typeof window === 'undefined') {
      return;
    }

    q.addEventListener('change', handleChangeColorScheme);
    return () => {
      q.removeEventListener('change', handleChangeColorScheme);
    };
  }, []);

  return {
    colorScheme,
  };

  function query() {
    return window.matchMedia(`(prefers-color-scheme: dark)`);
  }

  function getThemeForActiveScheme(matches: boolean) {
    return matches ? 'dark' : 'light';
  }
};

import { useEffect, useState } from 'react';
import { useIsSSR } from './use-is-ssr';

export function usePageVisibility() {
  const isSSR = useIsSSR();
  const [pageVisible, setPageVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleVisibilityChange = (event: Event) => {
      if (isSSR) {
        setPageVisible(true);
        return;
      }
      setPageVisible(!window.document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isSSR]);

  return {
    pageVisible,
  };
}

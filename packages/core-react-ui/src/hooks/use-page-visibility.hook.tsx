import { useEffect, useState } from 'react';

export function usePageVisibility() {
  const [pageVisible, setPageVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleVisibilityChange = (event: Event) => {
      setPageVisible(!window.document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return {
    pageVisible,
  };
}

import { useEffect, useState } from 'react';

import { useIsSSR } from './use-is-ssr';

export const useNetworkStatus = () => {
  const isSSR = useIsSSR();

  const [status, setStatus] = useState(isSSR ? true : window.navigator.onLine);
  const [offlineAt, setOfflineAt] = useState<Date | undefined>(undefined);

  useEffect(() => {
    const handleOnline = () => {
      setStatus(true);
      setOfflineAt(undefined);
    };

    const handleOffline = () => {
      setStatus(false);
      setOfflineAt(new Date());
    };

    if (isSSR) {
      return;
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [isSSR]);

  return {
    isOnline: status,
    offlineAt,
  };
};

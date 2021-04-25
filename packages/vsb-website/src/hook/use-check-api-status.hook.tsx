import { API_RESPONSE_STATUS } from '@newrade/core-common';
import { useNetworkStatus, usePageVisibility } from '@newrade/core-react-ui';
import { API_STATUS_CLINIKO, CreatePatientAPIResponseBody } from '@newrade/vsb-common';
import { useEffect, useState } from 'react';
import { log, logError } from '../admin/admin';

/**
 * Check for API status on an interval
 */
export function useCheckAPIStatus() {
  const { isOnline } = useNetworkStatus();
  const { pageVisible } = usePageVisibility();
  const [apiStatus, setApiStatus] = useState<'en ligne' | 'hors ligne' | undefined>(undefined);

  useEffect(() => {
    function checkApiStatus() {
      fetch(API_STATUS_CLINIKO)
        .then((response) => response.json())
        .then((body: CreatePatientAPIResponseBody) => {
          if (body.status === API_RESPONSE_STATUS.SUCCESS) {
            setApiStatus('en ligne');
          }
        })
        .catch((error) => {
          setApiStatus('hors ligne');
          logError('api offline');
        });
    }

    try {
      log('checking for api status');
      checkApiStatus();

      const interval = window.setInterval(() => {
        if (isOnline && pageVisible) {
          checkApiStatus();
        }
      }, 10000);
      return () => {
        window.clearInterval(interval);
      };
    } catch (error) {
      setApiStatus('hors ligne');
      logError('api offline');
    }
  }, [setApiStatus, pageVisible, isOnline]);

  return [apiStatus];
}

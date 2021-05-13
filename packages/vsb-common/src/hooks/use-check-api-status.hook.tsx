import { API_RESPONSE_STATUS } from '@newrade/core-common';
import { useNetworkStatus, usePageVisibility } from '@newrade/core-react-ui';
import debug from 'debug';
import { useEffect, useState } from 'react';
import { API_STATUS_CLINIKO } from '../constant/api-routes.constants';
import { CreatePatientAPIResponseBody } from '../patient/patient.api';

export const log = debug('newrade:vsb-common');
const logWarn = log.extend('warn');
export const logError = log.extend('error');

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

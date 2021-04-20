import { API_RESPONSE_STATUS } from '@newrade/core-common';
import { HEADING } from '@newrade/core-design-system';
import {
  Center,
  CommonComponentProps,
  Heading,
  Hr,
  OnlineIndicator,
  Stack,
  useNetworkStatus,
  usePageVisibility,
  useTreatTheme,
} from '@newrade/core-react-ui';
import { API_STATUS_CLINIKO, CreatePatientAPIResponseBody } from '@newrade/vsb-common';
import { RouteComponentProps } from '@reach/router';
import debug from 'debug';
import React, { useEffect, useState } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './admin.treat';

type Props = CommonComponentProps & RouteComponentProps & {};

const log = debug('newrade:vsb-admin');
const logError = log.extend('error');

export const Admin: React.FC<Props> = ({ id, style, className, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();

  const { isOnline } = useNetworkStatus();
  const { pageVisible } = usePageVisibility();
  const [apiStatus, setApiStatus] = useState<'en ligne' | 'hors ligne' | undefined>(undefined);

  useCheckAPIStatus(isOnline, pageVisible, setApiStatus);

  return (
    <Center>
      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>Administration</Heading>

        <Stack gap={[cssTheme.sizing.var.x3]}>
          <Heading variant={HEADING.h4}>État du système</Heading>

          <OnlineIndicator status={apiStatus === 'en ligne' ? 'online' : 'offline'}>
            système : {apiStatus || 'en chargement...'}
          </OnlineIndicator>
        </Stack>

        <Hr />

        <Heading variant={HEADING.h3}>Listes de patients</Heading>
      </Stack>
    </Center>
  );
};

function useCheckAPIStatus(
  isOnline: boolean,
  pageVisible: boolean,
  setApiStatus: React.Dispatch<React.SetStateAction<'en ligne' | 'hors ligne' | undefined>>
) {
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
}

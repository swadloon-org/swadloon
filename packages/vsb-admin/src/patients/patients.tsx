import { useAuth0 } from '@auth0/auth0-react';
import { API_RESPONSE_STATUS } from '@newrade/core-common';
import { HEADING } from '@newrade/core-design-system';
import {
  Center,
  CommonComponentProps,
  Heading,
  Stack,
  useNetworkStatus,
  usePageVisibility,
  useTreatTheme,
} from '@newrade/core-react-ui';
import {
  API_LIST_PATIENTS_ROUTE,
  GetNewPatientsAPIResponseBody,
  PatientModelAdmin,
} from '@newrade/vsb-common';
import debug from 'debug';
import React, { useEffect, useRef, useState } from 'react';
import { useStyles } from 'react-treat';
import { PatientsTable } from './patients-table';
import * as styleRefs from './patients.treat';

export const log = debug('newrade:vsb-admin');
const logWarn = log.extend('warn');
export const logError = log.extend('error');

type Props = CommonComponentProps;

export const Patients: React.FC<Props> = ({ id, style, className, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();

  const [patients, setPatients] = useState<PatientModelAdmin[]>([]);
  const [result, setResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { getAccessTokenSilently } = useAuth0();

  const { isOnline } = useNetworkStatus();
  const { pageVisible } = usePageVisibility();
  const intervalRef = useRef<null | number>(null);

  useEffect(() => {
    function getPatients() {
      setIsLoading(true);
      getAccessTokenSilently({
        audience: `https://api.vasectomie-pierre-boucher.ca/`,
        scope: 'read:current_user read:patients',
      })
        .then((token) => {
          return window.fetch(API_LIST_PATIENTS_ROUTE, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        })
        .then((response) => response.json())
        .then((body: GetNewPatientsAPIResponseBody) => {
          if (body.status === API_RESPONSE_STATUS.ERROR) {
            setResult(body.message);
            return;
          }

          if (!body.payload) {
            logWarn('no new patients received');
            return;
          }

          setPatients(body.payload);
          setIsLoading(false);
        })
        .catch((error) => {
          setPatients([]);
          setResult(error.message);
          logError('error while retrieving new patients');
          setIsLoading(false);
        });
    }

    try {
      log('refreshing list');
      getPatients();

      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }

      intervalRef.current = window.setInterval(() => {
        getPatients();
      }, 15 * 60 * 1000);
      return () => {
        if (intervalRef.current) {
          window.clearInterval(intervalRef.current);
        }
      };
    } catch (error) {
      setPatients([]);
      setResult(error.message);
      logError('error while retrieving patients');
      setIsLoading(false);
    }
  }, [pageVisible, isOnline, getAccessTokenSilently]);

  return (
    <Center>
      <Stack gap={[cssTheme.sizing.var.x4]}>
        <Heading variant={HEADING.h2}>Listes de patients</Heading>

        <PatientsTable patients={patients} isLoading={isLoading} />
      </Stack>
    </Center>
  );
};

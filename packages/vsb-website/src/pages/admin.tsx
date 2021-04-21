import { API_RESPONSE_STATUS } from '@newrade/core-common';
import { ButtonSize, HEADING, Variant } from '@newrade/core-design-system';
import {
  Button,
  Center,
  Cluster,
  CommonComponentProps,
  Heading,
  Hr,
  Link,
  OnlineIndicator,
  Paragraph,
  Stack,
  useNetworkStatus,
  usePageVisibility,
  useTreatTheme,
} from '@newrade/core-react-ui';
import {
  API_LIST_PATIENTS_ROUTE,
  API_STATUS_CLINIKO,
  CreatePatientAPIResponseBody,
  GetNewPatientsAPIResponseBody,
  PatientModelAdmin,
} from '@newrade/vsb-common';
import { RouteComponentProps } from '@reach/router';
import debug from 'debug';
import React, { useEffect, useState } from 'react';
// @ts-ignore
import { useTable } from 'react-table';
import { useStyles } from 'react-treat';
import * as styleRefs from './admin.treat';

type Props = CommonComponentProps & RouteComponentProps & {};

const log = debug('newrade:vsb-admin');
const logWarn = log.extend('warn');
const logError = log.extend('error');

export const Admin: React.FC<Props> = ({ id, style, className, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();

  const { isOnline } = useNetworkStatus();
  const { pageVisible } = usePageVisibility();
  const [apiStatus, setApiStatus] = useState<'en ligne' | 'hors ligne' | undefined>(undefined);
  const [newPatients, setNewPatients] = useState<PatientModelAdmin[]>([]);

  useCheckAPIStatus(isOnline, pageVisible, setApiStatus);

  useEffect(() => {
    log('retrieving new patients');

    try {
      fetch(API_LIST_PATIENTS_ROUTE)
        .then((response) => response.json())
        .then((body: GetNewPatientsAPIResponseBody) => {
          if (body.status === API_RESPONSE_STATUS.SUCCESS) {
            if (!body.payload) {
              logWarn('no new patients received');
              return;
            }

            setNewPatients(body.payload);
          }
        })
        .catch((error) => {
          setNewPatients([]);
          logError('error while retrieving new patients');
        });
    } catch (error) {
      setNewPatients([]);
      logError('error while retrieving new patients');
    }
  }, []);

  const data = React.useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

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

        <Stack gap={[cssTheme.sizing.var.x2]}>
          {newPatients.map((patient) => {
            return (
              <Cluster key={patient.id} gap={[cssTheme.sizing.var.x3]}>
                <Link
                  href={`https://clinique-dr-pierre-boucher.ca1.cliniko.com/patients/${patient.id}`}
                  target={'_blank'}
                >
                  {patient.id}
                </Link>

                <Paragraph>
                  {patient.firstName} {patient.lastName}
                </Paragraph>

                <Link href={`mailto:${patient.email}`}>{patient.email}</Link>

                <Cluster gap={[cssTheme.sizing.var.x1]}>
                  <Link href={`tel:${patient.patientPhoneNumber}`}>{patient.patientPhoneNumber}</Link>
                  <Button variant={Variant.secondary} size={ButtonSize.xsmall}>
                    Copy
                  </Button>
                </Cluster>
              </Cluster>
            );
          })}
        </Stack>
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

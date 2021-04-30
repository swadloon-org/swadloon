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
  useTreatTheme,
} from '@newrade/core-react-ui';
import { API_LIST_PATIENTS_ROUTE, GetNewPatientsAPIResponseBody, PatientModelAdmin } from '@newrade/vsb-common';
import { RouteComponentProps } from '@reach/router';
import debug from 'debug';
import React, { useEffect, useState } from 'react';
// @ts-ignore
import { useTable } from 'react-table';
import { useStyles } from 'react-treat';
import { useCheckAPIStatus } from '../hook/use-check-api-status.hook';
import * as styleRefs from './admin.treat';

type Props = CommonComponentProps & RouteComponentProps & {};

export const log = debug('newrade:vsb-admin');
const logWarn = log.extend('warn');
export const logError = log.extend('error');

export const Admin: React.FC<Props> = ({ id, style, className, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();
  const [patients, setPatients] = useState<PatientModelAdmin[]>([]);
  const [result, setResult] = useState<string>('');
  const [apiStatus] = useCheckAPIStatus();

  useEffect(() => {
    log('retrieving new patients');

    try {
      fetch(API_LIST_PATIENTS_ROUTE)
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
        })
        .catch((error) => {
          setPatients([]);
          setResult(error.message);
          logError('error while retrieving new patients');
        });
    } catch (error) {
      setPatients([]);
      setResult(error.message);
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

        <Hr />

        <Heading variant={HEADING.h3}>Listes de patients</Heading>

        {result}

        <Stack gap={[cssTheme.sizing.var.x2]}>
          {patients.map((patient) => {
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

                <Paragraph>{patient.status}</Paragraph>

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

        <Stack gap={[cssTheme.sizing.var.x3]}>
          <Heading variant={HEADING.h4}>État du système</Heading>

          <OnlineIndicator status={apiStatus === 'en ligne' ? 'online' : 'offline'}>
            système : {apiStatus || 'en chargement...'}
          </OnlineIndicator>
        </Stack>
      </Stack>
    </Center>
  );
};

import { useAuth0 } from '@auth0/auth0-react';
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
  Paragraph,
  Stack,
  useTreatTheme,
} from '@newrade/core-react-ui';
import {
  API_LIST_PATIENTS_ROUTE,
  GetNewPatientsAPIResponseBody,
  PatientModelAdmin,
} from '@newrade/vsb-common';
import debug from 'debug';
import React, { useEffect, useState } from 'react';
import { useStyles } from 'react-treat';
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

  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
  //   columns,
  //   data,
  // });

  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    log('retrieving new patients');

    try {
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
                  <Link href={`tel:${patient.patientPhoneNumber}`}>
                    {patient.patientPhoneNumber}
                  </Link>
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

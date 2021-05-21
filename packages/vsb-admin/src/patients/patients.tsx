import { useAuth0 } from '@auth0/auth0-react';
import { API_RESPONSE_STATUS } from '@newrade/core-common';
import {
  ButtonIcon,
  ButtonSize,
  HEADING,
  LinkIcon,
  LinkVariant,
  PARAGRAPH_SIZE,
  Variant,
} from '@newrade/core-design-system';
import {
  Button,
  Center,
  Cluster,
  CommonComponentProps,
  Heading,
  InputLabel,
  InputSelect,
  InputText,
  InputWrapper,
  Label,
  Link,
  Paragraph,
  Stack,
  useNetworkStatus,
  usePageVisibility,
  useTreatTheme,
} from '@newrade/core-react-ui';
import {
  API_LIST_PATIENTS_ROUTE,
  clinikoPatientVasecStatus,
  CLINIKO_PATIENT_VASEC_STATUS,
  CLINIKO_PHONE_TYPE,
  GetNewPatientsAPIResponseBody,
  PatientModelAdmin,
} from '@newrade/vsb-common';
import { IoCopyOutline } from '@react-icons/all-files/io5/IoCopyOutline';
import { IoRefreshOutline } from '@react-icons/all-files/io5/IoRefreshOutline';
import copy from 'copy-to-clipboard';
import { formatRelative, parseISO } from 'date-fns';
import frCA from 'date-fns/locale/fr-CA';
import debug from 'debug';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ColumnType, RowType, useTable } from 'react-final-table';
import { useStyles } from 'react-treat';
import { PatientStatusTag } from './patient-status-tag';
import * as styleRefsTable from './patients-table.treat';
import * as styleRefs from './patients.treat';

export const log = debug('newrade:vsb-admin');
const logWarn = log.extend('warn');
export const logError = log.extend('error');

type Props = CommonComponentProps;

export const Patients: React.FC<Props> = ({ id, style, className, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const { styles: stylesTable } = useStyles(styleRefsTable);
  const { theme, cssTheme } = useTreatTheme();

  const [patients, setPatients] = useState<PatientModelAdmin[]>([]);
  const [result, setResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean | undefined>();

  /**
   * Auth0
   */
  const { getAccessTokenSilently } = useAuth0();

  const { isOnline } = useNetworkStatus();
  const { pageVisible } = usePageVisibility();
  const intervalRef = useRef<null | number>(null);

  useEffect(() => {
    function getPatients() {
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
      if (isLoading === false) {
        return;
      }
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
  }, [pageVisible, isOnline, getAccessTokenSilently, isLoading]);

  /**
   * Table Config
   */
  const columns: (ColumnType<PatientModelAdmin> & { name: keyof PatientModelAdmin })[] = [
    {
      name: 'firstName',
      label: 'Nom',
      render: ({ value }: { value: string }) =>
        value ? <Paragraph variant={PARAGRAPH_SIZE.small}>{value}</Paragraph> : null,
    },
    {
      name: 'email',
      label: 'Email',
      render: ({ value }: { value: string }) =>
        value ? (
          <>
            <Link
              style={{ marginRight: '6px' }}
              variant={LinkVariant.underline}
              variantSize={PARAGRAPH_SIZE.small}
              href={`mailto:${value}`}
            >
              {value}
            </Link>
            <Button
              variant={Variant.tertiary}
              size={ButtonSize.xsmall}
              icon={ButtonIcon.icon}
              aria-label="copy"
              Icon={<IoCopyOutline />}
              onClick={handleCopyToClipboard(value)}
            ></Button>
          </>
        ) : null,
    },
    {
      name: 'patientPhoneNumber',
      label: 'Téléphone',
      render: ({ value }: { value: string }) =>
        value ? (
          <>
            <Link
              style={{ marginRight: '6px' }}
              variant={LinkVariant.underline}
              variantSize={PARAGRAPH_SIZE.small}
              href={`tel:${value}`}
            >
              {value}
            </Link>
            <Button
              variant={Variant.tertiary}
              size={ButtonSize.xsmall}
              icon={ButtonIcon.icon}
              aria-label="copy"
              Icon={<IoCopyOutline />}
              onClick={handleCopyToClipboard(value)}
            ></Button>
          </>
        ) : null,
    },
    {
      name: 'status',
      label: 'Status',
      render: ({ value }: { value: CLINIKO_PATIENT_VASEC_STATUS }) => {
        return <PatientStatusTag value={value}></PatientStatusTag>;
      },
    },
    {
      name: 'updatedAt',
      label: 'Modifié',
      render: ({ value }: { value: string }) =>
        value ? <Paragraph variant={PARAGRAPH_SIZE.small}>{value}</Paragraph> : null,
    },
    {
      name: 'id',
      label: 'Cliniko',
      render: ({ value }: { value: string }) =>
        value ? (
          <Link
            href={`https://clinique-dr-pierre-boucher.ca1.cliniko.com/patients/${value}`}
            target={'_blank'}
            variantSize={PARAGRAPH_SIZE.small}
            variantIcon={LinkIcon.right}
          >
            Ouvrir
          </Link>
        ) : null,
    },
  ];

  const [searchString, setSearchString] = useState('');
  const memoColumns = useMemo(() => columns, []);
  const memoData = useMemo(() => {
    return patients?.length
      ? patients.map(function (patient): PatientModelAdmin {
          return {
            id: patient.id || '',
            firstName: `${patient.firstName || ''} ${patient.lastName || ''}`,
            lastName: patient.lastName || '',
            email: patient.email || '',
            patientPhoneNumber: patient.patientPhoneNumber || '',
            patientPhoneType: patient.patientPhoneType || '',
            status: patient.status || CLINIKO_PATIENT_VASEC_STATUS.UNKNOWN,
            updatedAt: patient.updatedAt
              ? formatRelative(parseISO(patient.updatedAt), new Date(), {
                  locale: frCA,
                })
              : '',
          };
        })
      : [
          {
            id: '',
            firstName: isLoading ? 'Chargement...' : 'Pas de patients trouvés',
            lastName: '',
            email: '',
            patientPhoneNumber: '',
            patientPhoneType: CLINIKO_PHONE_TYPE.HOME,
            status: '' as CLINIKO_PATIENT_VASEC_STATUS,
            updatedAt: '',
          },
        ];
  }, [patients, isLoading]);

  const { headers, rows, pagination, toggleSort } = useTable<PatientModelAdmin>(
    memoColumns,
    memoData,
    {
      // pagination: true,
      sortable: true,
      filter: useCallback(
        (rows: RowType<PatientModelAdmin>[]) => {
          return rows.filter((row) => {
            return (
              row.cells.filter((cell) => {
                if (cell.value.toLowerCase().includes(searchString)) {
                  return true;
                }
                return false;
              }).length > 0
            );
          });
        },
        [searchString]
      ),
    }
  );

  function handleManualRefresh(event: React.MouseEvent) {
    if (!isLoading) {
      setIsLoading(true);
    }
  }

  function handleCopyToClipboard(text: string) {
    return (event: React.MouseEvent) => {
      copy(text);
    };
  }

  return (
    <Center>
      <Stack gap={[cssTheme.sizing.var.x4]} className={styles.wrapper}>
        <Heading variant={HEADING.h2}>Listes de patients</Heading>

        <Stack gap={[cssTheme.sizing.var.x3]}>
          <Cluster justifyContent={['flex-start']} alignItems={['flex-end']} wrap={true}>
            <InputWrapper style={{ width: `min(100vw, 400px)` }}>
              <InputLabel htmlFor={'filter'}>Recherche</InputLabel>
              <InputText
                name="filter"
                autoComplete="off"
                placeholder={'Nom du patient'}
                state={'rest'}
                onChange={(e) => {
                  setSearchString(e.target.value);
                }}
              />
            </InputWrapper>

            <InputWrapper style={{ width: `min(100vw, 400px)` }}>
              <InputLabel htmlFor={'status'}>Status</InputLabel>
              <InputSelect
                name="status"
                autoComplete="off"
                placeholder={'Status'}
                state={'rest'}
                onChange={(e) => {
                  if (e.target.value === 'all') {
                    setSearchString('');
                    return;
                  }
                  setSearchString(e.target.value);
                }}
              >
                <option value={'all'}>Tous</option>
                {Object.entries(clinikoPatientVasecStatus)
                  .sort(([idA, statusA], [idB, statusB]) => {
                    return statusA.order > statusB.order ? 1 : -1;
                  })
                  .map(([id, status]) => {
                    return (
                      <option key={id} value={id}>
                        {clinikoPatientVasecStatus[id as CLINIKO_PATIENT_VASEC_STATUS].description}
                      </option>
                    );
                  })}
              </InputSelect>
            </InputWrapper>

            <Button
              size={ButtonSize.medium}
              style={{ height: `47px` }}
              icon={ButtonIcon.left}
              Icon={<IoRefreshOutline />}
              onClick={handleManualRefresh}
              disabled={isLoading}
            >
              {isLoading ? 'Chargement...' : 'Rafraîchir liste'}
            </Button>
          </Cluster>
          <div className={stylesTable.table}>
            <div className={`${stylesTable.tableHeader} ${stylesTable.tableGrid}`}>
              {headers.map((header, id) => (
                <Label key={id} onClick={() => toggleSort(header.name)}>
                  {header.render()}
                </Label>
              ))}
            </div>

            <div className={stylesTable.tableContent}>
              {rows.map((row, id) => (
                <div key={id} className={`${stylesTable.tableGrid} ${stylesTable.tableRow}`}>
                  {row.cells.map((cell, id) => (
                    <div key={id} className={stylesTable.tableCell}>
                      {cell.render()}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* <Cluster
              className={stylesTable.tableToolbar}
              gap={[cssTheme.sizing.var.x1]}
              justifyContent={['flex-start']}
            >
              <Button
                variant={Variant.tertiary}
                collapsePadding={'left'}
                icon={ButtonIcon.icon}
                Icon={<IoChevronBackOutline />}
                onClick={() => pagination.prevPage()}
              ></Button>

              <Button
                variant={Variant.tertiary}
                icon={ButtonIcon.icon}
                Icon={<IoChevronForwardOutline />}
                onClick={() => pagination.nextPage()}
              ></Button>
            </Cluster> */}
          </div>
        </Stack>
      </Stack>
    </Center>
  );
};

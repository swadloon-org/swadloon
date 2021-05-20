import {
  ButtonIcon,
  LinkIcon,
  LinkVariant,
  PARAGRAPH_SIZE,
  Variant,
} from '@newrade/core-design-system';
import {
  Button,
  Cluster,
  CommonComponentProps,
  InputLabel,
  InputSelect,
  InputText,
  InputWrapper,
  Label,
  Link,
  Paragraph,
  Stack,
  Tag,
  useTreatTheme,
} from '@newrade/core-react-ui';
import {
  CLINIKO_PATIENT_VASEC_STATUS,
  CLINIKO_PHONE_TYPE,
  PatientModelAdmin,
} from '@newrade/vsb-common';
import { IoChevronBackOutline } from '@react-icons/all-files/io5/IoChevronBackOutline';
import { IoChevronForwardOutline } from '@react-icons/all-files/io5/IoChevronForwardOutline';
import React, { useCallback, useMemo, useState } from 'react';
import { ColumnType, RowType, useTable } from 'react-final-table';
import { useStyles } from 'react-treat';
import * as styleRefs from './patients-table.treat';

type Props = CommonComponentProps & {
  isLoading: boolean;
  patients: PatientModelAdmin[];
};

const columns: (ColumnType<PatientModelAdmin> & { name: keyof PatientModelAdmin })[] = [
  {
    name: 'firstName',
    label: 'Nom',
    render: ({ value }: { value: string }) =>
      value ? <Paragraph variant={PARAGRAPH_SIZE.small}>{value}</Paragraph> : null,
  },
  {
    name: 'patientPhoneNumber',
    label: 'Téléphone',
    render: ({ value }: { value: string }) =>
      value ? (
        <Link
          variant={LinkVariant.underline}
          variantSize={PARAGRAPH_SIZE.small}
          href={`tel:${value}`}
        >
          {value}
        </Link>
      ) : null,
  },
  {
    name: 'status',
    label: 'Status',
    render: ({ value }: { value: string }) => (value ? <Tag>{value}</Tag> : null),
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

export const PatientsTable: React.FC<Props> = ({
  id,
  style,
  className,
  patients,
  isLoading,
  ...props
}) => {
  const { styles } = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();
  const [searchString, setSearchString] = useState('');

  const memoColumns = useMemo(() => columns, []);
  // const memoData = useMemo(
  //   () => [...Array(10).fill(renderedPatients[0]), ...Array(10).fill(renderedPatients[1])],
  //   []
  // );
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
          },
        ];
  }, [patients, isLoading]);

  const { headers, rows, pagination, toggleSort } = useTable<PatientModelAdmin>(
    memoColumns,
    memoData,
    {
      pagination: true,
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

  return (
    <Stack gap={[cssTheme.sizing.var.x3]}>
      todo - emails, dates, test ipad, color status, add test and alerts
      <Cluster
        justifyContent={['flex-start']}
        style={{
          gridAutoFlow: 'initial',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 400px))',
        }}
      >
        <InputWrapper style={{ maxWidth: `minmax(100vw, 400px)` }}>
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

        <InputWrapper style={{ maxWidth: `min(100vw, 200px)` }}>
          <InputLabel htmlFor={'status'}>Status</InputLabel>
          <InputSelect
            name="status"
            autoComplete="off"
            placeholder={'Status'}
            state={'rest'}
            onChange={(e) => {
              setSearchString(e.target.value);
            }}
          >
            <option value={CLINIKO_PHONE_TYPE.MOBILE}>{'Mobile'}</option>
            <option value={CLINIKO_PHONE_TYPE.HOME}>{'Fixe'}</option>
          </InputSelect>
        </InputWrapper>
      </Cluster>
      <div className={styles.table}>
        <div className={`${styles.tableHeader} ${styles.tableGrid}`}>
          {headers.map((header, id) => (
            <Label key={id} onClick={() => toggleSort(header.name)}>
              {header.render()}
            </Label>
          ))}
        </div>

        <div className={styles.tableContent}>
          {rows.map((row, id) => (
            <div key={id} className={`${styles.tableGrid} ${styles.tableRow}`}>
              {row.cells.map((cell, id) => (
                <div key={id} className={styles.tableCell}>
                  {cell.render()}
                </div>
              ))}
            </div>
          ))}
        </div>

        <Cluster
          className={styles.tableToolbar}
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
        </Cluster>
      </div>
    </Stack>
  );
};

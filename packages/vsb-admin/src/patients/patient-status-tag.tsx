import { CommonComponentProps, Tag, useTreatTheme } from '@newrade/core-react-ui';
import { clinikoPatientVasecStatus, CLINIKO_PATIENT_VASEC_STATUS } from '@newrade/vsb-common';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './patient-status-tag.treat';

type Props = CommonComponentProps & {
  value: CLINIKO_PATIENT_VASEC_STATUS;
};

export const PatientStatusTag: React.FC<Props> = ({ id, style, className, value, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();
  if (!value) {
    return null;
  }

  const tagColor: string = clinikoPatientVasecStatus[value].color;
  const tagTextColor: string = clinikoPatientVasecStatus[value].colorText;
  const tagDescription: string = clinikoPatientVasecStatus[value].description;

  return (
    <Tag
      style={{
        backgroundColor: tagColor,
        color: tagTextColor,
        padding: '12px 8px',
        borderColor: 'transparent',
      }}
      {...props}
    >
      {tagDescription}
    </Tag>
  );
};

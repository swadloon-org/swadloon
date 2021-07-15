import { DoDont, useTreatTheme } from '@newrade/core-react-ui/src';
import React from 'react';

type Props = {};

export const DoDonts: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <DoDont kind={'do'}>Yes</DoDont>
      <DoDont kind={'dont'}>No</DoDont>
    </>
  );
};

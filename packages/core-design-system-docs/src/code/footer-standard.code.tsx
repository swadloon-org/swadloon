import { FooterStandard, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const FootersStandard: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <FooterStandard Copyright={<>© 2020 All Right Reserved - Company Inc.</>}></FooterStandard>
    </>
  );
};

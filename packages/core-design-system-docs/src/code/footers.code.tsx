import { FooterSimple, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const Footers: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <FooterSimple Copyright={<>© 2020 All Right Reserved - Company Inc.</>}></FooterSimple>
    </>
  );
};

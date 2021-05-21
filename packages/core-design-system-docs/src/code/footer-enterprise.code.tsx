import { FooterEnterprise, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const FootersEnterprise: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <FooterEnterprise
        Copyright={<>© 2020 All Right Reserved - Company Inc.</>}
      ></FooterEnterprise>
    </>
  );
};

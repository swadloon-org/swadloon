import React from 'react';

import { FooterSimple } from '@newrade/core-gatsby-ui/src';
import { useTreatTheme } from '@newrade/core-react-ui';

type Props = {};

export const FootersSimple: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <FooterSimple Copyright={<>© 2020 All Right Reserved - Company Inc.</>}></FooterSimple>
    </>
  );
};

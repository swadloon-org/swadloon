import React from 'react';

import { FooterSimple } from '@newrade/core-gatsby-ui/src';

type Props = {};

export const FootersSimple: React.FC<Props> = (props) => {
  return (
    <>
      <FooterSimple Copyright={<>© 2020 All Right Reserved - Company Inc.</>}></FooterSimple>
    </>
  );
};

import React from 'react';

import { FooterEnterprise } from '@newrade/core-gatsby-ui/src';

type Props = {};

export const FootersEnterprise: React.FC<Props> = (props) => {
  return (
    <>
      <FooterEnterprise
        Copyright={<>© 2020 All Right Reserved - Company Inc.</>}
      ></FooterEnterprise>
    </>
  );
};

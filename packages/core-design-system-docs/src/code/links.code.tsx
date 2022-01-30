import React from 'react';

import { LinkVariant } from '@newrade/core-design-system';
import { Link } from '@newrade/core-react-ui';

type Props = {};

export const Links: React.FC<Props> = (props) => {
  return (
    <>
      <Link href={'#'} linkStyle={LinkVariant.noUnderline}></Link>
      <Link href={'#'} linkStyle={LinkVariant.underline}></Link>
    </>
  );
};

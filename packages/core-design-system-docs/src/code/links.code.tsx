import React from 'react';

import { LinkVariant } from '@newrade/core-design-system';
import { Link } from '@newrade/core-react-ui';

type Props = {};

export const Links: React.FC<Props> = (props) => {
  return (
    <>
      <Link href={'#'} variant={LinkVariant.noUnderline}></Link>
      <Link href={'#'} variant={LinkVariant.underline}></Link>
    </>
  );
};

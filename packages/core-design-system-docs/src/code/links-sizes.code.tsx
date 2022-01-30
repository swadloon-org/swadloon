import React from 'react';

import { PARAGRAPH_SIZE } from '@newrade/core-design-system';
import { Link } from '@newrade/core-react-ui';

type Props = {};

export const LinksSizes: React.FC<Props> = (props) => {
  return (
    <>
      <Link href={'#'} size={PARAGRAPH_SIZE.large}></Link>
      <Link href={'#'} size={PARAGRAPH_SIZE.medium}></Link>
      <Link href={'#'} size={PARAGRAPH_SIZE.small}></Link>
      <Link href={'#'} size={PARAGRAPH_SIZE.xSmall}></Link>
    </>
  );
};

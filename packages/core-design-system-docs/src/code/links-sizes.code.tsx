import React from 'react';

import { PARAGRAPH_SIZE } from '@newrade/core-design-system';
import { Link } from '@newrade/core-react-ui';

type Props = {};

export const LinksSizes: React.FC<Props> = (props) => {
  return (
    <>
      <Link href={'#'} variantSize={PARAGRAPH_SIZE.large}></Link>
      <Link href={'#'} variantSize={PARAGRAPH_SIZE.medium}></Link>
      <Link href={'#'} variantSize={PARAGRAPH_SIZE.small}></Link>
      <Link href={'#'} variantSize={PARAGRAPH_SIZE.xSmall}></Link>
    </>
  );
};

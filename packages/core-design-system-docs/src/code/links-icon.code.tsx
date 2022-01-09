import React from 'react';

import { LinkIcon, PARAGRAPH_SIZE } from '@newrade/core-design-system';
import { Link } from '@newrade/core-react-ui';

type Props = {};

export const LinksIcon: React.FC<Props> = (props) => {
  return (
    <>
      <Link href={'#'} variantSize={PARAGRAPH_SIZE.large} variantIcon={LinkIcon.right}></Link>
      <Link href={'#'} variantSize={PARAGRAPH_SIZE.medium} variantIcon={LinkIcon.right}></Link>
      <Link href={'#'} variantSize={PARAGRAPH_SIZE.small} variantIcon={LinkIcon.right}></Link>
      <Link href={'#'} variantSize={PARAGRAPH_SIZE.xSmall} variantIcon={LinkIcon.right}></Link>
    </>
  );
};

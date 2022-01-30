import React from 'react';

import { LinkIcon, PARAGRAPH_SIZE } from '@newrade/core-design-system';
import { Link } from '@newrade/core-react-ui';

type Props = {};

export const LinksIcon: React.FC<Props> = (props) => {
  return (
    <>
      <Link href={'#'} size={PARAGRAPH_SIZE.large} icon={LinkIcon.right}></Link>
      <Link href={'#'} size={PARAGRAPH_SIZE.medium} icon={LinkIcon.right}></Link>
      <Link href={'#'} size={PARAGRAPH_SIZE.small} icon={LinkIcon.right}></Link>
      <Link href={'#'} size={PARAGRAPH_SIZE.xSmall} icon={LinkIcon.right}></Link>
    </>
  );
};

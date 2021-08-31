import { PARAGRAPH_SIZE } from '@newrade/core-design-system';
import { Link, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const LinksSizes: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <Link href={'#'} variantSize={PARAGRAPH_SIZE.large}></Link>
      <Link href={'#'} variantSize={PARAGRAPH_SIZE.medium}></Link>
      <Link href={'#'} variantSize={PARAGRAPH_SIZE.small}></Link>
      <Link href={'#'} variantSize={PARAGRAPH_SIZE.xSmall}></Link>
    </>
  );
};

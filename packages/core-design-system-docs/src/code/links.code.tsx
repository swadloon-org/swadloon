import { LinkVariant } from '@newrade/core-design-system';
import { Link, useTreatTheme } from '@newrade/core-react-ui/src';
import React from 'react';

type Props = {};

export const Links: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <Link href={'#'} variant={LinkVariant.noUnderline}></Link>
      <Link href={'#'} variant={LinkVariant.underline}></Link>
    </>
  );
};

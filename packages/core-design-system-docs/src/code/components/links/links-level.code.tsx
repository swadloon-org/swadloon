import { LinkVariant, Variant } from '@newrade/core-design-system';
import { CodeOutline, Link, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const LinksLevel: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <CodeOutline>
      <Link href={'#'} variant={LinkVariant.underline} variantLevel={Variant.primary}></Link>
      <Link href={'#'} variant={LinkVariant.underline} variantLevel={Variant.secondary}></Link>
      <Link href={'#'} variant={LinkVariant.underline} variantLevel={Variant.tertiary}></Link>
    </CodeOutline>
  );
};

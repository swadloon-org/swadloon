import React from 'react';

import { LinkVariant, Variant } from '@newrade/core-design-system';
import { Link } from '@newrade/core-react-ui';

type Props = {};

export const LinksLevel: React.FC<Props> = (props) => {
  return (
    <>
      <Link href={'#'} linkStyle={LinkVariant.underline} kind={Variant.primary}></Link>
      <Link href={'#'} linkStyle={LinkVariant.underline} kind={Variant.secondary}></Link>
      <Link href={'#'} linkStyle={LinkVariant.underline} kind={Variant.tertiary}></Link>
    </>
  );
};

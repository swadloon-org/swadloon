import { LinkIcon, LinkVariant, Variant } from '@newrade/core-design-system';
import { Link, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const LinksExternal: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <Link
        href={'https://google.com'}
        target={'_blank'}
        variant={LinkVariant.underline}
        variantLevel={Variant.primary}
        variantIcon={LinkIcon.right}
      ></Link>
    </>
  );
};

import React from 'react';

import { LinkIcon, LinkVariant, Variant } from '@newrade/core-design-system';
import { Link } from '@newrade/core-react-ui';

type Props = {};

export const LinksExternal: React.FC<Props> = (props) => {
  return (
    <>
      <Link
        href={'https://google.com'}
        target={'_blank'}
        linkStyle={LinkVariant.underline}
        kind={Variant.primary}
        icon={LinkIcon.right}
      >
        www.google.com
      </Link>
    </>
  );
};

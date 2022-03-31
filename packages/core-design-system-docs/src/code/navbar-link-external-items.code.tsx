import React from 'react';

import { NavbarItemSize } from '@newrade/core-design-system';
import { NavbarExternalLinkItem } from '@newrade/core-react-ui';
import { Cluster, Stack } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const NavbarLinkExternalItems: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x3]}>
      <Cluster justifyContent={['flex-start']}>
        <NavbarExternalLinkItem href={'https://www.google.com'} size={NavbarItemSize.medium}>
          External link medium
        </NavbarExternalLinkItem>

        <NavbarExternalLinkItem href={'https://www.google.com'} size={NavbarItemSize.small}>
          External link small
        </NavbarExternalLinkItem>
      </Cluster>
    </Stack>
  );
};

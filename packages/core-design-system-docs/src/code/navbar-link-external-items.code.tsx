import { NavbarItemSize } from '@newrade/core-design-system';
import { NavbarExternalLinkItem } from '@newrade/core-gatsby-ui/src';
import { Cluster, Stack } from '@newrade/core-react-ui';
import { sizingVars } from '@newrade/core-react-ui/theme';
import React from 'react';

type Props = {};

export const NavbarLinkExternalItems: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizingVars.var.x3]}>
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

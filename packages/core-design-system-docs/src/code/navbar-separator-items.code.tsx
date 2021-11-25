import React from 'react';

import { NavbarLinkItem } from '@newrade/core-gatsby-ui/src';
import { Cluster, NavbarSeparatorItem, Stack } from '@newrade/core-react-ui';
import { sizingVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const NavbarSeparatorItems: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizingVars.var.x3]}>
      <Cluster justifyContent={['flex-start']} gap={['0px']}>
        <NavbarLinkItem />
        <NavbarLinkItem />
        <NavbarSeparatorItem kind={'empty'} />

        <NavbarLinkItem />

        <NavbarSeparatorItem />

        <NavbarLinkItem />
        <NavbarLinkItem />
      </Cluster>
    </Stack>
  );
};

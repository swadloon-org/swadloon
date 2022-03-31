import React from 'react';

import { NavbarLinkItem } from '@newrade/core-react-ui';
import { Cluster, NavbarSeparatorItem, Stack } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const NavbarSeparatorItems: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x3]}>
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

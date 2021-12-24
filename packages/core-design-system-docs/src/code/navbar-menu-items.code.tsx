import React, { useState } from 'react';

import { NavbarMenuLinkItem } from '@newrade/core-gatsby-ui/src';
import { Cluster, Stack, useIsSSR } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const NavbavMenuItems: React.FC<Props> = (props) => {
  const [activeLink, setActiveLink] = useState(0);
  const isSSR = useIsSSR();
  function handleClick(id: number) {
    return () => {
      setActiveLink(id);
    };
  }

  return (
    <Stack gap={[sizeVars.x3]}>
      <Cluster justifyContent={['flex-start']}>
        <NavbarMenuLinkItem>Menu</NavbarMenuLinkItem>
        <NavbarMenuLinkItem>Menu</NavbarMenuLinkItem>
        <NavbarMenuLinkItem>Menu</NavbarMenuLinkItem>
      </Cluster>
    </Stack>
  );
};

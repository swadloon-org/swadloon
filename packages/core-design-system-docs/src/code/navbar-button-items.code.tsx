import React, { useState } from 'react';

import { NavbarLinkItem } from '@newrade/core-gatsby-ui/src';
import { Cluster, Stack, useIsSSR, useTreatTheme } from '@newrade/core-react-ui';
import { sizingVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const NavbarButtonItems: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();
  const [activeLink, setActiveLink] = useState(0);
  const isSSR = useIsSSR();
  function handleClick(id: number) {
    return () => {
      setActiveLink(id);
    };
  }

  return (
    <Stack gap={[sizingVars.var.x3]}>
      <Cluster justifyContent={['flex-start']}>
        <NavbarLinkItem active={activeLink === 0} onClick={handleClick(0)}></NavbarLinkItem>
        <NavbarLinkItem active={activeLink === 1} onClick={handleClick(1)}></NavbarLinkItem>
        <NavbarLinkItem active={activeLink === 2} onClick={handleClick(2)}></NavbarLinkItem>
        <NavbarLinkItem active={false} disabled={true}></NavbarLinkItem>
      </Cluster>
    </Stack>
  );
};

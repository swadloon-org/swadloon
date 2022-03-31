import React, { useState } from 'react';

import { Cluster, NavbarLinkItem, Stack, useIsSSR } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const NavbarButtonItems: React.FC<Props> = (props) => {
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
        <NavbarLinkItem active={activeLink === 0} onClick={handleClick(0)}></NavbarLinkItem>
        <NavbarLinkItem active={activeLink === 1} onClick={handleClick(1)}></NavbarLinkItem>
        <NavbarLinkItem active={activeLink === 2} onClick={handleClick(2)}></NavbarLinkItem>
        <NavbarLinkItem active={false} disabled={true}></NavbarLinkItem>
      </Cluster>
    </Stack>
  );
};

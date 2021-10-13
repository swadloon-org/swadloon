import { NavbarLinkExternalItem, NavbarLinkItem } from '@newrade/core-gatsby-ui/src';
import { Cluster, Stack, useIsSSR, useTreatTheme } from '@newrade/core-react-ui';
import { sizingVars } from '@newrade/core-react-ui/theme';
import React, { useState } from 'react';

type Props = {};

export const NavbarLinkExternalItems: React.FC<Props> = (props) => {
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
        <NavbarLinkItem>Internal link</NavbarLinkItem>
        <NavbarLinkItem>Internal link 2</NavbarLinkItem>
        <NavbarLinkExternalItem href={'https://www.google.com'}>
          Visit website
        </NavbarLinkExternalItem>
      </Cluster>
    </Stack>
  );
};

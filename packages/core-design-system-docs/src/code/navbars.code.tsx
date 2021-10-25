import { NavbarLinkItem, NavbarModular, NavbarStandard } from '@newrade/core-gatsby-ui/src';
import { Stack, useTreatTheme } from '@newrade/core-react-ui';
import { sizingVars } from '@newrade/core-react-ui/theme';
import React from 'react';

type Props = {};

export const Navbars: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  const left = (
    <>
      <NavbarLinkItem>Link</NavbarLinkItem>
      <NavbarLinkItem>Link</NavbarLinkItem>
      <NavbarLinkItem>Link</NavbarLinkItem>
    </>
  );

  return (
    <Stack gap={[sizingVars.var.x4]}>
      <NavbarModular navbarMode="normal" left={left} leftDesktop={left}></NavbarModular>

      <NavbarStandard navbarMode="normal" />
    </Stack>
  );
};

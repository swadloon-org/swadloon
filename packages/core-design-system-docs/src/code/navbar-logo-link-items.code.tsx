import { LOGO } from '@newrade/core-design-system';
import { NavbarLogoLinkItem } from '@newrade/core-gatsby-ui/src';
import { Cluster, Stack } from '@newrade/core-react-ui';
import { sizingVars } from '@newrade/core-react-ui/theme';
import React from 'react';

type Props = {};

export const NavbarLinkLogoItems: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizingVars.var.x3]}>
      <Cluster justifyContent={['flex-start']} gap={[sizingVars.var.x3]}>
        <NavbarLogoLinkItem kind={LOGO.STANDARD} />
        <NavbarLogoLinkItem kind={LOGO.STANDARD} active={true} />

        <NavbarLogoLinkItem kind={LOGO.SYMBOL} />
        <NavbarLogoLinkItem kind={LOGO.SYMBOL} active={true} />
      </Cluster>
    </Stack>
  );
};

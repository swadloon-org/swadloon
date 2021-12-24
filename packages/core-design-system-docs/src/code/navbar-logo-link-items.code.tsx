import React from 'react';

import { LOGO } from '@newrade/core-design-system';
import { NavbarLogoLinkItem, NavbarLogoTextItem } from '@newrade/core-gatsby-ui/src';
import { Cluster, Stack } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const NavbarLinkLogoItems: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x3]}>
      <Cluster justifyContent={['flex-start']} gap={[sizeVars.x3]}>
        <NavbarLogoTextItem kind={LOGO.SYMBOL} text={'ProductName'} />

        <NavbarLogoLinkItem kind={LOGO.STANDARD} />
        <NavbarLogoLinkItem kind={LOGO.STANDARD} active={true} />

        <NavbarLogoLinkItem kind={LOGO.SYMBOL} />
        <NavbarLogoLinkItem kind={LOGO.SYMBOL} active={true} />
      </Cluster>
    </Stack>
  );
};

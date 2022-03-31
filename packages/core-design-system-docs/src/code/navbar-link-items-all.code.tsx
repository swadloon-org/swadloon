import React from 'react';

import { LOGO } from '@newrade/core-design-system';
import { NavbarExternalLinkItem, NavbarLinkItem, NavbarLogoLinkItem } from '@newrade/core-react-ui';
import { Cluster, NavbarSeparatorItem, Stack } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const AllNavbarLinkItems: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x3]}>
      <Cluster justifyContent={['flex-start']}>
        <NavbarLogoLinkItem kind={LOGO.SYMBOL} />
        <NavbarLogoLinkItem />

        <NavbarLinkItem active={true}></NavbarLinkItem>
        <NavbarLinkItem active={false}></NavbarLinkItem>

        <NavbarSeparatorItem />

        <NavbarExternalLinkItem href={'https://www.google.com'}>
          External link
        </NavbarExternalLinkItem>
      </Cluster>
    </Stack>
  );
};

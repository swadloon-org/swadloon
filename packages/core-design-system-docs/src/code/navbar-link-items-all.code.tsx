import { LOGO } from '@newrade/core-design-system';
import {
  NavbarExternalLinkItem,
  NavbarLinkItem,
  NavbarLogoLinkItem,
} from '@newrade/core-gatsby-ui/src';
import { Cluster, Stack } from '@newrade/core-react-ui';
import { sizingVars } from '@newrade/core-react-ui/theme';
import React from 'react';

type Props = {};

export const AllNavbarLinkItems: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizingVars.var.x3]}>
      <Cluster justifyContent={['flex-start']}>
        <NavbarLinkItem active={true}></NavbarLinkItem>
        <NavbarLinkItem active={false}></NavbarLinkItem>

        <NavbarLogoLinkItem />
        <NavbarLogoLinkItem kind={LOGO.SYMBOL} />

        <NavbarExternalLinkItem href={'https://www.google.com'}></NavbarExternalLinkItem>
      </Cluster>
    </Stack>
  );
};

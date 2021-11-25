import React from 'react';

import { ICON, NavbarItemIcon } from '@newrade/core-design-system';

import { NavbarLinkProps } from '../navbar-items/navbar-item.props';
import { NavbarLinkItem } from '../navbar-items/navbar-link-item';

type Props = NavbarLinkProps;

export const NavbarMenuLinkItem: React.FC<Props> = (props) => {
  return <NavbarLinkItem Icon={ICON.CHEVRON_DOWN} icon={NavbarItemIcon.right} {...props} />;
};

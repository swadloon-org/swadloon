import { NavbarItemIcon } from '@newrade/core-design-system';
import React from 'react';
import { NavbarLinkProps } from './navbar-item.props';
import { NavbarLinkItem } from './navbar-link-item';

type Props = NavbarLinkProps;

export const NavbarExternalLinkItem: React.FC<Props> = (props) => {
  return <NavbarLinkItem active={false} icon={NavbarItemIcon.right} {...props} />;
};

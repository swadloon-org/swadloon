import React from 'react';

import { NavbarItemIcon } from '@newrade/core-design-system';

import { NavbarLinkProps } from './navbar-item.props.js';
import { NavbarLinkItem } from './navbar-link-item.js';

type Props = NavbarLinkProps;

export const NavbarExternalLinkItem: React.FC<Props> = (props) => {
  return <NavbarLinkItem active={false} icon={NavbarItemIcon.right} {...props} />;
};

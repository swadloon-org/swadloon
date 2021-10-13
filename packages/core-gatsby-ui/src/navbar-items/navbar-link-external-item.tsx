import React from 'react';
import { NavbarLinkProps } from './navbar-item.props';
import { NavbarLinkItem } from './navbar-link-item';

type Props = NavbarLinkProps;

export const NavbarLinkExternalItem: React.FC<Props> = (props) => {
  return <NavbarLinkItem active={false} {...props} />;
};

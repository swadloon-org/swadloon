import React from 'react';

import { LOGO } from '@newrade/core-design-system';

import { Logo } from '../logos/logo.js';

import { NavbarLinkProps } from './navbar-item.props.js';
import * as styles from './navbar-link-item.css.js';
import { NavbarLinkItem } from './navbar-link-item.js';

type Props = NavbarLinkProps & {
  kind?: LOGO;
  tagText?: string;
};

export const NavbarLogoLinkItem: React.FC<Props> = ({
  kind = LOGO.STANDARD,
  tagText,
  children,
  ...props
}) => {
  const RenderedLogo = children ? children : <Logo name={kind} className={styles.logo}></Logo>;

  return <NavbarLinkItem SVGLogo={RenderedLogo} aria-label={'Logo'} {...props}></NavbarLinkItem>;
};

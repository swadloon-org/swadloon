import React from 'react';

import { HEADING, LOGO } from '@newrade/core-design-system';

import { sizeVars } from '../default-theme/src/theme.js';
import { Cluster } from '../layout/cluster.js';
import { Logo } from '../logos/logo.js';
import { Heading } from '../text/heading.js';

import { NavbarLinkProps } from './navbar-item.props.js';
import * as styles from './navbar-link-item.css.js';
import { NavbarLinkItem } from './navbar-link-item.js';

type Props = NavbarLinkProps & {
  kind?: LOGO;
  text?: string;
};

export const NavbarLogoTextItem: React.FC<Props> = ({
  kind = LOGO.SYMBOL,
  text,
  children,
  ...props
}) => {
  const Name = (
    <Cluster gap={[sizeVars.x2]}>
      <Logo name={kind} className={styles.logo}></Logo>

      <Heading as={'div'} variant={HEADING.h3}>
        {text || 'Name'}
      </Heading>
    </Cluster>
  );

  return (
    <NavbarLinkItem
      aria-label={'Logo'}
      active={false}
      CustomChildren={Name}
      {...props}
    ></NavbarLinkItem>
  );
};

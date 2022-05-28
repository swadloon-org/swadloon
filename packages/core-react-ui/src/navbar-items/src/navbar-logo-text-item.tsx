import React from 'react';

import { HEADING, LOGO } from '@newrade/core-design-system';

import { sizeVars } from '../default-theme/src/theme';
import { Cluster } from '../layout/cluster';
import { Logo } from '../logos/logo';
import { Heading } from '../text/heading';

import { NavbarLinkProps } from './navbar-item.props';
import { NavbarLinkItem } from './navbar-link-item';

import * as styles from './navbar-link-item.css';

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

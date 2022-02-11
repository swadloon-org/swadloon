import React from 'react';

import { Cluster, useCommonProps } from '@newrade/core-react-ui';

import { NavbarModularProps } from './navbar.props';
import { NavbarBase } from './navbar-base';

import * as styles from './navbar-modular.css';

type Props = NavbarModularProps;

/**
 * Navbar with no logic.
 * Slots allows navbar-item components to be placed in 3 areas.
 */
export const NavbarModular = React.forwardRef<any, Props>(
  (
    {
      id,
      style,
      className,
      navbar,
      left,
      center,
      right,
      leftDesktop,
      centerDesktop,
      rightDesktop,
      ...props
    },
    ref
  ) => {
    const commonProps = useCommonProps({
      id,
      style,
      className,
      // classNames: [styles.base],
      ...props,
    });

    return (
      <NavbarBase navbar={navbar} ref={ref} {...commonProps}>
        {/*
         * Mobile
         */}
        <Cluster className={styles.mobile}>
          <Cluster>{left}</Cluster>
          {center}
          {right}
        </Cluster>

        {/*
         * Desktop
         */}
        <Cluster className={styles.desktop}>
          <Cluster justifyContent={['flex-start']}>{leftDesktop}</Cluster>
          <Cluster justifyContent={['center']}>{centerDesktop}</Cluster>
          <Cluster justifyContent={['flex-end']}>{rightDesktop}</Cluster>
        </Cluster>
      </NavbarBase>
    );
  }
);

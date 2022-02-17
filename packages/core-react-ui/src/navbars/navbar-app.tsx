import React, { useImperativeHandle, useRef, useState } from 'react';

import { ButtonIcon, ICON, Variant } from '@newrade/core-design-system';

import { Button } from '../button/button';
import { usePreventPinchZoom } from '../hooks/use-prevent-pinch-zoom';
import { BoxV2 } from '../layout/box-v2';
import { Center } from '../layout/center';
import { Cluster } from '../layout/cluster';
import { PrimitiveProps } from '../primitive/primitive.props';
import { sizeVars } from '../theme';

import * as styles from './navbar-app.css';

export type NavBarAppRefs = {
  readonly mobileNavbar: HTMLDivElement | undefined;
  readonly desktopNavbar: HTMLDivElement | undefined;
};

type Props = PrimitiveProps & {
  /**
   * Inject a link around the logo
   * @example
   *  <Navbar ... HomeLink={<GatsbyLink to={'/'} />} />
   */
  HomeLink?: React.ReactNode;
  /**
   * Pass a React SVG to the mobile logo
   */
  MobileSvgLogo?: React.ReactNode;
  /**
   * Pass a React SVG to the desktop logo
   */
  DesktopSvgLogo?: React.ReactNode;
  /**
   * Navigation links for desktop
   */
  DesktopMenuLinks?: React.ReactNode;
  /**
   * Navigation links for mobile
   */
  MobileMenuLinks?: React.ReactNode;
  /**
   * Used to set the close or menu icon
   */
  menuOpened?: boolean;
  onClickMenuButton?: (event: React.MouseEvent) => void;
};

/**
 * Navbar for web application with a menu button on the left to open and close the sidebar,
 * a logo in the center and buttons and links on the right side.
 */
export const NavBarApp = React.forwardRef<any, Props>((props, ref) => {
  const [isInstalled, setIsInstalled] = useState<boolean>(false);

  const MobileSvgLogo = props.MobileSvgLogo ? (
    React.cloneElement(props.MobileSvgLogo as React.ReactElement, {
      className: styles.logoMobile,
    })
  ) : (
    <div className={styles.logoMobile}>Logo</div>
  );

  const DesktopSvgLogo = props.DesktopSvgLogo ? (
    React.cloneElement(props.DesktopSvgLogo as React.ReactElement, {
      className: styles.logoDesktop,
    })
  ) : (
    <div className={styles.logoDesktop}>Logo</div>
  );

  /**
   * Refs
   */
  const mobileNavbar = useRef<HTMLElement>(null);
  const desktopNavbar = useRef<HTMLElement>(null);

  useImperativeHandle(
    ref,
    () =>
      ({
        get mobileNavbar() {
          return mobileNavbar.current;
        },
        get desktopNavbar() {
          return desktopNavbar.current;
        },
      } as NavBarAppRefs)
  );

  /**
   * Events handling
   */
  function handlePressMenuButton(event: React.MouseEvent) {
    if (props.onClickMenuButton) {
      props.onClickMenuButton(event);
    }
  }

  usePreventPinchZoom(mobileNavbar.current);

  return (
    <>
      {/* Mobile */}
      <header
        ref={mobileNavbar}
        style={props.style}
        className={`${styles.wrapper} ${styles.mobileMenu}`}
      >
        <Center maxWidth={`100%`} className={styles.content}>
          <div className={styles.mobileWrapper}>
            <BoxV2 justifyContent={['flex-start']}>
              <Button
                aria-label={'Menu'}
                collapsePadding={'left'}
                variant={Variant.tertiary}
                icon={ButtonIcon.icon}
                Icon={props.menuOpened ? ICON.CLOSE : ICON.MENU}
                onClick={handlePressMenuButton}
              ></Button>
            </BoxV2>

            <BoxV2
              justifyContent={['center']}
              padding={[sizeVars.x2, 0]}
              AsElement={props.HomeLink}
              aria-label={'Home'}
            >
              {MobileSvgLogo || DesktopSvgLogo}
            </BoxV2>

            <Cluster justifyContent={['flex-end']} gap={[sizeVars.x4]}>
              {props.MobileMenuLinks}
            </Cluster>
          </div>
        </Center>
      </header>

      {/* Desktop */}
      <header
        ref={desktopNavbar}
        className={`${styles.wrapper} ${styles.desktopMenu}`}
        style={props.style}
      >
        <Center maxWidth={`100%`} className={styles.content}>
          <div className={styles.mobileWrapper}>
            <BoxV2 justifyContent={['flex-start']}>
              <Button
                aria-label={'Menu'}
                collapsePadding={'left'}
                variant={Variant.tertiary}
                icon={ButtonIcon.icon}
                Icon={props.menuOpened ? ICON.CLOSE : ICON.MENU}
                onClick={handlePressMenuButton}
              ></Button>
            </BoxV2>

            <BoxV2
              justifyContent={['center']}
              padding={[sizeVars.x2, 0]}
              className={styles.logoWrapper}
              AsElement={props.HomeLink}
            >
              {DesktopSvgLogo || MobileSvgLogo}
            </BoxV2>

            <Cluster justifyContent={['flex-end']} gap={[sizeVars.x4]}>
              {props.DesktopMenuLinks}
            </Cluster>
          </div>
        </Center>
      </header>
    </>
  );
});

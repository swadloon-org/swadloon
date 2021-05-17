import { ButtonIcon, Variant } from '@newrade/core-design-system';
import { IoClose } from '@react-icons/all-files/io5/IoClose';
import { IoMenu } from '@react-icons/all-files/io5/IoMenu';
import React, { useImperativeHandle, useRef, useState } from 'react';
import { useStyles } from 'react-treat';
import { Button } from '../button/button';
import { usePreventPinchZoom } from '../hooks/use-prevent-pinch-zoom';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { BoxV2 } from '../layout/box-v2';
import { Center } from '../layout/center';
import { Cluster } from '../layout/cluster';
import { CommonComponentProps } from '../props/component-common.props';
import { SVGLogo } from '../svg-logo/svg-logo';
import * as styleRefs from './navbar-app.treat';

export type NavBarAppRefs = {
  readonly mobileNavbar: HTMLDivElement | undefined;
  readonly desktopNavbar: HTMLDivElement | undefined;
};

type Props = CommonComponentProps & {
  /**
   * Inject a link around the logo
   * @example
   *  <NavBar ... HomeLink={<GatsbyLink to={'/'} />} />
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
  const { styles } = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();

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
                Icon={props.menuOpened ? <IoClose /> : <IoMenu />}
                onClick={handlePressMenuButton}
              ></Button>
            </BoxV2>

            <BoxV2
              justifyContent={['center']}
              padding={[cssTheme.sizing.var.x2, 0]}
              AsElement={props.HomeLink}
              aria-label={'Home'}
            >
              <SVGLogo Icon={MobileSvgLogo || DesktopSvgLogo} />
            </BoxV2>

            <Cluster justifyContent={['flex-end']} gap={[cssTheme.sizing.var.x4]}>
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
                Icon={props.menuOpened ? <IoClose /> : <IoMenu />}
                onClick={handlePressMenuButton}
              ></Button>
            </BoxV2>

            <BoxV2
              padding={[cssTheme.sizing.var.x2, 0]}
              className={styles.logoWrapper}
              AsElement={props.HomeLink}
            >
              <SVGLogo Icon={DesktopSvgLogo || MobileSvgLogo} />
            </BoxV2>

            <Cluster justifyContent={['flex-end']} gap={[cssTheme.sizing.var.x4]}>
              {props.DesktopMenuLinks}
            </Cluster>
          </div>
        </Center>
      </header>
    </>
  );
});

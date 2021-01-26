import { ButtonIcon, ButtonSize, ButtonVariant } from '@newrade/core-design-system';
import { PressEvent } from '@react-types/shared';
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { isIOS } from 'react-device-detect';
import { IoClose, IoMenu } from 'react-icons/io5';
import { useStyles } from 'react-treat';
import { Button } from '../components/button/button';
import { SVGLogo } from '../components/svg-logo/svg-logo';
import { Label } from '../components/text/label';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { BoxV2 } from '../layout/box-v2';
import { Center } from '../layout/center';
import { Cluster } from '../layout/cluster';
import { CommonComponentProps } from '../props/component-common.props';
import * as styleRefs from './navbar.treat';
import { usePreventPinchZoom } from '../hooks/use-prevent-pinch-zoom';

export type NavBarRefs = {
  readonly mobileNavbar: HTMLDivElement | undefined;
  readonly desktopNavbar: HTMLDivElement | undefined;
};

type Props = CommonComponentProps & {
  /**
   * Allow to override the max-width of the content
   */
  maxWidth?: string;
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
   * Navigation links
   */
  MenuLinks?: React.ReactNode;
  /**
   * Used to set the close or menu icon
   */
  menuOpened?: boolean;
  onPressMenuButton?: (event: PressEvent) => void;
};

/**
 * Generic navigation bar with an icon logo and language switch on mobile
 * and on desktop, a logo, and menu links
 */
export const NavBar = React.forwardRef<any, Props>((props, ref) => {
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

  const updateDocumentBackgroundColor = (options: { multiplier: number }) => (event: Event) => {
    const scrollPosition = window.scrollY;

    if (window.document.documentElement.scrollHeight - scrollPosition < options.multiplier * window.screen.height) {
      window.document.documentElement.style.backgroundColor = cssTheme.colors.colors.grey[900];
      return;
    }
    if (window.document.documentElement.scrollHeight - scrollPosition >= options.multiplier * window.screen.height) {
      window.document.documentElement.style.backgroundColor = cssTheme.colors.colorIntents.background0;
      return;
    }
  };

  useEffect(() => {
    if (isIOS && !isInstalled) {
      const handler = updateDocumentBackgroundColor({ multiplier: 2 });
      window.document.addEventListener('touchmove', handler, { passive: true });
      window.document.addEventListener('scroll', handler, { passive: true });

      setIsInstalled(true);

      return () => {
        window.document.removeEventListener('touchmove', handler);
        window.document.removeEventListener('scroll', handler);
      };
    }
  }, []);

  /**
   * Refs
   */
  const mobileNavbar = useRef<HTMLDivElement>();
  const desktopNavbar = useRef<HTMLDivElement>();

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
      } as NavBarRefs)
  );

  /**
   * Events handling
   */
  function handlePressMenuButton(event: PressEvent) {
    if (props.onPressMenuButton) {
      props.onPressMenuButton(event);
    }
  }

  usePreventPinchZoom(mobileNavbar.current);

  return (
    <>
      {/* Mobile */}
      <Center
        ref={mobileNavbar}
        as={'header'}
        className={`${styles.wrapper} ${styles.mobileMenu}`}
        style={props.style}
        maxWidth={props.maxWidth}
      >
        <div className={styles.mobileWrapper}>
          <BoxV2 justifyContent={['flex-start']}>
            <Button
              aria-label={'Menu'}
              size={ButtonSize.large}
              collapsePadding={'left'}
              variant={ButtonVariant.tertiary}
              icon={ButtonIcon.icon}
              Icon={props.menuOpened ? <IoClose /> : <IoMenu />}
              onPress={handlePressMenuButton}
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

          <BoxV2 justifyContent={['flex-end']} padding={[cssTheme.sizing.var.x2, cssTheme.sizing.var.x3]}>
            <Label> </Label>
          </BoxV2>
        </div>
      </Center>

      {/* Desktop */}
      <Center
        ref={desktopNavbar}
        as={'header'}
        className={`${styles.wrapper} ${styles.desktopMenu}`}
        style={props.style}
        maxWidth={props.maxWidth}
      >
        <Cluster justifyContent={['space-between']} alignItems={['center']} as={'nav'}>
          <BoxV2 padding={[cssTheme.sizing.var.x2, 0]} className={styles.logoWrapper} AsElement={props.HomeLink}>
            <SVGLogo Icon={DesktopSvgLogo || MobileSvgLogo} />
          </BoxV2>

          <Cluster justifyContent={['space-between']} gap={[cssTheme.sizing.var.x4]}>
            {props.MenuLinks}
          </Cluster>
        </Cluster>
      </Center>
    </>
  );
});

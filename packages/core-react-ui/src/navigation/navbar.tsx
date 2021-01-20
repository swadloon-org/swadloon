import React, { useEffect, useImperativeHandle, useState, useRef } from 'react';
import { isIOS } from 'react-device-detect';
import { IoMenu } from 'react-icons/io5';
import { useStyles } from 'react-treat';
import { ButtonIcon, ButtonSize, ButtonVariant } from '../../../core-design-system/src';
import { Button } from '../components/button/button';
import { SVGLogo } from '../components/svg-logo/svg-logo';
import { Label } from '../components/text/label';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { BoxV2 } from '../layout/box-v2';
import { Center } from '../layout/center';
import { Cluster } from '../layout/cluster';
import { CommonComponentProps } from '../props/component-common.props';
import * as styleRefs from './navbar.treat';

export type NavBarRefs = {
  readonly mobileNavbar: HTMLDivElement | undefined;
  readonly desktopNavbar: HTMLDivElement | undefined;
};

type Props = CommonComponentProps & {
  /**
   * Allow to override the max-width of the content
   */
  maxWidth?: string;
  MobileSvgLogo?: React.ReactNode;
  DesktopSvgLogo?: React.ReactNode;
  MenuLinks?: React.ReactNode;
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
              size={ButtonSize.large}
              collapsePadding={'left'}
              variant={ButtonVariant.tertiary}
              icon={ButtonIcon.icon}
              Icon={<IoMenu />}
            ></Button>
          </BoxV2>

          <BoxV2 justifyContent={['center']} padding={[cssTheme.sizing.var.x2, 0]}>
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
        <Cluster justifyContent={['space-between']} alignItems={['center']}>
          <BoxV2 padding={[cssTheme.sizing.var.x2, 0]} className={styles.logoWrapper}>
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

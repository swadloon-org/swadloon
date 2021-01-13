import useWebAnimations from '@wellyshen/use-web-animations';
import React, { useEffect, useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { useStyles } from 'react-treat';
import * as styleRefs from './navbar.treat';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { Center } from '../layout/center';
import { Cluster } from '../layout/cluster';
import { Button } from '../components/button/button';
import { BoxV2 } from '../layout/box-v2';
import { Label } from '../components/text/label';
import { CommonComponentProps } from '../props/component-common.props';
import { isIOS } from 'react-device-detect';

type Props = CommonComponentProps & {
  variantStyle?: 'transparent' | 'white';
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
export const NavBar: React.FC<Props> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();

  const { ref: ref1, animate: animate1 } = useWebAnimations<HTMLDivElement>();
  const { ref: ref2, animate: animate2 } = useWebAnimations<HTMLDivElement>();

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
    if (isIOS) {
      const handler = updateDocumentBackgroundColor({ multiplier: 2 });
      window.document.addEventListener('touchmove', handler, { passive: true });
      window.document.addEventListener('scroll', handler, { passive: true });

      return () => {
        window.document.removeEventListener('touchmove', handler);
        window.document.removeEventListener('scroll', handler);
      };
    }
    // not needed for desktop
    // const handler = updateDocumentBackgroundColor({ multiplier: 1.5 });
    // window.addEventListener('scroll', handler, { passive: true });
    // return () => {
    //   window.removeEventListener('scroll', handler);
    // };
  }, []);

  // useEffect(() => {
  //   window.addEventListener('scroll', (event) => {
  //     // The target will follow the mouse cursor
  //     const scrollPosition = window.scrollY;
  //     const positionForWhite = 200;
  //     const ratio = (positionForWhite - scrollPosition) / positionForWhite;
  //     setScrollPosition(ratio);

  //     animate1({
  //       keyframes: [
  //         {
  //           backgroundColor: getCSSColor({
  //             h: 0,
  //             s: 10,
  //             l: 100,
  //             a: ratio < 0 ? 0 : ratio * 100,
  //           }),
  //           color: getCSSColor({
  //             h: 0,
  //             s: 10,
  //             l: ratio < 0 ? 0 : ratio * 100,
  //           }),
  //         },
  //       ],
  //       timing: { duration: 300, fill: 'forwards' },
  //     });
  //   });
  // }, [animate1]);

  return (
    <>
      {/* Mobile */}
      <Center
        as={'header'}
        className={`${styles.wrapper} ${styles.mobileMenu}`}
        ref={ref1}
        style={props.style}
        maxWidth={props.maxWidth}
      >
        <div className={styles.mobileWrapper}>
          <BoxV2 justifyContent={['flex-start']}>
            <Button>
              <IoMenu className={styles.icon} />
            </Button>
          </BoxV2>

          <BoxV2 justifyContent={['center']} padding={[cssTheme.sizing.var.x2, 0]}>
            {MobileSvgLogo || DesktopSvgLogo}
          </BoxV2>

          <BoxV2 justifyContent={['flex-end']} padding={[cssTheme.sizing.var.x2, cssTheme.sizing.var.x3]}>
            <Label>EN</Label>
          </BoxV2>
        </div>
      </Center>

      {/* Desktop */}
      <Center
        as={'header'}
        className={`${styles.wrapper} ${styles.desktopMenu}`}
        ref={ref2}
        style={props.style}
        maxWidth={props.maxWidth}
      >
        <Cluster justifyContent={['space-between']} alignItems={['center']}>
          <BoxV2 padding={[cssTheme.sizing.var.x2, 0]} className={styles.logoWrapper}>
            {DesktopSvgLogo || MobileSvgLogo}
          </BoxV2>

          <Cluster justifyContent={['space-between']} gap={[cssTheme.sizing.var.x4]}>
            {props.MenuLinks}
          </Cluster>
        </Cluster>
      </Center>
    </>
  );
};

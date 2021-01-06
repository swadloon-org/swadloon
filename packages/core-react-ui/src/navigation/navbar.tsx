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

type Props = {
  variantStyle?: 'transparent' | 'white';
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
      <Center as={'header'} className={`${styles.wrapper} ${styles.mobileMenu}`} ref={ref1}>
        <Cluster justifyContent={['space-between']}>
          <Button>
            <IoMenu className={styles.icon} />
          </Button>

          <BoxV2 padding={[cssTheme.sizing.var.x2, cssTheme.sizing.var.x3]}>{MobileSvgLogo}</BoxV2>

          <BoxV2 padding={[cssTheme.sizing.var.x2, cssTheme.sizing.var.x3]}>
            <Label>EN</Label>
          </BoxV2>
        </Cluster>
      </Center>

      {/* Desktop */}
      <Center as={'header'} className={`${styles.wrapper} ${styles.desktopMenu}`} ref={ref2}>
        <Cluster justifyContent={['space-between']}>
          <BoxV2 padding={[cssTheme.sizing.var.x3, 0]} className={styles.logoWrapper}>
            {DesktopSvgLogo}
          </BoxV2>

          <Cluster justifyContent={['space-between']} gap={cssTheme.sizing.var.x4}>
            {props.MenuLinks}
          </Cluster>
        </Cluster>
      </Center>
    </>
  );
};

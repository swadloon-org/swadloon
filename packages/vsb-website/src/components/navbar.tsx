import { BoxV2, Center, Cluster, getCSSColor, Label, useTreatTheme } from '@newrade/core-react-ui';
import useWebAnimations from '@wellyshen/use-web-animations';
import React, { useEffect, useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { useStyles } from 'react-treat';
import * as styleRefs from './navbar.treat';

type Props = {
  SvgLogo?: React.ReactNode;
  variantStyle: 'transparent' | 'white';
};

export const NavBar: React.FC<Props> = (props) => {
  const styles = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();

  const { ref: ref1, animate: animate1 } = useWebAnimations<HTMLDivElement>();
  const { ref: ref2, animate: animate2 } = useWebAnimations<HTMLDivElement>();
  const [scrollPosition, setScrollPosition] = useState<number>();

  const SvgLogo = props.SvgLogo ? (
    React.cloneElement(props.SvgLogo as React.ReactElement, {
      className: styles.logo,
    })
  ) : (
    <div className={styles.logo}>Logo</div>
  );

  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      // The target will follow the mouse cursor
      const scrollPosition = window.scrollY;
      const positionForWhite = 200;
      const ratio = (positionForWhite - scrollPosition) / positionForWhite;
      setScrollPosition(ratio);

      animate1({
        keyframes: [
          {
            backgroundColor: getCSSColor({
              h: 0,
              s: 10,
              l: 100,
              a: ratio < 0 ? 0 : ratio * 100,
            }),
            color: getCSSColor({
              h: 0,
              s: 10,
              l: ratio < 0 ? 0 : ratio * 100,
            }),
          },
        ],
        timing: { duration: 300, fill: 'forwards' },
      });
    });
  }, [animate1]);

  return (
    <>
      {/* Mobile */}
      <Center as={'header'} className={`${styles.wrapper} ${styles.mobileMenu}`} ref={ref1}>
        <Cluster justifyContent={['space-between']}>
          <IoMenu className={styles.icon} />
          <BoxV2 padding={[cssTheme.sizing.var.x2, cssTheme.sizing.var.x3]}>{SvgLogo}</BoxV2>
          <Label> </Label>
        </Cluster>
      </Center>

      {/* Desktop */}
      <Center as={'header'} className={`${styles.wrapper} ${styles.desktopMenu}`} ref={ref2}>
        <Cluster justifyContent={['space-between']}>
          <BoxV2 padding={[cssTheme.sizing.var.x2, cssTheme.sizing.var.x3]}>{SvgLogo}</BoxV2>
          <Cluster justifyContent={['space-between']} gap={cssTheme.sizing.var.x3}>
            <Label>Tout sur la vasectomie</Label>
            <Label>Examen pour Transport Canada</Label>
            <Label>La clinique</Label>
            <Label>Contact</Label>
          </Cluster>
        </Cluster>
      </Center>
    </>
  );
};

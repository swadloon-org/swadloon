import { VIEWPORT } from '@newrade/core-design-system';
import { TweenMax } from '@newrade/core-gsap-ui';
import { NavBarRefs, useTreatTheme } from '@newrade/core-react-ui';
import { useEffect, useState } from 'react';

export function useAnimateNavbarMobile({
  navbarRef,
  whiteStyle,
  viewport,
  sidebarOpened,
}: {
  navbarRef: React.MutableRefObject<NavBarRefs | undefined>;
  whiteStyle: boolean;
  viewport: VIEWPORT;
  sidebarOpened: boolean;
}) {
  const { cssTheme } = useTreatTheme();
  const [animationReady, setAnimationReady] = useState<boolean>(false);
  const [previousWhiteStyle, setPreviousWhiteStyle] = useState<boolean>(false);
  const [logoSmallScale, logoLargeScale] = [1, 4];

  useEffect(() => {
    const mobileNavbar = navbarRef?.current?.mobileNavbar;
    const duration = 0.3;

    if (viewport === VIEWPORT.desktop) {
      return;
    }

    if (!mobileNavbar) {
      return;
    }

    // set initial animation state
    if (!animationReady) {
      if (whiteStyle) {
        animateToWhite(0);
      } else {
        animateToTransparent(0);
      }

      setAnimationReady(true);
      return;
    }

    if (whiteStyle !== previousWhiteStyle) {
      if (whiteStyle) {
        animateToWhite(duration);
      } else {
        animateToTransparent(duration);
      }
    }

    function animateToTransparent(duration: number) {
      if (!mobileNavbar) {
        return;
      }

      TweenMax.to(mobileNavbar, {
        duration,
        autoAlpha: 1,
        ease: `expoScale(${logoSmallScale}, ${logoLargeScale})`,
        backgroundColor: `rgba(255,255,255,0)`,
        boxShadow: `0px 2px 8px 0px rgba(0, 0, 0, 0.0)`,
      });

      TweenMax.to(mobileNavbar.querySelector('svg[class*="button"]'), {
        duration,
        autoAlpha: 1,
        ease: `expoScale(${logoLargeScale}, ${logoSmallScale})`,
        stroke: `rgba(255,255,255,1)`,
        color: `rgba(255,255,255,1)`,
      });

      setPreviousWhiteStyle(false);
    }

    function animateToWhite(duration: number) {
      if (!mobileNavbar) {
        return;
      }

      TweenMax.to(mobileNavbar, {
        duration,
        ease: `expoScale(${logoLargeScale}, ${logoSmallScale})`,
        backgroundColor: `rgba(255,255,255,1)`,
        boxShadow: `0px 2px 8px 0px rgba(0, 0, 0, 0.15)`,
      });

      TweenMax.to(mobileNavbar.querySelector('svg[class*="button"'), {
        duration,
        ease: `expoScale(${logoLargeScale}, ${logoSmallScale})`,
        color: `rgba(255,255,255,1)`,
        stroke: cssTheme.colors.colorIntents.primary,
      });

      setPreviousWhiteStyle(true);
    }

    setPreviousWhiteStyle(whiteStyle);
  }, [
    navbarRef,
    animationReady,
    whiteStyle,
    viewport,
    logoLargeScale,
    logoSmallScale,
    previousWhiteStyle,
    cssTheme.colors.colorIntents.primary,
    sidebarOpened,
  ]);
}

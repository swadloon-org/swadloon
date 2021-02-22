import { VIEWPORT } from '@newrade/core-design-system';
import { TweenMax } from '@newrade/core-gsap-ui';
import { NavBarRefs, useTreatTheme } from '@newrade/core-react-ui';
import { useEffect, useState } from 'react';

export function useAnimateNavbarMobile({
  navbarRef,
  whiteStyle,
  viewport,
}: {
  navbarRef: React.MutableRefObject<NavBarRefs | undefined>;
  whiteStyle: boolean;
  viewport: VIEWPORT;
}) {
  const { cssTheme } = useTreatTheme();
  const [animationReady, setAnimationReady] = useState<boolean>(false);
  const [previousWhiteStyle, setPreviousWhiteStyle] = useState<boolean>(false);
  const [logoSmallScale, logoLargeScale] = [2, 4];

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

      TweenMax.to(mobileNavbar.querySelector('svg[class*="logo"]'), {
        duration,
        autoAlpha: 1,
        scale: logoLargeScale,
        translateY: '0',
        transformOrigin: 'center top',
      });

      TweenMax.to(mobileNavbar.querySelectorAll('.text-path,.small-dot'), {
        duration,
        visibility: 'visible',
        autoAlpha: 1,
        ease: `expoScale(${logoLargeScale}, ${logoSmallScale})`,
        stroke: `rgba(255,255,255,1)`,
        fill: `rgba(255,255,255,1)`,
      });

      TweenMax.to(mobileNavbar.querySelectorAll('.center-dot'), {
        duration,
        visibility: 'hidden',
        autoAlpha: 1,
        ease: `expoScale(${logoLargeScale}, ${logoSmallScale})`,
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
        stroke: cssTheme.colors.colorIntents.primary,
      });

      TweenMax.to(mobileNavbar.querySelector('svg[class*="logo"]'), {
        duration,
        autoAlpha: 1,
        translateY: '-29px',
      });

      TweenMax.to(mobileNavbar.querySelectorAll('.text-path,.small-dot'), {
        duration,
        visibility: 'hidden',
      });

      TweenMax.to(mobileNavbar.querySelectorAll('.center-dot'), {
        duration,
        visibility: 'visible',
        autoAlpha: 1,
        ease: `expoScale(${logoLargeScale}, ${logoSmallScale})`,
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
  ]);
}

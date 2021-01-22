import { NavBarRefs, useTreatTheme } from '@newrade/core-react-ui';
import { gsap, TweenMax } from 'gsap';
import { useEffect, useState } from 'react';
import { ExpoScaleEase } from '@newrade/core-gsap-ui/lib/plugins/EasePack';

gsap.registerPlugin(ExpoScaleEase as any);

export function useAnimateNavbar({
  navbarRef,
  whiteStyle,
}: {
  navbarRef: React.MutableRefObject<NavBarRefs | undefined>;
  whiteStyle: boolean;
}) {
  const { cssTheme } = useTreatTheme();
  const [animationReady, setAnimationReady] = useState<boolean>(false);
  const [previousWhiteStyle, setPreviousWhiteStyle] = useState<boolean>(false);
  const [logoSmallScale, logoLargeScale] = [1, 1.3];

  useEffect(() => {
    const desktopNavbar = navbarRef?.current?.desktopNavbar;
    const duration = 0.3;

    if (!desktopNavbar) {
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

    if (whiteStyle) {
      animateToWhite(duration);
    } else {
      animateToTransparent(duration);
    }

    function animateToTransparent(duration: number) {
      if (!desktopNavbar) {
        return;
      }

      TweenMax.to(desktopNavbar, {
        duration,
        autoAlpha: 1,
        ease: `expoScale(${logoSmallScale}, ${logoLargeScale})`,
        backgroundColor: `rgba(255,255,255,0)`,
        boxShadow: `0px 2px 8px 0px rgba(0, 0, 0, 0.0)`,
      });
      TweenMax.to(desktopNavbar.getElementsByTagName('svg'), {
        duration,
        autoAlpha: 1,
        ease: `expoScale(${logoSmallScale}, ${logoLargeScale})`,
        fill: `rgba(255,255,255,1)`,
        scale: logoLargeScale,
        transformOrigin: 'left top',
      });
      TweenMax.to(desktopNavbar.getElementsByTagName('a'), {
        duration,
        autoAlpha: 1,
        color: `rgba(255,255,255,1)`,
      });
    }

    function animateToWhite(duration: number) {
      if (!desktopNavbar) {
        return;
      }

      TweenMax.to(desktopNavbar, {
        duration,
        ease: `expoScale(${logoLargeScale}, ${logoSmallScale})`,
        backgroundColor: `rgba(255,255,255,1)`,
        boxShadow: `0px 2px 8px 0px rgba(0, 0, 0, 0.15)`,
      });
      TweenMax.to(desktopNavbar.getElementsByTagName('svg'), {
        duration,
        ease: `expoScale(${logoLargeScale}, ${logoSmallScale})`,
        transformOrigin: 'left top',
        scale: logoSmallScale,
        fill: cssTheme.colors.colorIntents.primary,
      });
      TweenMax.to(desktopNavbar.getElementsByTagName('a'), {
        duration,
        ease: 'expo.inOut',
        color: cssTheme.colors.colorIntents.primary,
      });
    }

    setPreviousWhiteStyle(whiteStyle);
  }, [navbarRef, animationReady, whiteStyle]);
}

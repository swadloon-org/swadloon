import { gsap, TweenMax } from '@newrade/core-gsap-ui';
import { useEffect, useState } from 'react';
import { useTreatTheme } from './use-treat-theme';
import { useBodyScrollLock } from './use-body-scroll-lock';
import { isMobile } from 'react-device-detect';
import ScrollToPlugin from '@newrade/core-gsap-ui/lib/plugins/ScrollToPlugin';

export function useAnimateSideBar({
  sidebarOpened,
  disableBodyScroll,
  ref,
}: {
  sidebarOpened?: boolean;
  disableBodyScroll?: boolean;
  ref: React.MutableRefObject<HTMLDivElement | null>;
}) {
  const { cssTheme } = useTreatTheme();
  const [gsapLoaded, setGsapLoaded] = useState<boolean>(false);
  const [animationReady, setAnimationReady] = useState<boolean>(false);
  const [locks, documentListenerAdded] = useBodyScrollLock({
    disableScrolling: isMobile && disableBodyScroll && sidebarOpened,
    ref,
  });

  useEffect(() => {
    setTimeout(() => {
      gsap.registerPlugin(ScrollToPlugin);
      setGsapLoaded(true);
    }, 1000);
  }, []);

  useEffect(() => {
    const sidebarRef = ref?.current;
    const duration = 0.2;

    if (!sidebarRef) {
      return;
    }

    if (!gsapLoaded) {
      return;
    }

    if (!animationReady) {
      TweenMax.set(sidebarRef, {
        autoAlpha: 1,
        x: `-100%`,
      });

      setAnimationReady(true);
    }

    if (sidebarOpened) {
      TweenMax.to(sidebarRef, {
        duration: duration,
        ease: `power4.out`,
        x: `0`,
      });

      TweenMax.to(sidebarRef, {
        duration: 0,
        scrollTo: 0,
      });
    }

    if (!sidebarOpened) {
      TweenMax.to(sidebarRef, {
        duration: duration,
        ease: `power4.int`,
        x: `-100%`,
      });
    }
  }, [gsapLoaded, sidebarOpened]);
}

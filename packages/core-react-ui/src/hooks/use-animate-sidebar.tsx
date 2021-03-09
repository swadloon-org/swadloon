import { gsap, TweenMax } from '@newrade/core-gsap-ui';
import ScrollToPlugin from '@newrade/core-gsap-ui/lib/plugins/ScrollToPlugin';
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useBodyScrollLock } from './use-body-scroll-lock';

export function useAnimateSideBar({
  sidebarOpened,
  disableBodyScroll,
  sideBarRef,
  sideBarBackdropRef,
}: {
  sidebarOpened?: boolean;
  disableBodyScroll?: boolean;
  sideBarRef: React.MutableRefObject<HTMLDivElement | null>;
  sideBarBackdropRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
  const [gsapLoaded, setGsapLoaded] = useState<boolean>(false);
  const [animationReady, setAnimationReady] = useState<boolean>(false);
  const [locks, documentListenerAdded] = useBodyScrollLock({
    disableScrolling: isMobile && disableBodyScroll && sidebarOpened,
    ref: sideBarRef,
  });

  useEffect(() => {
    setTimeout(() => {
      gsap.registerPlugin(ScrollToPlugin);
      setGsapLoaded(true);
    }, 1000);
  }, []);

  useEffect(() => {
    const sidebarRef = sideBarRef?.current;
    const duration = 0.2;

    if (!sidebarRef) {
      return;
    }

    if (!sideBarBackdropRef) {
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

      TweenMax.to(sideBarBackdropRef.current, {
        opacity: `0`,
        pointerEvents: 'none',
      });

      setAnimationReady(true);
      return;
    }

    if (sidebarOpened) {
      TweenMax.to(sidebarRef, {
        delay: `100ms`,
        duration: duration,
        ease: `power4.out`,
        x: `0`,
        scrollTo: 0,
      });

      TweenMax.to(sideBarBackdropRef.current, {
        autoAlpha: 1,
        duration,
        opacity: `1`,
        pointerEvents: 'auto',
      });
    }

    if (!sidebarOpened) {
      TweenMax.to(sidebarRef, {
        delay: `100ms`,
        duration: duration,
        ease: `power4.int`,
        x: `-100%`,
      });

      TweenMax.to(sideBarBackdropRef.current, {
        delay: 0.1,
        duration,
        opacity: `0`,
        pointerEvents: 'none',
      });
    }
  }, [gsapLoaded, sidebarOpened, sideBarRef, sideBarBackdropRef]);
}

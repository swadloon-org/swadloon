import { gsap, TweenMax } from '@newrade/core-gsap-ui';
import ScrollToPlugin from '@newrade/core-gsap-ui/lib/plugins/ScrollToPlugin';
import React, { useEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useStyles } from 'react-treat';
import { CSSAnimation } from '../animation/css-animation';
import { useBodyScrollLock } from '../hooks/use-body-scroll-lock';
import { Stack } from '../layout/stack';
import { PrimitiveProps } from '../primitive/primitive.props';
import { getMergedClassname } from '../utilities/component.utilities';
import * as styleRefs from './sidebar-container.treat';

type Props = PrimitiveProps & {
  /**
   * Forcefully disable the body scroll while the sidebar is opened
   */
  disableBodyScroll?: boolean;
  /**
   * State of the sidebar
   */
  sidebarOpened?: boolean;
  /**
   * Handle click on the backdrop
   */
  onClickBackdrop?: (event: React.MouseEvent) => void;
};

/**
 * Sidebar container that handles animation and events
 */
export const SidebarContainer: React.FC<Props> = ({
  id,
  style,
  className,
  sidebarOpened,
  disableBodyScroll,
  onClickBackdrop: onPressBackdrop,
  ...props
}) => {
  const { styles } = useStyles(styleRefs);
  const classNames = getMergedClassname([className, styles.wrapper]);

  /**
   * Animation
   */
  const sideBarRef = useRef<HTMLDivElement>(null);
  const sideBarBackdropRef = useRef<HTMLDivElement>(null);

  const [locks, documentListenerAdded] = useBodyScrollLock({
    disableScrolling: isMobile && disableBodyScroll && sidebarOpened,
    ref: sideBarRef,
  });

  return (
    <>
      <CSSAnimation
        style={style}
        className={classNames}
        animation={{
          duration: 200,
          name: sidebarOpened ? 'slideInLeft' : 'slideOutLeft',
          playState: 'running',
        }}
        AsElement={
          <nav ref={sideBarRef}>
            <Stack className={styles.content}>{props.children}</Stack>
          </nav>
        }
      ></CSSAnimation>

      <div className={styles.backdrop} onClick={onPressBackdrop} ref={sideBarBackdropRef}></div>
    </>
  );
};

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

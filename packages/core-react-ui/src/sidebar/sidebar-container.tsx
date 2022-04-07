import React, { useEffect, useRef, useState } from 'react';
import { useDrag } from 'react-use-gesture';

import { VIEWPORT } from '@newrade/core-design-system';

import { CSSAnimation, CSSAnimationHandle } from '../animation/css-animation';
import { useBodyScrollLock } from '../hooks/use-body-scroll-lock';
import { useFirstRender } from '../hooks/use-first-render.hook';
import { useViewportBreakpoint } from '../hooks/use-viewport';
import { PrimitiveProps } from '../primitive/primitive.props';
import { getMergedClassname } from '../utilities-iso';

import * as styles from './sidebar-container.css';

type Props = PrimitiveProps<'div' | 'nav'> & {
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
export const SidebarContainer = React.memo(
  React.forwardRef<HTMLElement, Props>(
    (
      { id, style, className, sidebarOpened, disableBodyScroll, onClickBackdrop, as, ...props },
      ref
    ) => {
      const { viewport } = useViewportBreakpoint();
      const isFirstRender = useFirstRender();
      const classNames = getMergedClassname([className, styles.wrapper]);

      /**
       *
       * Animation
       *
       */

      const sideBarRef = useRef<CSSAnimationHandle>(null);
      const mergedRef = ref;
      // todo merge refs and pass to css animation component

      const enableBodyScrollLock =
        viewport === VIEWPORT.mobile && disableBodyScroll && sidebarOpened;

      const [locks] = useBodyScrollLock({
        disableDocumentScrolling: enableBodyScrollLock,
        ref: sideBarRef?.current?.ref,
      });

      /**
       *
       * Gestures
       *
       */

      const bindDragGesture = useDrag(
        (state) => {
          const [swipeX] = state.swipe;

          if (!onClickBackdrop) {
            return;
          }

          if (swipeX < 0) {
            onClickBackdrop(state.event as React.MouseEvent);
          }
        },
        {
          axis: 'x',
          swipeDistance: 20,
          swipeDuration: 2000,
          swipeVelocity: 0.02,
        }
      );

      /**
       *
       * Render
       *
       */

      const [previousSidebarOpened, setPreviousSidebarOpened] = useState<boolean>(false);

      useEffect(() => {
        if (previousSidebarOpened !== sidebarOpened) {
          setPreviousSidebarOpened(!!sidebarOpened);
        }
      }, [sidebarOpened]);

      const shouldAnimate = !isFirstRender && previousSidebarOpened !== sidebarOpened;

      return (
        <>
          {/* Sidebar and content */}
          <CSSAnimation
            {...bindDragGesture()}
            ref={sideBarRef}
            style={style}
            className={classNames}
            animation={{
              delay: shouldAnimate ? 100 : 0,
              duration: shouldAnimate ? 260 : 0,
              name: sidebarOpened ? 'slideInLeftSidebar' : 'slideOutLeftSidebar',
              playState: 'running',
            }}
            as={'nav'}
          >
            {props.children}
          </CSSAnimation>

          {/* Backdrop */}
          <CSSAnimation
            classNames={[
              styles.backdrop,
              shouldAnimate ? (sidebarOpened ? styles.backdropActive : '') : '',
            ]}
            animation={{
              delay: shouldAnimate ? 100 : 0,
              duration: shouldAnimate ? 350 : 0,
              name: sidebarOpened ? 'fadeIn' : 'fadeOut',
              playState: 'running',
            }}
            onClick={onClickBackdrop}
          ></CSSAnimation>
        </>
      );
    }
  )
);

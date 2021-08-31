import { VIEWPORT } from '@newrade/core-design-system';
import React, { useRef } from 'react';
import { useStyles } from 'react-treat';
import { useDrag } from 'react-use-gesture';
import { CSSAnimation, CSSAnimationHandle } from '../animation/css-animation';
import { useBodyScrollLock } from '../hooks/use-body-scroll-lock';
import { useFirstRender } from '../hooks/use-first-render.hook';
import { useViewportBreakpoint } from '../hooks/use-viewport';
import { PrimitiveProps } from '../primitive/primitive.props';
import { getMergedClassname } from '../utilities/component.utilities';
import * as styleRefs from './sidebar-container.treat';

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
export const SidebarContainer = React.forwardRef<HTMLElement, Props>(
  (
    { id, style, className, sidebarOpened, disableBodyScroll, onClickBackdrop, as, ...props },
    ref
  ) => {
    const { styles } = useStyles(styleRefs);
    const { viewport } = useViewportBreakpoint();
    const classNames = getMergedClassname([className, styles.wrapper]);
    const isFirstRender = useFirstRender();

    /**
     * Animation
     */
    const sideBarRef = useRef<CSSAnimationHandle>(null);
    const mergedRef = ref;
    // todo merge refs and pass to css animation component

    const [locks, documentListenerAdded] = useBodyScrollLock({
      disableDocumentScrolling: viewport === VIEWPORT.mobile && disableBodyScroll && sidebarOpened,
      ref: sideBarRef?.current?.ref,
    });

    /**
     * Gestures
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

    return (
      <>
        {/* Sidebar and content */}
        <CSSAnimation
          {...bindDragGesture()}
          ref={sideBarRef}
          style={style}
          className={classNames}
          animation={{
            duration: isFirstRender ? 0 : 200,
            delay: 100,
            name: sidebarOpened ? 'slideInLeft' : 'slideOutLeft',
            playState: 'running',
          }}
          as={'nav'}
        >
          {props.children}
        </CSSAnimation>

        {/* Backdrop */}
        <CSSAnimation
          classNames={[styles.backdrop, sidebarOpened ? styles.backdropActive : '']}
          animation={{
            duration: isFirstRender ? 0 : 100,
            name: sidebarOpened ? 'fadeIn' : 'fadeOut',
            playState: 'running',
          }}
          onClick={onClickBackdrop}
        ></CSSAnimation>
      </>
    );
  }
);

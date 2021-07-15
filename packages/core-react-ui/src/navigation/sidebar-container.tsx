import React, { useRef } from 'react';
import { isMobile } from 'react-device-detect';
import { useStyles } from 'react-treat';
import { CSSAnimation, CSSAnimationHandle } from '../animation/css-animation';
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
  const sideBarRef = useRef<CSSAnimationHandle>(null);

  const [locks, documentListenerAdded] = useBodyScrollLock({
    disableDocumentScrolling: isMobile && disableBodyScroll && sidebarOpened,
    ref: sideBarRef?.current?.ref,
  });

  return (
    <>
      <CSSAnimation
        ref={sideBarRef}
        style={style}
        className={classNames}
        animation={{
          duration: 200,
          name: sidebarOpened ? 'slideInLeft' : 'slideOutLeft',
          playState: 'running',
        }}
        as={'nav'}
      >
        <Stack className={styles.content}>{props.children}</Stack>
      </CSSAnimation>

      <CSSAnimation
        classNames={[styles.backdrop, sidebarOpened ? styles.backdropActive : '']}
        animation={{
          duration: 100,
          name: sidebarOpened ? 'fadeIn' : 'fadeOut',
          playState: 'running',
        }}
        onClick={onPressBackdrop}
      ></CSSAnimation>
    </>
  );
};

import React, { useRef } from 'react';
import { useStyles } from 'react-treat';
import { useAnimateSideBar } from '../hooks/use-animate-sidebar';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { Stack } from '../layout/stack';
import { CommonComponentProps } from '../props/component-common.props';
import { getMergedClassname } from '../utilities/component.utilities';
import * as styleRefs from './sidebar.treat';

type Props = CommonComponentProps & {
  /**
   * Full heigh will go over the navbar
   */
  fullHeight?: boolean;
  /**
   * Hide the sidebar on desktop
   */
  mobileOnly?: boolean;
  /**
   * Forcefully disable the body scroll while the sidebar is opened
   */
  disableBodyScroll?: boolean;
  /**
   * State of the sidebar
   */
  sidebarOpened?: boolean;
};

/**
 * Generic navigation bar with an icon logo and language switch on mobile
 * and on desktop, a logo, and menu links
 */
export const SideBar: React.FC<Props> = ({
  id,
  style,
  className,
  sidebarOpened,
  fullHeight,
  disableBodyScroll,
  mobileOnly = true,
  ...props
}) => {
  const { styles } = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();
  const classNames = getMergedClassname([
    className,
    styles.wrapper,
    fullHeight ? styles.fullHeight : '',
    mobileOnly ? styles.mobileOnly : '',
  ]);

  /**
   * Animation
   */
  const ref = useRef<HTMLDivElement>(null);
  useAnimateSideBar({ sidebarOpened, ref, disableBodyScroll });

  return (
    <div className={classNames} ref={ref}>
      <Stack className={styles.navItemsWrapper}>
        {/* User provided links and content */}
        {props.children}
      </Stack>
    </div>
  );
};

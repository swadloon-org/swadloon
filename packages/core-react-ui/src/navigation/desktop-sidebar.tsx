import React, { useRef } from 'react';
import { useStyles } from 'react-treat';
import { Stack } from '../layout/stack';
import { PrimitiveProps } from '../primitive/primitive.props';
import { getMergedClassname } from '../utilities/component.utilities';
import * as styleRefs from './desktop-sidebar.treat';

type Props = PrimitiveProps & {
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
 * Generic navigation sidebar for desktop
 */
export const DesktopSideBar: React.FC<Props> = ({
  id,
  style,
  className,
  sidebarOpened,
  onClickBackdrop: onPressBackdrop,
  ...props
}) => {
  const { styles } = useStyles(styleRefs);
  const classNames = getMergedClassname([className, styles.wrapper]);

  /**
   * Animation
   */
  const sideBarRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <nav className={classNames} ref={sideBarRef} style={style}>
        <Stack className={styles.content}>{props.children}</Stack>
      </nav>
    </>
  );
};

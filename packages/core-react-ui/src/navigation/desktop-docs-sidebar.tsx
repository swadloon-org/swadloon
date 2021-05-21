import React, { useRef } from 'react';
import { useStyles } from 'react-treat';
import { Stack } from '../layout/stack';
import { CommonComponentProps } from '../props/component-common.props';
import { getMergedClassname } from '../utilities/component.utilities';
import * as styleRefs from './desktop-docs-sidebar.treat';

type Props = CommonComponentProps & {};

/**
 * Desktop Sidebar that floats near the content.
 */
export const DesktopDocsSideBar: React.FC<Props> = ({ id, style, className, ...props }) => {
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

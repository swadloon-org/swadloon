import React, { useRef } from 'react';

import { Stack } from '../layout/stack';
import { PrimitiveProps } from '../primitive/primitive.props';
import { getMergedClassname } from '../utilities-iso';

import * as styles from './desktop-docs-sidebar.css';

type Props = PrimitiveProps & {};

/**
 * Desktop Sidebar that floats near the content.
 */
export const DesktopDocsSideBar: React.FC<Props> = ({ id, style, className, ...props }) => {
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

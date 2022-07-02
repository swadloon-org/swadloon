import React from 'react';

import { Variant } from '@newrade/core-design-system';
import { SidebarContainer, Stack, useCommonProps } from '@newrade/core-react-ui';
import { getMergedClassname } from '@newrade/core-react-ui/utilities-iso';

import { SidebarProps } from './sidebar.props.js';
import * as styles from './sidebar-base.css.js';

type Props = SidebarProps & {
  contentClassName?: string;
};

const defaultProps: SidebarProps = {
  sidebar: {
    variant: Variant.primary,
  },
  disableBodyScroll: true,
  sidebarMode: 'floating',
};

/**
 * Wrapper for sidebar components.
 */
export const SidebarBase = React.forwardRef<HTMLElement, Props>(
  (
    {
      id,
      style,
      className,
      sidebar = defaultProps.sidebar,
      sidebarMode = defaultProps.sidebarMode,
      sidebarOpened,
      disableBodyScroll = defaultProps.disableBodyScroll,
      onClickMenuButton,
      onClickBackdrop,
      contentClassName,
      children,
      ...props
    },
    ref
  ) => {
    const variant = sidebar?.variant;
    /**
     * Styling
     */

    const commonProps = useCommonProps({
      id,
      style,
      className,
      classNames: [
        sidebarMode === 'sticky' ? styles.sticky : '',
        sidebarMode === 'hanging' ? styles.hanging : '',
      ],
      ...props,
    });

    /**
     * Content
     */
    const contentClassnames = getMergedClassname([contentClassName]);

    if (sidebarMode === 'sticky' || sidebarMode === 'hanging') {
      return (
        <nav ref={ref} {...commonProps}>
          <Stack className={contentClassnames}>{children}</Stack>
        </nav>
      );
    }

    return (
      <SidebarContainer
        as={'nav'}
        ref={ref}
        sidebarOpened={sidebarOpened}
        onClickBackdrop={onClickBackdrop}
        disableBodyScroll={disableBodyScroll}
        {...commonProps}
      >
        <Stack className={contentClassnames}>{children}</Stack>
      </SidebarContainer>
    );
  }
);

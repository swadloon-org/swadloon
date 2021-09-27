import { Variant } from '@newrade/core-design-system';
import { SidebarContainer, Stack, useTreatTheme } from '@newrade/core-react-ui';
import { getMergedClassname } from '@newrade/core-react-ui/utilities';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './sidebar-base.treat';
import { SidebarProps } from './sidebar.props';

type Props = SidebarProps & {
  contentClassName?: string;
};

const defaultProps: SidebarProps = {
  sidebar: {
    variant: Variant.primary,
  },
  sidebarMode: 'floating',
};

/**
 * Wrapper for sidebar components.
 */
export const SidebarBase = React.forwardRef<HTMLElement, Props>(
  (
    {
      style,
      sidebar = defaultProps.sidebar,
      sidebarMode = defaultProps.sidebarMode,
      sidebarOpened,
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
    const { cssTheme } = useTreatTheme();
    const styles = useStyles(styleRefs);

    /**
     * Content
     */
    const contentClassnames = getMergedClassname([contentClassName]);

    if (sidebarMode === 'hanging') {
      return (
        <nav ref={ref} style={style} className={styles.hanging}>
          <Stack className={contentClassnames}>{children}</Stack>
        </nav>
      );
    }

    return (
      <SidebarContainer
        as={'nav'}
        ref={ref}
        style={style}
        sidebarOpened={sidebarOpened}
        onClickBackdrop={onClickBackdrop}
        disableBodyScroll={true}
      >
        <Stack className={contentClassnames}>{children}</Stack>
      </SidebarContainer>
    );
  }
);

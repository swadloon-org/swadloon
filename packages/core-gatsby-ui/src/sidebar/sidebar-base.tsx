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
};

export const SidebarBase = React.forwardRef<HTMLElement, Props>(
  (
    {
      sidebar = defaultProps.sidebar,
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
    const contentClassnames = getMergedClassname([contentClassName, styles.content]);

    return (
      <SidebarContainer
        as={'nav'}
        ref={ref}
        sidebarOpened={sidebarOpened}
        onClickBackdrop={onClickBackdrop}
        disableBodyScroll={true}
      >
        <Stack className={contentClassnames}>{children}</Stack>
      </SidebarContainer>
    );
  }
);

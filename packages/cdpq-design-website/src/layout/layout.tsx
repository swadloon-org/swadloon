import loadable from '@loadable/component';
import {
  Main,
  MainWrapper,
  useCommonProps,
  useIsSSR,
  useTreatTheme,
  useViewportBreakpoint,
} from '@newrade/core-react-ui';
import { PageProps } from 'gatsby';
import React, { ReactNode, useState } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './layout.treat';

type LayoutProps = Partial<Omit<PageProps, 'children'> & { children: ReactNode }>;

const MobileSideBar = loadable<any>(
  () => {
    return import('@newrade/core-react-ui/lib/navigation/mobile-sidebar');
  },
  {
    resolveComponent: (
      components: typeof import('@newrade/core-react-ui/lib/navigation/mobile-sidebar')
    ) => components.MobileSideBar,
  }
);

export const Layout = React.memo<LayoutProps>((props) => {
  const isSSR = useIsSSR();

  /**
   * Styles & animations
   */
  const { cssTheme } = useTreatTheme();
  const styles = useStyles(styleRefs);

  /**
   * Sidebar
   */
  const [sidebarOpened, setSidebarOpened] = useState<boolean>(false);

  function handleClickMenuButton(event: React.MouseEvent) {
    setSidebarOpened(!sidebarOpened);
  }

  const { viewport } = useViewportBreakpoint();

  const commonProps = useCommonProps({ classNames: [styles.wrapper] });

  return (
    <MainWrapper {...commonProps}>
      <Main navbarPadding={true}>{props.children}</Main>
    </MainWrapper>
  );
});

import loadable from '@loadable/component';
import { FooterEnterprise } from '@newrade/core-gatsby-ui/src';
import {
  Main,
  MainWrapper,
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

  return (
    <MainWrapper className={styles.wrapper}>
      <Main navbarPadding={true} minHeight={true}>
        {props.children}
      </Main>
      <FooterEnterprise></FooterEnterprise>
    </MainWrapper>
  );
});

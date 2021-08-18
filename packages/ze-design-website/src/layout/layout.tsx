import { Variant } from '@newrade/core-design-system';
import { GatsbyLink, NavbarStandard } from '@newrade/core-gatsby-ui';
import {
  Main,
  MainWrapper,
  SidebarContainer,
  useCommonProps,
  useIsSSR,
  useTreatTheme,
  useViewportBreakpoint,
} from '@newrade/core-react-ui/src';
import { NavbarLayout } from '@newrade/core-website-api';
import { PageProps } from 'gatsby';
import React, { ReactNode, useState } from 'react';
import { useStyles } from 'react-treat';
import { navbarNavigation } from '../navigation/navigation';
import { Footer } from './footer';
import * as styleRefs from './layout.treat';

type LayoutProps = Partial<Omit<PageProps, 'children'> & { children: ReactNode }>;

export const Layout: React.FC<LayoutProps> = (props) => {
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
      <NavbarStandard
        navbar={{
          name: 'Navbar',
          variant: Variant.primaryReversed,
          layout: NavbarLayout.standard,
          navigation: navbarNavigation,
        }}
        HomeLink={<GatsbyLink to={'/'} />}
        onClickMenuButton={handleClickMenuButton}
      ></NavbarStandard>

      <SidebarContainer
        sidebarOpened={sidebarOpened}
        onClickBackdrop={handleClickMenuButton}
        disableBodyScroll={true}
      >
        Content Content Content Content Content
      </SidebarContainer>

      <Main minHeight={true}>{props.children}</Main>

      <Footer />
    </MainWrapper>
  );
};

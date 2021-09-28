import {
  FooterStandard,
  GatsbyLink,
  NavbarStandard,
  useI18next,
} from '@newrade/core-gatsby-ui/src';
import { LayoutDocsProps } from '@newrade/core-gatsby-ui/src/layout/docs.layout';
import {
  Main,
  MainWrapper,
  SidebarContainer,
  useCommonProps,
  useIsSSR,
  useTreatTheme,
  useViewportBreakpoint,
} from '@newrade/core-react-ui';
import React, { useState } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './layout.treat';

type LayoutProps = LayoutDocsProps;

export const Layout: React.FC<LayoutProps> = (props) => {
  const isSSR = useIsSSR();

  /**
   * Translation
   */

  const { getTranslatedObject } = useI18next();

  /**
   * Styles & animations
   */

  const { cssTheme } = useTreatTheme();
  const styles = useStyles(styleRefs);

  /**
   * Navigation
   */

  const navbar = props.navbar;
  const sidebar = props.sidebar;
  const footer = props.footer;

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
        navbar={navbar}
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

      <FooterStandard footer={footer}></FooterStandard>
    </MainWrapper>
  );
};

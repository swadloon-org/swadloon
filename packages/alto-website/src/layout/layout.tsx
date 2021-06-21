import loadable from '@loadable/component';
import { FooterRenderer } from '@newrade/core-gatsby-ui/src';
import {
  Main,
  MainWrapper,
  NavBar,
  useIsSSR,
  useTreatTheme,
  useViewportBreakpoint,
} from '@newrade/core-react-ui';
import { FooterAPI } from '@newrade/core-website-api';
import { graphql, PageProps, useStaticQuery } from 'gatsby';
import React, { ReactNode, useState } from 'react';
import { useStyles } from 'react-treat';
import { FooterQuery } from '../../types/graphql-types';
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

export const footerQuery = graphql`
  query Footer {
    site {
      ...SiteMetadata
    }

    footer: contentfulFooter(name: { eq: "Footer" }) {
      ...FooterFragment
    }
  }
`;

export const Layout = React.memo<LayoutProps>((props) => {
  const isSSR = useIsSSR();
  const footerData = useStaticQuery<FooterQuery>(footerQuery);

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
      <NavBar></NavBar>

      <Main navbarPadding={true} minHeight={true}>
        {props.children}
      </Main>

      <FooterRenderer footer={footerData.footer as FooterAPI} />
    </MainWrapper>
  );
});

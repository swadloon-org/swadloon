import { VIEWPORT } from '@newrade/core-design-system';
import { GatsbyLink } from '@newrade/core-gatsby-ui/src';
import {
  BoxV2,
  Label,
  Main,
  MainWrapper,
  NavBar,
  NavItem,
  NavItemGroup,
  Stack,
  useIsSSR,
  useViewportBreakpoint,
} from '@newrade/core-react-ui';
import { globalHistory } from '@reach/router';
import { title } from 'case';
import { PageProps } from 'gatsby';
import React, { ReactNode, useEffect, useState } from 'react';
import { useStyles } from 'react-treat';
import { cssTheme } from '../design-system/theme';
import { useNavigation } from '../hooks/use-layout-data';
import LogoSymbol from '../images/logo-symbol.svg';
import Logo from '../images/logo.svg';
import * as styleRefs from './layout.treat';

type LayoutProps = Partial<Omit<PageProps, 'children'> & { children: ReactNode }>;

let pathname: string | undefined = '/'; // needed for gsap callbacks

const MobileSideBar = React.lazy(() =>
  import('@newrade/core-react-ui/lib/navigation/mobile-sidebar').then((comp) => ({ default: comp.MobileSideBar }))
);

export const Layout = React.memo<LayoutProps>((props) => {
  const isSSR = useIsSSR();
  const { styles } = useStyles(styleRefs);

  /**
   * Data query
   */
  const navigation = useNavigation();

  /**
   * Sidebar
   */
  const [sidebarOpened, setSidebarOpened] = useState<boolean>(false);

  useEffect(() => {
    return globalHistory.listen((params) => {
      setSidebarOpened(false); // close sidebar upon navigation
      pathname = params.location?.pathname;
    });
  }, [globalHistory]);

  function handlePressMenuButton(event: React.MouseEvent) {
    setSidebarOpened(!sidebarOpened);
  }

  const { viewport } = useViewportBreakpoint();
  useEffect(() => {
    if (viewport === VIEWPORT.desktop) {
      setSidebarOpened(false);
    }
  }, [viewport]);

  return (
    <MainWrapper>
      <NavBar
        HomeLink={<GatsbyLink to={'/'} />}
        MobileSvgLogo={<LogoSymbol />}
        DesktopSvgLogo={<Logo />}
        MenuLinks={
          <>
            <Label>Services</Label>
            <Label>Technologies</Label>
            <Label>Agence</Label>
            <Label>Contact</Label>
          </>
        }
        menuOpened={sidebarOpened}
        onClickMenuButton={handlePressMenuButton}
      ></NavBar>

      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <MobileSideBar sidebarOpened={sidebarOpened} fullHeight={false} disableBodyScroll={true}>
            <Stack>
              <BoxV2
                padding={[cssTheme.sizing.var.x4, cssTheme.layout.var.contentMargins, cssTheme.sizing.var.x4]}
                style={{ flexDirection: 'column' }}
                justifyContent={['flex-start']}
                alignItems={['stretch']}
              >
                <Stack gap={[cssTheme.sizing.var.x4]}>
                  {navigation.items.map((item, index) => {
                    return (
                      <Stack key={index} gap={[`calc(2 * ${cssTheme.sizing.var.x1})`]}>
                        {item.items?.length ? (
                          <NavItemGroup>{title(item.displayName || item.name || 'Home')}</NavItemGroup>
                        ) : (
                          <NavItem
                            active={item.path === props.location?.pathname}
                            AsElement={<GatsbyLink to={item.path} noStyles={true} />}
                          >
                            {item.name || item.displayName}
                          </NavItem>
                        )}
                        {item.items?.length ? (
                          <Stack>
                            {item.items?.map((item, itemIndex) => {
                              return (
                                <NavItem
                                  key={itemIndex}
                                  active={item.path === props.location?.pathname}
                                  AsElement={<GatsbyLink to={item.path} noStyles={true} />}
                                >
                                  {item.name || item.displayName}
                                </NavItem>
                              );
                            })}
                          </Stack>
                        ) : null}
                      </Stack>
                    );
                  })}
                </Stack>
              </BoxV2>
            </Stack>
          </MobileSideBar>
        </React.Suspense>
      )}

      <Main>{props.children}</Main>
      {/* <Footer></Footer> */}
    </MainWrapper>
  );
});

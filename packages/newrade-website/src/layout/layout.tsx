import {
  HEADING,
  LABEL_SIZE,
  LinkVariant,
  PARAGRAPH_SIZE,
  TEXT_LEVEL,
  TEXT_STYLE,
  VIEWPORT,
} from '@newrade/core-design-system';
import { GatsbyLink } from '@newrade/core-gatsby-ui/src';
import { globalHistory } from '@reach/router';
import {
  BoxV2,
  Heading,
  Label,
  Main,
  MainWrapper,
  NavBar,
  NavItem,
  NavItemGroup,
  Paragraph,
  SideBar,
  Stack,
  useViewportBreakpoint,
} from '@newrade/core-react-ui';
import { Link, PageProps } from 'gatsby';
import { title } from 'process';
import React, { ReactNode, useEffect, useState } from 'react';
import { useStyles } from 'react-treat';
import { cssTheme } from '../design-system/theme';
import { useNavItems } from '../hooks/use-nav-items.hook';
import LogoSymbol from '../images/logo-symbol.svg';
import Logo from '../images/logo.svg';
import * as styleRefs from './layout.treat';
import { PressEvent } from '@react-types/shared';

type LayoutProps = Partial<Omit<PageProps, 'children'> & { children: ReactNode }>;

let pathname: string | undefined = '/'; // needed for gsap callbacks

export const Layout = React.memo<LayoutProps>((props) => {
  const { styles } = useStyles(styleRefs);

  /**
   * Data query
   */
  const navItems = useNavItems();
  const navItemsByDirName = new Set(navItems.map((item) => item.dirName));

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

  function handlePressMenuButton(event: PressEvent) {
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
        onPressMenuButton={handlePressMenuButton}
      ></NavBar>

      <SideBar sidebarOpened={sidebarOpened} fullHeight={false}>
        <Stack>
          <BoxV2
            padding={[cssTheme.sizing.var.x4, cssTheme.layout.var.contentMargins, cssTheme.sizing.var.x4]}
            style={{ flexDirection: 'column' }}
            justifyContent={['flex-start']}
            alignItems={['stretch']}
          >
            <Stack gap={[cssTheme.sizing.var.x4]}>
              {[...navItemsByDirName].map((dirName, index) => {
                return (
                  <Stack key={index} gap={[`calc(2 * ${cssTheme.sizing.var.x1})`]}>
                    {dirName === '' ? <NavItemGroup>Docs</NavItemGroup> : <NavItemGroup>{dirName || ''}</NavItemGroup>}
                    <Stack>
                      {navItems
                        .filter((item) => item.dirName === dirName)
                        .map((item, itemIndex) => {
                          return (
                            <NavItem
                              key={itemIndex}
                              active={item.path === props.location?.pathname}
                              AsElement={<GatsbyLink to={item.path} noStyles={true} />}
                            >
                              {item.name}
                            </NavItem>
                          );
                        })}
                    </Stack>
                  </Stack>
                );
              })}
            </Stack>
          </BoxV2>
        </Stack>
      </SideBar>

      <Main>{props.children}</Main>
      {/* <Footer></Footer> */}
    </MainWrapper>
  );
});

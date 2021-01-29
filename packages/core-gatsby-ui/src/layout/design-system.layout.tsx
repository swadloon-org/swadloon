import { VIEWPORT } from '@newrade/core-design-system';
import { GatsbyLink, useDesignSystemNavItems } from '@newrade/core-gatsby-ui/src';
import {
  BoxV2,
  Label,
  Main,
  MainWrapper,
  NavBar,
  NavItem,
  NavItemGroup,
  SideBar,
  Stack,
  useTreatTheme,
  useViewportBreakpoint,
} from '@newrade/core-react-ui';
import { PressEvent } from '@react-types/shared';
import { title } from 'case';
import { PageProps } from 'gatsby';
import React, { ReactNode, useEffect, useState } from 'react';
import { useIsSSR } from 'react-aria';

type LayoutProps = Partial<Omit<PageProps, 'children'> & { children: ReactNode }> & {
  MobileSvgLogo?: React.ReactNode;
  DesktopSvgLogo?: React.ReactNode;
};

export const LayoutDesignSystem = React.memo<LayoutProps>(({ MobileSvgLogo, DesktopSvgLogo, ...props }) => {
  const { viewport } = useViewportBreakpoint();

  /**
   * React Aria
   */
  const isSSR = useIsSSR();

  /**
   * Props
   */
  // const { styles } = useStyles(styleRefs);
  const { cssTheme } = useTreatTheme();
  const navItems = useDesignSystemNavItems();
  const navItemsByDirName = new Set(navItems?.map((item) => item.dirName));

  /**
   * Sidemenu
   */
  const [sidebarOpened, setSidebarOpened] = useState<boolean>(true);

  function handlePressMenuButton(event: PressEvent) {
    setSidebarOpened(!sidebarOpened);
  }

  useEffect(() => {
    setSidebarOpened(viewport === VIEWPORT.desktop ? true : false);
  }, [viewport]);

  return (
    <MainWrapper>
      <NavBar
        DesktopSvgLogo={DesktopSvgLogo}
        MobileSvgLogo={MobileSvgLogo}
        maxWidth={'100%'}
        MenuLinks={
          <>
            <Label>Design System</Label>
            <Label>Docs</Label>
            <Label>Core Docs</Label>
          </>
        }
        onPressMenuButton={handlePressMenuButton}
        menuOpened={sidebarOpened}
      ></NavBar>

      {navItems && !isSSR ? (
        <SideBar sidebarOpened={sidebarOpened} mobileOnly={false} disableBodyScroll={false}>
          <BoxV2
            style={{ flexDirection: 'column' }}
            padding={[cssTheme.sizing.var.x3]}
            justifyContent={['flex-start']}
            alignItems={['stretch']}
          >
            <Stack gap={[cssTheme.sizing.var.x4]}>
              {[...navItemsByDirName].map((dirName, index) => {
                return (
                  <Stack key={index} gap={[`calc(2 * ${cssTheme.sizing.var.x1})`]}>
                    {dirName === '' ? (
                      <NavItemGroup>Docs</NavItemGroup>
                    ) : (
                      <NavItemGroup>{title(dirName || '')}</NavItemGroup>
                    )}
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
        </SideBar>
      ) : null}

      <Main navbarPadding={true}>{props.children}</Main>
    </MainWrapper>
  );
});

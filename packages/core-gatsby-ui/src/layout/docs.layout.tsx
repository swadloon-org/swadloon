import { SITE_LANGUAGES } from '@newrade/core-common';
import { HEADING, VIEWPORT } from '@newrade/core-design-system';
import { GatsbyLink, NavbarDocs } from '@newrade/core-gatsby-ui/src';
import {
  BoxV2,
  DesktopDocsItemGroup,
  DesktopDocsSideBar,
  DesktopDocsSidebarItem,
  Heading,
  Link,
  Main,
  MainWrapper,
  NavItem,
  Stack,
  useTreatTheme,
  useViewportBreakpoint,
  viewportContext,
  ViewportProvider,
} from '@newrade/core-react-ui';
import { PageProps } from 'gatsby';
import React, { ReactNode, useEffect, useState } from 'react';
import { useDocsNavigation } from '../hooks/use-docs-navigation-data.hook';

export type LayoutDocsProps = Partial<Omit<PageProps, 'children'> & { children: ReactNode }> & {
  MobileSvgLogo?: React.ReactNode;
  DesktopSvgLogo?: React.ReactNode;
};

export const LayoutDocs = React.memo<LayoutDocsProps>(
  ({ MobileSvgLogo, DesktopSvgLogo, ...props }) => {
    const navigation = useDocsNavigation({
      locales: [SITE_LANGUAGES.EN, SITE_LANGUAGES.EN_CA],
    }); // should prob be passed by the parent
    const { cssTheme } = useTreatTheme();

    /**
     * Handle sidebar events
     */
    const { viewport } = useViewportBreakpoint();
    const [mobileSidebarOpened, setMobileSidebarOpened] = useState<boolean>(false);

    useEffect(() => {
      let timeout: number;
      if (viewport === VIEWPORT.desktop) {
        timeout = window.setTimeout(() => {
          setMobileSidebarOpened(false);
        }, 300);
      }
      return () => {
        if (timeout !== undefined) {
          window.clearTimeout(timeout);
        }
      };
    }, [viewport]);

    function handleClickMenuButton(event: React.MouseEvent) {
      setMobileSidebarOpened(!mobileSidebarOpened);
    }

    const HomeLink = <GatsbyLink to={'/'} />;
    const MenuLinks = (
      <>
        <Link AsElement={<GatsbyLink to={'/design-system'} />}>Design System</Link>
      </>
    );

    return (
      <MainWrapper>
        <NavbarDocs
          tagText={'Docs'}
          HomeLink={HomeLink}
          DesktopSvgLogo={DesktopSvgLogo}
          MobileSvgLogo={MobileSvgLogo}
          maxWidth={'100%'}
          MenuLinks={MenuLinks}
          onClickMenuButton={handleClickMenuButton}
          menuOpened={mobileSidebarOpened}
        ></NavbarDocs>

        <DesktopDocsSideBar>
          <BoxV2
            style={{ flexDirection: 'column' }}
            padding={[cssTheme.sizing.var.x4, 0, cssTheme.sizing.var.x7]}
            justifyContent={['flex-start']}
            alignItems={['stretch']}
          >
            <Stack gap={[cssTheme.sizing.var.x4]}>
              <Heading variant={HEADING.h3}>Documentation</Heading>

              <Stack>
                {navigation.items.map((item, index) => {
                  return (
                    <Stack key={index} gap={[`calc(2 * ${cssTheme.sizing.var.x1})`]}>
                      {item.items?.length ? (
                        <DesktopDocsItemGroup
                          label={item.displayName || item.name || 'Design System'}
                        >
                          {item.items?.length ? (
                            <Stack>
                              {item.items?.map((item, itemIndex) => {
                                return (
                                  <DesktopDocsSidebarItem
                                    key={itemIndex}
                                    active={item.path === props.location?.pathname}
                                    AsElement={<GatsbyLink to={item.path} noStyles={true} />}
                                  >
                                    {item.displayName || item.name}
                                  </DesktopDocsSidebarItem>
                                );
                              })}
                            </Stack>
                          ) : null}
                        </DesktopDocsItemGroup>
                      ) : (
                        <NavItem
                          active={item.path === props.location?.pathname}
                          AsElement={<GatsbyLink to={item.path} noStyles={true} />}
                        >
                          {item.displayName || item.name}
                        </NavItem>
                      )}
                    </Stack>
                  );
                })}
              </Stack>
            </Stack>
          </BoxV2>
        </DesktopDocsSideBar>

        <Main
          navbarPadding={true}
          desktopSidebarPadding={true}
          desktopAsidePadding={true}
          minHeight={false}
        >
          <ViewportProvider context={viewportContext}>{props.children}</ViewportProvider>
        </Main>
      </MainWrapper>
    );
  }
);

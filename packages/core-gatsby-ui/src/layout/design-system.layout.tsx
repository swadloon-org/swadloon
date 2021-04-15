import { MDXProvider } from '@mdx-js/react';
import { HEADING, VIEWPORT } from '@newrade/core-design-system';
import { GatsbyLink, NavbarDocs, useDesignSystemNavigation } from '@newrade/core-gatsby-ui/src';
import {
  BoxV2,
  DesktopDocsItemGroup,
  DesktopDocsSideBar,
  DesktopDocsSidebarItem,
  Heading,
  Label,
  Link,
  Main,
  MainWrapper,
  NavItem,
  Stack,
  Tag,
  useIsSSR,
  useTreatTheme,
  useViewportBreakpoint,
  viewportContext,
  ViewportProvider,
} from '@newrade/core-react-ui';
import { Theme } from '@newrade/core-react-ui/lib/design-system';
import { GlobalCSSVariables } from '@newrade/core-react-ui/lib/global/global-css-variables';
import { GlobalResetCSS } from '@newrade/core-react-ui/lib/global/global-reset-css';
import { PageProps } from 'gatsby';
import React, { ReactNode, useEffect, useState } from 'react';
import { ThemeWrapper } from '../context/theme-wrapper';

export type DesignSystemLayoutProps = Partial<Omit<PageProps, 'children'> & { children: ReactNode }> & {
  /**
   * Label for the documentation navbar
   */
  docLabel?: string;
  /**
   * A reference to the treatTheme that can be used to pass
   * an other theme to specific sections of the app.
   */
  treatThemeRef: string;
  /**
   * Theme object from Treat
   */
  theme: Theme;
  /**
   * Logo component for mobile
   */
  MobileSvgLogo?: React.ReactNode;
  /**
   * Logo component for Desktop
   */
  DesktopSvgLogo?: React.ReactNode;
};

export const LayoutDesignSystem: React.FC<DesignSystemLayoutProps> = function ({
  treatThemeRef,
  theme,
  MobileSvgLogo,
  DesktopSvgLogo,
  ...props
}) {
  const navigation = useDesignSystemNavigation();
  const isSSR = useIsSSR();
  const { cssTheme } = useTreatTheme();
  const { viewport } = useViewportBreakpoint();
  const [mobileSidebarOpened, setMobileSidebarOpened] = useState<boolean>(false);

  function handleClickMenuButton(event: React.MouseEvent) {
    setMobileSidebarOpened(!mobileSidebarOpened);
  }

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

  const HomeLink = <GatsbyLink to={'/'} />;
  const MenuLinks = (
    <>
      <Link AsElement={<GatsbyLink to={'/docs'} />}>Docs</Link>
    </>
  );

  return (
    <MainWrapper>
      <NavbarDocs
        tagText={'Design System'}
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
                      <DesktopDocsItemGroup label={item.displayName || item.name || 'Design System'}>
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

      <Main navbarPadding={true} desktopSidebarPadding={true} desktopAsidePadding={true} minHeight={false}>
        <ViewportProvider context={viewportContext}>
          <MDXProvider
            components={{
              Label: Label,
              Tag: Tag,
              ThemeWrapper: (props: any) => <ThemeWrapper treatThemeRef={treatThemeRef} theme={theme} {...props} />,
            }}
          >
            <GlobalCSSVariables>
              <GlobalResetCSS>{props.children}</GlobalResetCSS>
            </GlobalCSSVariables>
          </MDXProvider>
        </ViewportProvider>
      </Main>
    </MainWrapper>
  );
};

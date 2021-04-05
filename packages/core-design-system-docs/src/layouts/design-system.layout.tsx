import loadable from '@loadable/component';
import { MDXProvider } from '@mdx-js/react';
import {
  ButtonIcon,
  ButtonSize,
  HEADING,
  LABEL_SIZE,
  TEXT_STYLE,
  Variant,
  VIEWPORT,
} from '@newrade/core-design-system';
import { GatsbyLink, useDesignSystemNavigation } from '@newrade/core-gatsby-ui/src';
import {
  BoxV2,
  Button,
  Cluster,
  Heading,
  Label,
  Link,
  Main,
  MainWrapper,
  mdxComponents,
  NavBar,
  NavItem,
  NavItemGroup,
  Stack,
  TreatThemeProvider,
  useIsSSR,
  useTreatTheme,
  useViewportBreakpoint,
  viewportContext,
  ViewportProvider,
} from '@newrade/core-react-ui';
import { Theme } from '@newrade/core-react-ui/lib/design-system';
import { GlobalCSSVariables } from '@newrade/core-react-ui/lib/global/global-css-variables';
import { GlobalResetCSS } from '@newrade/core-react-ui/lib/global/global-reset-css';
import { IoClose } from '@react-icons/all-files/io5/IoClose';
import { title } from 'case';
import { PageProps } from 'gatsby';
import React, { ReactNode, useEffect, useState } from 'react';
import { TreatProvider } from 'react-treat';
import { DesignSystemFooter } from './design-system-footer';

const MobileSideBar = loadable<any>(() => import('@newrade/core-react-ui/lib/navigation/mobile-sidebar'), {
  resolveComponent: (components: typeof import('@newrade/core-react-ui/lib/navigation/mobile-sidebar')) =>
    components.MobileSideBar,
});

const DesktopSideBar = loadable<any>(() => import('@newrade/core-react-ui/lib/navigation/desktop-sidebar'), {
  resolveComponent: (components: typeof import('@newrade/core-react-ui/lib/navigation/desktop-sidebar')) =>
    components.DesktopSideBar,
});

export type DesignSystemLayoutProps = Partial<Omit<PageProps, 'children'> & { children: ReactNode }> & {
  treatThemeRef: string;
  theme: Theme;
  MobileSvgLogo?: React.ReactNode;
  DesktopSvgLogo?: React.ReactNode;
};

export const LayoutDesignSystem = React.memo<DesignSystemLayoutProps>(
  ({ treatThemeRef, theme, MobileSvgLogo, DesktopSvgLogo, ...props }) => {
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

    return (
      <MainWrapper>
        <NavBar
          HomeLink={<GatsbyLink to={'/'} />}
          DesktopSvgLogo={DesktopSvgLogo}
          MobileSvgLogo={MobileSvgLogo}
          maxWidth={'100%'}
          MenuLinks={
            <>
              <Link AsElement={<GatsbyLink to={'/docs'} />}>Docs</Link>
            </>
          }
          onClickMenuButton={handleClickMenuButton}
          menuOpened={mobileSidebarOpened}
        ></NavBar>

        <MobileSideBar
          sidebarOpened={mobileSidebarOpened}
          disableBodyScroll={true}
          onClickBackdrop={handleClickMenuButton}
          style={{ backgroundColor: cssTheme.colors.colors.grey[800] }}
        >
          <Stack>
            <BoxV2
              style={{ flexDirection: 'column' }}
              alignItems={['stretch']}
              padding={[
                cssTheme.sizing.var.x2,
                cssTheme.sizing.var.x1,
                cssTheme.sizing.var.x3,
                cssTheme.layout.var.contentMargins,
              ]}
            >
              <Cluster>
                {DesktopSvgLogo}

                <Button
                  aria-label={'Menu'}
                  size={ButtonSize.large}
                  collapsePadding={'left'}
                  variant={Variant.tertiary}
                  icon={ButtonIcon.icon}
                  Icon={<IoClose fill={'white'} />}
                  onClick={handleClickMenuButton}
                ></Button>
              </Cluster>
            </BoxV2>

            <BoxV2
              style={{ flexDirection: 'column' }}
              justifyContent={['flex-start']}
              alignItems={['stretch']}
              padding={[0, cssTheme.layout.var.contentMargins, cssTheme.sizing.var.x5]}
            >
              <Stack gap={[cssTheme.sizing.var.x5]}>
                <Stack gap={[cssTheme.sizing.var.x3]}>
                  <Heading variant={HEADING.h4} variantLevel={Variant.primaryReversed}>
                    Système de design
                  </Heading>
                  <Label
                    variant={LABEL_SIZE.xSmall}
                    variantStyle={TEXT_STYLE.boldUppercase}
                    variantLevel={Variant.primaryReversed}
                  >
                    Caisse de dépôt et placement
                  </Label>
                </Stack>
              </Stack>
            </BoxV2>

            <BoxV2
              padding={[cssTheme.sizing.var.x5, 0, cssTheme.sizing.var.x6]}
              style={{ flexDirection: 'column', backgroundColor: cssTheme.colors.colors.grey[0] }}
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

        <DesktopSideBar>
          <BoxV2
            style={{ flexDirection: 'column' }}
            padding={[cssTheme.sizing.var.x4, 0, cssTheme.sizing.var.x7]}
            justifyContent={['flex-start']}
            alignItems={['stretch']}
          >
            <Stack gap={[cssTheme.sizing.var.x5]}>
              {navigation.items.map((item, index) => {
                return (
                  <Stack key={index} gap={[`calc(2 * ${cssTheme.sizing.var.x1})`]}>
                    {item.items?.length ? (
                      <NavItemGroup>{title(item.displayName || item.name || 'Design System')}</NavItemGroup>
                    ) : (
                      <NavItem
                        active={item.path === props.location?.pathname}
                        AsElement={<GatsbyLink to={item.path} noStyles={true} />}
                      >
                        {item.displayName || item.name}
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
                              {item.displayName || item.name}
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
        </DesktopSideBar>

        <Main navbarPadding={true}>
          <TreatProvider theme={treatThemeRef}>
            <ViewportProvider context={viewportContext}>
              <TreatThemeProvider theme={theme}>
                <MDXProvider components={mdxComponents}>
                  <GlobalCSSVariables>
                    <GlobalResetCSS>{props.children}</GlobalResetCSS>
                  </GlobalCSSVariables>
                </MDXProvider>
              </TreatThemeProvider>
            </ViewportProvider>
          </TreatProvider>
        </Main>

        <DesignSystemFooter />
      </MainWrapper>
    );
  }
);

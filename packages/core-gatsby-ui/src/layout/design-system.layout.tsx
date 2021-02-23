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
  SideBar,
  Stack,
  useIsSSR,
  useTreatTheme,
  useViewportBreakpoint,
} from '@newrade/core-react-ui';
import { title } from 'case';
import { graphql, PageProps, useStaticQuery } from 'gatsby';
import React, { ReactNode, useEffect, useState } from 'react';
import { getNavigationFromPageNodes } from '../utilities/navigation.utilities';

type LayoutProps = Partial<Omit<PageProps, 'children'> & { children: ReactNode }> & {
  MobileSvgLogo?: React.ReactNode;
  DesktopSvgLogo?: React.ReactNode;
};

const query = graphql`
  query DesignSystemLayoutPage {
    pages: allSitePage(filter: { path: { glob: "/design-system/{**,*}" } }) {
      totalCount
      nodes {
        id
        path
        context {
          siteMetadata {
            description
            languages {
              defaultLangKey
              langs
            }
            siteEnv
            siteUrl
            title
          }
          id
          name
          locale
          layout
          template
        }
      }
    }
  }
`;

export const LayoutDesignSystem = React.memo<LayoutProps>(({ MobileSvgLogo, DesktopSvgLogo, ...props }) => {
  /**
   * Data / Queries
   */
  const data = useStaticQuery(query);

  /**
   * React Aria
   */
  const isSSR = useIsSSR();

  /**
   * Props
   */
  const { cssTheme } = useTreatTheme();
  const navigation = getNavigationFromPageNodes({
    name: 'Design system side navigation',
    pageNodes: data?.pages.nodes,
    sortOrderDirectories: ['', 'typography', 'colors', 'foundations', 'components', 'content', 'effects', 'motion'],
    sortOrderItems: [
      '',
      'typography',
      'colors',
      'color-intents',
      'sizing',
      'pages',
      'sections',
      'blocks',
      'layout-components',
    ],
  });

  /**
   * Sidemenu
   */
  const { viewport } = useViewportBreakpoint();
  const [sidebarOpened, setSidebarOpened] = useState<boolean>(true);

  function handlePressMenuButton(event: React.MouseEvent) {
    setSidebarOpened(!sidebarOpened);
  }

  useEffect(() => {
    setSidebarOpened(viewport === VIEWPORT.desktop ? true : false);
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
            <Label>Design System</Label>
            <Label>Docs</Label>
            <Label>Core Docs</Label>
          </>
        }
        onClickMenuButton={handlePressMenuButton}
        menuOpened={sidebarOpened}
      ></NavBar>

      {navigation.items && !isSSR ? (
        <SideBar sidebarOpened={sidebarOpened} mobileOnly={false} disableBodyScroll={false}>
          <BoxV2
            style={{ flexDirection: 'column' }}
            padding={[cssTheme.sizing.var.x4, cssTheme.sizing.var.x3, cssTheme.sizing.var.x7]}
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
        </SideBar>
      ) : null}

      <Main navbarPadding={true}>{props.children}</Main>
    </MainWrapper>
  );
});

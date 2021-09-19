import loadable from '@loadable/component';
import { SITE_LANGUAGES } from '@newrade/core-common';
import { HEADING, PARAGRAPH_SIZE } from '@newrade/core-design-system';
import {
  GatsbyMarkdownFilePageContext,
  SOURCE_INSTANCE_NAME,
} from '@newrade/core-gatsb-config/config';
import {
  BoxV2,
  DesktopDocsSideBar,
  Heading,
  Link,
  Main,
  MainWrapper,
  Stack,
  useTreatTheme,
  viewportContext,
  ViewportProvider,
} from '@newrade/core-react-ui';
import { NavComponent, SidebarLayout } from '@newrade/core-website-api';
import { PageProps } from 'gatsby';
import React, { ReactNode } from 'react';
import { useNavigationAPI } from '../hooks/use-navigation-api.hook';
import { GatsbyLink } from '../links/gatsby-link';
import { NavbarDocs } from '../navbar/navbar-docs';
import { useSidebarState } from '../sidebar/sidebar.hooks';

/**
 * Sidebar
 */
const LazySidebarStandard = loadable(() => import('../sidebar/sidebar-standard'), {
  resolveComponent: (components: typeof import('../sidebar/sidebar-standard')) =>
    components.SidebarStandard,
});

export type LayoutDocsProps = Partial<
  Omit<PageProps<any, GatsbyMarkdownFilePageContext>, 'children'> & { children: ReactNode }
> & {};

export const LayoutDocs: React.FC<LayoutDocsProps> = (props) => {
  const { cssTheme } = useTreatTheme();

  // Todo `locales` should prob be passed by the parent

  const navigationDocs = useNavigationAPI({
    navigationName: 'Docs navigation',
    navigationComponent: NavComponent.sidebar,
    includeLocales: [SITE_LANGUAGES.EN, SITE_LANGUAGES.EN_CA],
  });

  const navigationCoreDocs = useNavigationAPI({
    navigationName: 'Docs navigation',
    navigationComponent: NavComponent.sidebar,
    includeLocales: [SITE_LANGUAGES.EN, SITE_LANGUAGES.EN_CA],
  });

  const navigation =
    props.pageContext?.sourceInstance === SOURCE_INSTANCE_NAME.DOCS
      ? navigationDocs
      : navigationCoreDocs;

  /**
   * Sidebar
   */
  const [sidebarOpened, setSidebarOpened] = useSidebarState({ initial: false });

  function handleClickMenuButton(event: React.MouseEvent) {
    setSidebarOpened(!sidebarOpened);
  }

  const HomeLink = <GatsbyLink to={'/'} />;
  const MenuLinks = (
    <>
      <Link variantSize={PARAGRAPH_SIZE.small} AsElement={<GatsbyLink to={'/docs/'} />}>
        Docs
      </Link>

      <Link variantSize={PARAGRAPH_SIZE.small} AsElement={<GatsbyLink to={'/design-system/'} />}>
        Design System
      </Link>

      <Link variantSize={PARAGRAPH_SIZE.small} AsElement={<GatsbyLink to={'/core-docs/'} />}>
        Core Docs
      </Link>
    </>
  );

  const tag =
    props.location?.pathname && /core-docs/gi.test(props.location?.pathname) ? 'core docs' : 'docs';

  return (
    <MainWrapper>
      <NavbarDocs
        tagText={tag}
        HomeLink={HomeLink}
        maxWidth={'100%'}
        MenuLinks={MenuLinks}
        onClickMenuButton={handleClickMenuButton}
        menuOpened={sidebarOpened}
        enableLayoutModeButton={false}
      ></NavbarDocs>

      <LazySidebarStandard
        sidebar={{
          name: 'Docs Sidebar',
          layout: SidebarLayout.standard,
        }}
        sidebarOpened={sidebarOpened}
        onClickMenuButton={handleClickMenuButton}
        onClickBackdrop={handleClickMenuButton}
        activePathname={props.location?.pathname}
        HomeLink={<GatsbyLink to={'/'} />}
      ></LazySidebarStandard>

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
              {navigation.subNavigation?.map((nav, index) => {
                return (
                  <Stack key={index} gap={[`calc(2 * ${cssTheme.sizing.var.x1})`]}>
                    <div>{nav?.label}</div>
                    {/* {item.items?.length ? (
                      <DesktopDocsItemGroup
                        label={item.displayName || item.name || 'Design System'}
                      >
                        {item.items?.length ? (
                          <Stack>
                            {item.items?.map((item, itemIndex) => {
                              const status = item.frontmatter?.status;
                              const version = item.frontmatter?.version;
                              const deprecated = item.frontmatter?.deprecated;

                              return (
                                <DesktopDocsSidebarItem
                                  key={itemIndex}
                                  active={item.path === props.location?.pathname}
                                  AsElement={<GatsbyLink to={item.path} noStyles={true} />}
                                >
                                  <span style={{ marginRight: 4 }}>
                                    {item.displayName || item.name}
                                  </span>{' '}
                                  {version ? (
                                    <Tag
                                      size={TagSize.small}
                                      variant={Variant.tertiary}
                                    >{`${version}`}</Tag>
                                  ) : null}{' '}
                                  {status ? (
                                    <Tag
                                      size={TagSize.small}
                                      variant={Variant.secondary}
                                    >{`${status.toUpperCase()}`}</Tag>
                                  ) : null}{' '}
                                </DesktopDocsSidebarItem>
                              );
                            })}
                          </Stack>
                        ) : null}
                      </DesktopDocsItemGroup>
                    ) : (
                      <SidebarItem
                        active={item.path === props.location?.pathname}
                        AsElement={<GatsbyLink to={item.path} noStyles={true} />}
                      >
                        {item.displayName || item.name}
                      </SidebarItem>
                    )} */}
                  </Stack>
                );
              })}
            </Stack>
          </Stack>
        </BoxV2>
      </DesktopDocsSideBar>

      <Main
        contentPadding={true}
        navbarPadding={true}
        desktopSidebarPadding={true}
        desktopAsidePadding={true}
        minHeight={true}
      >
        <ViewportProvider context={viewportContext}>{props.children}</ViewportProvider>
      </Main>
    </MainWrapper>
  );
};

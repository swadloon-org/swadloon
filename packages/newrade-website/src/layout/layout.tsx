import loadable from '@loadable/component';
import {
  ButtonIcon,
  ButtonSize,
  HEADING,
  PARAGRAPH_SIZE,
  Variant,
  VIEWPORT,
} from '@newrade/core-design-system';
import { FooterRenderer, GatsbyLink } from '@newrade/core-gatsby-ui/src';
import {
  BoxV2,
  Button,
  Cluster,
  Heading,
  Link,
  Main,
  MainWrapper,
  NavBar,
  NavItem,
  Stack,
  useCommonProps,
  useIsSSR,
  useTreatTheme,
  useViewportBreakpoint,
} from '@newrade/core-react-ui';
import { FooterAPI } from '@newrade/core-website-api';
import { globalHistory } from '@reach/router';
import { IoClose } from '@react-icons/all-files/io5/IoClose';
import { graphql, PageProps, useStaticQuery } from 'gatsby';
import React, { ReactNode, useEffect, useState } from 'react';
import { useStyles } from 'react-treat';
import { clientEnv } from '../../types/dot-env-client';
import { FooterQuery } from '../../types/graphql-types';
import { useCompanyInfo, usePagesNavigation } from '../hooks/use-layout-data';
import LogoSymbol from '../images/logo-symbol.svg';
import LogoText from '../images/logo-text.svg';
import Logo from '../images/logo.svg';
import * as styleRefs from './layout.treat';

type LayoutProps = Partial<Omit<PageProps, 'children'> & { children: ReactNode }>;

let pathname: string | undefined = '/'; // needed for gsap callbacks

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

  /**
   * Data query
   */
  const navigation = usePagesNavigation();
  const { companyInfo, companyAddress } = useCompanyInfo();
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

  useEffect(() => {
    pathname = props.location?.pathname;

    return globalHistory.listen((params) => {
      setSidebarOpened(false); // close sidebar upon navigation
      pathname = params.location?.pathname;
    });
  }, [globalHistory]);

  function handleClickMenuButton(event: React.MouseEvent) {
    setSidebarOpened(!sidebarOpened);
  }

  const { viewport } = useViewportBreakpoint();

  useEffect(() => {
    let timeout: number;
    if (viewport === VIEWPORT.desktop) {
      timeout = window.setTimeout(() => {
        setSidebarOpened(false);
      }, 300);
    }
    return () => {
      if (timeout !== undefined) {
        window.clearTimeout(timeout);
      }
    };
  }, [viewport]);

  const commonProps = useCommonProps({ classNames: [styles.wrapper] });

  return (
    <MainWrapper {...commonProps}>
      <NavBar
        HomeLink={<GatsbyLink to={'/'} />}
        MobileSvgLogo={<LogoText height={20} />}
        DesktopSvgLogo={<Logo />}
        MenuLinks={
          navigation.items.length ? (
            <>
              {navigation.items.map((item: any, itemIndex: number) => {
                return (
                  <Link
                    variantSize={PARAGRAPH_SIZE.medium}
                    AsElement={<GatsbyLink to={`${item.path}`} />}
                    key={itemIndex}
                  >
                    {item.name || item.displayName}
                  </Link>
                );
              })}
            </>
          ) : null
        }
        // <>
        //   <Link variantSize={PARAGRAPH_SIZE.medium} AsElement={<GatsbyLink to={'/vasectomie/'} />}>
        //     Tout sur la vasectomie
        //   </Link>
        //   <Link variantSize={PARAGRAPH_SIZE.medium} AsElement={<GatsbyLink to={'/examen-pour-transports-canada/'} />}>
        //     Examen pour Transport Canada
        //   </Link>
        //   <Link variantSize={PARAGRAPH_SIZE.medium} AsElement={<GatsbyLink to={'/equipe/'} />}>
        //     La clinique
        //   </Link>
        //   <Link variantSize={PARAGRAPH_SIZE.medium} AsElement={<GatsbyLink to={'/contact/'} />}>
        //     Contact
        //   </Link>
        // </>
        onClickMenuButton={handleClickMenuButton}
        menuOpened={sidebarOpened}
      ></NavBar>

      <MobileSideBar
        sidebarOpened={sidebarOpened}
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
              <LogoSymbol fill={'white'} />

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
                  Newrade
                </Heading>
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
              {navigation.items.map((item: any, index: number) => {
                return (
                  <Stack key={index} gap={[`calc(2 * ${cssTheme.sizing.var.x1})`]}>
                    {item.items?.length ? (
                      <Stack>
                        <NavItem
                          active={'/' === props.location?.pathname}
                          AsElement={<GatsbyLink to={'/'} noStyles={true} />}
                        >
                          {'Accueil'}
                        </NavItem>
                        {item.items?.map((item: any, itemIndex: number) => {
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

      <Main minHeight={true}>{props.children}</Main>

      <FooterRenderer
        footer={{ ...(footerData.footer as FooterAPI), version: clientEnv.APP_VERSION }}
      />
    </MainWrapper>
  );
});

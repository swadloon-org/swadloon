import {
  ButtonIcon,
  ButtonSize,
  HEADING,
  LinkVariant,
  PARAGRAPH_SIZE,
  TEXT_LEVEL,
  Variant,
  VIEWPORT,
} from '@newrade/core-design-system';
import { GatsbyLink } from '@newrade/core-gatsby-ui/src';
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
  Paragraph,
  Stack,
  useIsSSR,
  useTreatTheme,
  useViewportBreakpoint,
} from '@newrade/core-react-ui';
import { globalHistory } from '@reach/router';
import { IoClose } from '@react-icons/all-files/io5/IoClose';
import { PageProps } from 'gatsby';
import React, { ReactNode, useEffect, useState } from 'react';
import { useStyles } from 'react-treat';
import { useCompanyInfo, usePagesNavigation } from '../hooks/use-layout-data';
import LogoSymbol from '../images/logos/logo-symbol.svg';
import LogoText from '../images/logos/logo-text.svg';
import Logo from '../images/logos/logo.svg';
import { Footer } from './footer';
import * as styleRefs from './layout.treat';

type LayoutProps = Partial<Omit<PageProps, 'children'> & { children: ReactNode }>;

let pathname: string | undefined = '/'; // needed for gsap callbacks

const MobileSideBar = React.lazy(() =>
  import('@newrade/core-react-ui/lib/navigation/mobile-sidebar').then((comp) => ({ default: comp.MobileSideBar }))
);

export const Layout = React.memo<LayoutProps>((props) => {
  const isSSR = useIsSSR();

  /**
   * Data query
   */
  const navigation = usePagesNavigation();
  const { companyInfo, companyAddress } = useCompanyInfo();

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

  return (
    <MainWrapper className={styles.wrapper}>
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

      {!isSSR && (
        <React.Suspense fallback={<div />}>
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
                    <Heading variant={HEADING.h4} variantLevel={TEXT_LEVEL.primaryReversed}>
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

              <BoxV2
                style={{ flexDirection: 'column', backgroundColor: cssTheme.colors.colors.grey[50] }}
                justifyContent={['flex-start']}
                alignItems={['stretch']}
                padding={[cssTheme.sizing.var.x5, cssTheme.layout.var.contentMargins]}
              >
                <Stack gap={[cssTheme.sizing.var.x5]}>
                  <Stack gap={[cssTheme.sizing.var.x4]}>
                    <Link
                      variantSize={PARAGRAPH_SIZE.small}
                      variant={LinkVariant.underline}
                      href={`mailto:${companyAddress?.email}`}
                    >
                      {companyAddress?.email}
                    </Link>
                    <Link
                      variantSize={PARAGRAPH_SIZE.small}
                      variant={LinkVariant.underline}
                      href={`tel:${companyAddress?.phone}`}
                    >
                      {companyAddress?.phone}
                    </Link>
                    <Link
                      variantSize={PARAGRAPH_SIZE.small}
                      variant={LinkVariant.underline}
                      href={`fax:${companyAddress?.fax}`}
                    >
                      {companyAddress?.fax}
                    </Link>
                    <Link
                      variantSize={PARAGRAPH_SIZE.small}
                      variant={LinkVariant.underline}
                      href={'https://goo.gl/maps/nndYpgQLkbDC6c7S7'}
                      target="blank"
                    >
                      {companyAddress?.addressLine1}
                    </Link>
                  </Stack>

                  <Paragraph variant={PARAGRAPH_SIZE.small}>{companyInfo?.copyright}</Paragraph>
                </Stack>
              </BoxV2>
            </Stack>
          </MobileSideBar>
        </React.Suspense>
      )}

      <Main minHeight={true}>{props.children}</Main>

      <Footer id={'footer'} style={{ zIndex: cssTheme.layout.zIndex.content }}></Footer>
    </MainWrapper>
  );
});

import {
  ButtonIcon,
  ButtonSize,
  HEADING,
  LABEL_SIZE,
  PARAGRAPH_SIZE,
  TEXT_LEVEL,
  TEXT_STYLE,
  Variant,
  VIEWPORT,
} from '@newrade/core-design-system';
import { GatsbyLink } from '@newrade/core-gatsby-ui/src';
import ExpoScaleEase from '@newrade/core-gsap-ui/lib/plugins/EasePack';
import ScrollTrigger from '@newrade/core-gsap-ui/lib/plugins/ScrollTrigger';
import { gsap } from '@newrade/core-gsap-ui/src';
import {
  BoxV2,
  Button,
  Cluster,
  Heading,
  Label,
  Link,
  Main,
  MainWrapper,
  NavBar,
  NavBarRefs,
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
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { useStyles } from 'react-treat';
import { useAnimateNavbarDesktop } from '../hook/use-animate-navbar-desktop';
import { useAnimateNavbarMobile } from '../hook/use-animate-navbar-mobile';
import { useCompanyInfo, usePagesNavigation } from '../hook/use-layout-data';
import LogoSymbol from '../images/logo-symbol.svg';
import Logo from '../images/logo.svg';
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
      setNavbarStyle(params.location?.pathname === '/' ? 'transparent' : 'white'); // set the navbar style
      pathname = params.location?.pathname;
    });
  }, [globalHistory]);

  function handleClickMenuButton(event: React.MouseEvent) {
    setSidebarOpened(!sidebarOpened);
  }

  const { viewport } = useViewportBreakpoint();

  /**
   * Navbar
   */
  const defaultNavbarState = props.location?.pathname === '/' ? 'transparent' : 'white';
  const navbarRef = useRef<NavBarRefs>();
  const [navbarStyle, setNavbarStyle] = useState<'white' | 'transparent'>(defaultNavbarState);
  const [gsapLoaded, setGsapLoaded] = useState<boolean>(false);
  useAnimateNavbarDesktop({ navbarRef, whiteStyle: navbarStyle === 'white', viewport });
  useAnimateNavbarMobile({ navbarRef, whiteStyle: navbarStyle === 'white', viewport, sidebarOpened });

  gsap.registerPlugin(ScrollTrigger, ExpoScaleEase);

  useEffect(() => {
    setTimeout(() => {
      setGsapLoaded(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!gsapLoaded) {
      return;
    }

    /**
     * @see https://greensock.com/docs/v3/Plugins/ScrollTrigger
     */
    const scrollTrigger = new ScrollTrigger({
      scrub: 1,
      delay: 1,
      toggleActions: `play none reverse none`,
      start: '40vh',
      end: '40vh',
      onEnter: () => {
        setNavbarStyle('white');
      },
      onEnterBack: function () {
        if (pathname === '/') {
          setNavbarStyle('transparent');
        }
      },
    });

    return () => {
      if (scrollTrigger) {
        scrollTrigger.kill?.();
      }
    };
  }, [gsapLoaded]);

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
        ref={navbarRef}
        HomeLink={<GatsbyLink to={'/'} />}
        MobileSvgLogo={
          navbarStyle === 'transparent' ? (
            <Logo
              height={40}
              style={{
                transform: `scale(2) translate(0, 17px)`,
                fill: 'white',
              }}
            />
          ) : (
            <LogoSymbol />
          )
        }
        DesktopSvgLogo={<Logo />}
        MenuLinks={
          <>
            <Link variantSize={PARAGRAPH_SIZE.medium} AsElement={<GatsbyLink to={'/vasectomie/'} />}>
              Tout sur la vasectomie
            </Link>
            <Link variantSize={PARAGRAPH_SIZE.medium} AsElement={<GatsbyLink to={'/examen-pour-transports-canada/'} />}>
              Examen pour Transports Canada
            </Link>
            <Link variantSize={PARAGRAPH_SIZE.medium} AsElement={<GatsbyLink to={'/equipe/'} />}>
              La clinique
            </Link>
            <Link variantSize={PARAGRAPH_SIZE.medium} AsElement={<GatsbyLink to={'/contact/'} />}>
              Contact
            </Link>
          </>
        }
        onClickMenuButton={handleClickMenuButton}
        menuOpened={sidebarOpened}
      ></NavBar>

      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <MobileSideBar
            sidebarOpened={sidebarOpened}
            disableBodyScroll={true}
            onClickBackdrop={handleClickMenuButton}
            style={{
              background: `linear-gradient(180deg, ${cssTheme.colors.colors.grey[800]} 0%, ${cssTheme.colors.colors.grey[800]} 50%, ${cssTheme.colors.colors.grey[50]} 50%, ${cssTheme.colors.colors.grey[50]} 100%)`,
            }}
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
                <Cluster
                  style={{
                    height: `auto`, // bug on safari
                  }}
                >
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
                      Clinique Dr. Pierre Boucher Jr.
                    </Heading>
                    <Label
                      variant={LABEL_SIZE.xSmall}
                      variantStyle={TEXT_STYLE.boldUppercase}
                      variantLevel={TEXT_LEVEL.primaryReversed}
                    >
                      Omnipraticien CCMF (MU)
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
                          <Stack>
                            <NavItem
                              active={'/' === props.location?.pathname}
                              AsElement={<GatsbyLink to={'/'} noStyles={true} />}
                            >
                              {'Accueil'}
                            </NavItem>
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

              <BoxV2
                style={{ flexDirection: 'column', backgroundColor: cssTheme.colors.colors.grey[50] }}
                justifyContent={['flex-start']}
                alignItems={['stretch']}
                padding={[cssTheme.sizing.var.x5, cssTheme.layout.var.contentMargins]}
              >
                <Paragraph variant={PARAGRAPH_SIZE.xSmall}>{companyInfo?.copyright}</Paragraph>
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

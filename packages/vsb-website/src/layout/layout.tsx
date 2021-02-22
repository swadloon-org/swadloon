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
import ExpoScaleEase from '@newrade/core-gsap-ui/lib/plugins/EasePack';
import MorphSVGPlugin from '@newrade/core-gsap-ui/lib/plugins/MorphSVGPlugin';
import ScrollTrigger from '@newrade/core-gsap-ui/lib/plugins/ScrollTrigger';
import { gsap } from '@newrade/core-gsap-ui/src';
import {
  BoxV2,
  Heading,
  Label,
  Link,
  Main,
  MainWrapper,
  NavBar,
  NavBarRefs,
  NavItem,
  NavItemGroup,
  Paragraph,
  Stack,
  useIsSSR,
  useTreatTheme,
  useViewportBreakpoint,
} from '@newrade/core-react-ui';
import { globalHistory } from '@reach/router';
import { PressEvent } from '@react-types/shared';
import { title } from 'case';
import { PageProps } from 'gatsby';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { useAnimateNavbarDesktop } from '../hook/use-animate-navbar-desktop';
import { useAnimateNavbarMobile } from '../hook/use-animate-navbar-mobile';
import { useCompanyInfo, usePagesNavigation } from '../hook/use-layout-data';
import LogoMorph from '../images/logo-morph.svg';
import Logo from '../images/logo.svg';
import { Footer } from './footer';

type LayoutProps = Partial<Omit<PageProps, 'children'> & { children: ReactNode }>;

let pathname: string | undefined = '/'; // needed for gsap callbacks

const SideBar = React.lazy(() =>
  import('@newrade/core-react-ui/lib/navigation/sidebar').then((comp) => ({ default: comp.SideBar }))
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

  function handlePressMenuButton(event: PressEvent) {
    setSidebarOpened(!sidebarOpened);
  }

  const { viewport } = useViewportBreakpoint();
  useEffect(() => {
    if (viewport === VIEWPORT.desktop) {
      setSidebarOpened(false);
    }
  }, [viewport]);

  /**
   * Navbar
   */
  const defaultNavbarState = props.location?.pathname === '/' ? 'transparent' : 'white';
  const navbarRef = useRef<NavBarRefs>();
  const [navbarStyle, setNavbarStyle] = useState<'white' | 'transparent'>(defaultNavbarState);
  const [gsapLoaded, setGsapLoaded] = useState<boolean>(false);
  useAnimateNavbarDesktop({ navbarRef, whiteStyle: navbarStyle === 'white', viewport });
  useAnimateNavbarMobile({ navbarRef, whiteStyle: navbarStyle === 'white', viewport });

  gsap.registerPlugin(ScrollTrigger, ExpoScaleEase, MorphSVGPlugin);

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

  return (
    <MainWrapper>
      <NavBar
        ref={navbarRef}
        HomeLink={<GatsbyLink to={'/'} />}
        MobileSvgLogo={<LogoMorph height={20} />}
        DesktopSvgLogo={<Logo />}
        MenuLinks={
          <>
            <Link variantSize={PARAGRAPH_SIZE.medium} AsElement={<GatsbyLink to={'/vasectomie/'} />}>
              Tout sur la vasectomie
            </Link>
            <Link variantSize={PARAGRAPH_SIZE.medium} AsElement={<GatsbyLink to={'/examen-pour-transport-canada/'} />}>
              Examen pour Transport Canada
            </Link>
            <Link variantSize={PARAGRAPH_SIZE.medium} AsElement={<GatsbyLink to={'/equipe/'} />}>
              La clinique
            </Link>
            <Link variantSize={PARAGRAPH_SIZE.medium} AsElement={<GatsbyLink to={'/contact/'} />}>
              Contact
            </Link>
          </>
        }
        onPressMenuButton={handlePressMenuButton}
        menuOpened={sidebarOpened}
      ></NavBar>

      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <SideBar sidebarOpened={sidebarOpened} fullHeight={true} disableBodyScroll={true}>
            <Stack>
              <BoxV2
                padding={[cssTheme.sizing.var.x4, cssTheme.layout.var.contentMargins, cssTheme.sizing.var.x4]}
                style={{ flexDirection: 'column' }}
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

              <BoxV2
                style={{ flexDirection: 'column', backgroundColor: cssTheme.colors.colors.grey[800] }}
                justifyContent={['flex-start']}
                alignItems={['stretch']}
                padding={[cssTheme.sizing.var.x5, cssTheme.layout.var.contentMargins]}
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
                      Omnipraticien CCMF
                    </Label>
                  </Stack>

                  <Stack gap={[cssTheme.sizing.var.x4]}>
                    <Link
                      variantLevel={TEXT_LEVEL.primaryReversed}
                      variantSize={PARAGRAPH_SIZE.small}
                      variant={LinkVariant.underline}
                      href={`mailto:${companyAddress?.email}`}
                    >
                      {companyAddress?.email}
                    </Link>
                    <Link
                      variantLevel={TEXT_LEVEL.primaryReversed}
                      variantSize={PARAGRAPH_SIZE.small}
                      variant={LinkVariant.underline}
                      href={`tel:${companyAddress?.phone}`}
                    >
                      {companyAddress?.phone}
                    </Link>
                    <Link
                      variantLevel={TEXT_LEVEL.primaryReversed}
                      variantSize={PARAGRAPH_SIZE.small}
                      variant={LinkVariant.underline}
                      href={`fax:${companyAddress?.fax}`}
                    >
                      {companyAddress?.fax}
                    </Link>
                    <Link
                      variantLevel={TEXT_LEVEL.primaryReversed}
                      variantSize={PARAGRAPH_SIZE.small}
                      variant={LinkVariant.underline}
                      href={'https://goo.gl/maps/nndYpgQLkbDC6c7S7'}
                      target="blank"
                    >
                      {companyAddress?.addressLine1}
                      <br />
                      {companyAddress?.addressLine2}
                    </Link>
                  </Stack>

                  <Paragraph variantLevel={TEXT_LEVEL.primaryReversed} variant={PARAGRAPH_SIZE.small}>
                    {companyInfo?.copyright}
                  </Paragraph>
                </Stack>
              </BoxV2>
            </Stack>
          </SideBar>
        </React.Suspense>
      )}

      <Main minHeight={true}>{props.children}</Main>

      <Footer id={'footer'} style={{ zIndex: cssTheme.layout.zIndex.content }}></Footer>
    </MainWrapper>
  );
});

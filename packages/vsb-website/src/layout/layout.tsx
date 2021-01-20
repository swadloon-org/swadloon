import { GatsbyLink } from '@newrade/core-gatsby-ui/src';
import { Link, Main, MainWrapper, NavBar, NavBarRefs, useTreatTheme } from '@newrade/core-react-ui';
import { graphql, PageProps, useStaticQuery } from 'gatsby';
import { gsap, TweenMax } from 'gsap';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useStyles } from 'react-treat';
import { LayoutAllSitePageQuery } from '../../types/graphql-types';
import { Footer } from '../components/footer';
import { ExpoScaleEase } from '../gsap/EasePack';
import ScrollTrigger from '../gsap/ScrollTrigger';
import LogoSymbol from '../images/logo-symbol.svg';
import Logo from '../images/logo.svg';
import '../services/i18n.service';
import * as styleRefs from './layout.treat';
import { PARAGRAPH_SIZE } from '@newrade/core-design-system';

gsap.registerPlugin(ScrollTrigger, ExpoScaleEase as any);

type LayoutProps = Partial<Omit<PageProps, 'children'> & { children: ReactNode }>;

const query = graphql`
  query LayoutAllSitePage {
    pages: allSitePage {
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
          dirName
          locale
          layout
        }
      }
    }
  }
`;

export const Layout = React.memo<LayoutProps>((props) => {
  /**
   * Data query
   */
  const pages = useStaticQuery<LayoutAllSitePageQuery>(query);
  /**
   * i18n
   */
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  /**
   * Styles & animations
   */
  const { styles } = useStyles(styleRefs);
  const { cssTheme } = useTreatTheme();
  const navbarRef = useRef<NavBarRefs>();
  const [animationReady, setAnimationReady] = useState<boolean>(false);

  useEffect(() => {
    const desktopNavbar = navbarRef?.current?.desktopNavbar;
    const duration = 0.2;

    if (!desktopNavbar) {
      return;
    }

    const [logoSmallScale, logoLargeScale] = [1, 1.3];

    if (!animationReady) {
      TweenMax.set(desktopNavbar, {
        autoAlpha: 1,
        backgroundColor: `rgba(255,255,255,0)`,
        boxShadow: `0px 2px 8px 0px rgba(0, 0, 0, 0.0)`,
      });
      TweenMax.set(desktopNavbar.getElementsByTagName('svg'), {
        autoAlpha: 1,
        fill: `rgba(255,255,255,1)`,
        scale: logoLargeScale,
        transformOrigin: 'left top',
      });
      TweenMax.set(desktopNavbar.getElementsByTagName('a'), {
        autoAlpha: 1,
        color: `rgba(255,255,255,1)`,
      });

      setAnimationReady(true);
    }
    const timeline = gsap.timeline({
      /**
       * @see https://greensock.com/docs/v3/Plugins/ScrollTrigger
       */
      scrollTrigger: {
        scrub: 1,
        toggleActions: `play none reverse none`,
        trigger: '#footer',
        start: 'top bottom',
        end: 'top 100%',
      },
    });

    timeline.to(
      desktopNavbar,
      {
        duration: duration,
        ease: `expoScale(${logoLargeScale}, ${logoSmallScale})`,
        backgroundColor: `rgba(255,255,255,1)`,
        boxShadow: `0px 2px 8px 0px rgba(0, 0, 0, 0.15)`,
      },
      0
    );
    timeline.to(
      desktopNavbar.getElementsByTagName('svg'),
      {
        duration,
        ease: `expoScale(${logoLargeScale}, ${logoSmallScale})`,
        transformOrigin: 'left top',
        scale: logoSmallScale,
        fill: cssTheme.colors.colorIntents.primary,
      },
      0
    );
    timeline.to(
      desktopNavbar.getElementsByTagName('a'),
      {
        duration,
        ease: 'expo.inOut',
        color: cssTheme.colors.colorIntents.primary,
      },
      0
    );

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <MainWrapper>
      <NavBar
        ref={navbarRef}
        HomeLink={<GatsbyLink to={'/'} />}
        MobileSvgLogo={<LogoSymbol />}
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
      ></NavBar>
      <Main minHeight={true}>{props.children}</Main>
      <Footer id={'footer'}></Footer>
    </MainWrapper>
  );
});

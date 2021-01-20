import { GatsbyLink } from '@newrade/core-gatsby-ui/src';
import { Link, Main, MainWrapper, NavBar, useTreatTheme, NavBarRefs } from '@newrade/core-react-ui';
import { graphql, PageProps, useStaticQuery } from 'gatsby';
import gsap, { TweenMax } from 'gsap';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useStyles } from 'react-treat';
import { LayoutAllSitePageQuery } from '../../types/graphql-types';
import { Footer } from '../components/footer';
import ScrollTrigger from '../gsap/ScrollTrigger';
import LogoSymbol from '../images/logo-symbol.svg';
import Logo from '../images/logo.svg';
import '../services/i18n.service';
import * as styleRefs from './layout.treat';

gsap.registerPlugin(ScrollTrigger);

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
    const duration = 0.3;

    if (!desktopNavbar) {
      return;
    }

    if (!animationReady) {
      TweenMax.set(desktopNavbar, {
        autoAlpha: 1,
        backgroundColor: `rgba(255,255,255,0)`,
        boxShadow: `0px 2px 8px 0px rgba(0, 0, 0, 0.0)`,
      });
      TweenMax.set(desktopNavbar.getElementsByTagName('svg'), {
        autoAlpha: 1,
        fill: `rgba(255,255,255,1)`,
        height: `100%`,
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
        scrub: 0.3,
        snap: 1,
        toggleActions: `play none reverse none`,
        trigger: '#footer',
        start: 'top bottom',
        end: 'top 60%',
      },
    });

    // animateToTransparent.to(desktopNavbar.getElementsByTagName('a'), {
    //   color: `rgba(255,255,255,1)`,
    //   duration,
    //   position: 0,
    // });
    // animateToTransparent.to(desktopNavbar.getElementsByTagName('svg'), {
    //   fill: `rgba(255,255,255,1)`,
    //   duration,
    //   position: 0,
    // });
    // animateToTransparent.to(desktopNavbar, {
    //   backgroundColor: `rgba(255,255,255,0)`,
    //   duration,
    //   position: 0,
    // });

    // const animateToWhite = gsap.timeline({
    //   /**
    //    * @see https://greensock.com/docs/v3/Plugins/ScrollTrigger
    //    */
    //   scrollTrigger: {
    //     scrub: 0.3,
    //     toggleActions: `play none reverse none`,
    //     trigger: '#footer',
    //     start: 'top bottom',
    //     end: 'top 60%',
    //   },
    // });

    timeline.to(
      desktopNavbar,
      {
        backgroundColor: `rgba(255,255,255,1)`,
        duration,
        boxShadow: `0px 2px 8px 0px rgba(0, 0, 0, 0.15)`,
      },
      0
    );
    timeline.to(
      desktopNavbar.getElementsByTagName('svg'),
      {
        fill: cssTheme.colors.colorIntents.primary,
        height: `90%`,
        duration,
      },
      0
    );
    timeline.to(
      desktopNavbar.getElementsByTagName('a'),
      {
        color: cssTheme.colors.colorIntents.primary,
        duration,
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
        MobileSvgLogo={<LogoSymbol />}
        DesktopSvgLogo={<Logo />}
        MenuLinks={
          <>
            <Link AsElement={<GatsbyLink to={'/vasectomie/'} />}>Tout sur la vasectomie</Link>
            <Link AsElement={<GatsbyLink to={'/examen-pour-transport-canada/'} />}>Examen pour Transport Canada</Link>
          </>
        }
      ></NavBar>
      <Main minHeight={true}>{props.children}</Main>
      <Footer id={'footer'}></Footer>
    </MainWrapper>
  );
});

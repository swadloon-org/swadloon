import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { useStyles } from 'react-treat';
import Icon from '../illustrations/Icon/IconBars.svg';
import { Link } from '../ui/link';
import { Button } from './button';
import * as stylesRef from './nav-bar.treat';
import { NavigationProps } from '../layouts/page.layout';
import { PAGE_NAME } from '../templates/page.template';

type OwnProps = {
  onOpenSideMenu: () => void;
} & NavigationProps;

export const NavBar: React.FC<OwnProps> = ({
  currentPageName,
  location,
  pages,
  onOpenSideMenu,
  facebookPageURL,
  linkedinPageURL,
  instagramPageURL,
  twitterPageURL,
  logoURL,
}) => {
  const styles = useStyles(stylesRef);

  const currentLocale = location?.pathname.includes('/en/') ? 'en-CA' : 'fr-CA';
  const currentLocaleIsEN = currentLocale === 'en-CA';
  const currentLocaleIsFR = !currentLocaleIsEN;
  const currentPage = pages.filter((page) => page.name === currentPageName && page.locale === currentLocale);
  const currentAlternateLocalePage = pages.filter(
    (page) => page.name === currentPageName && page.locale !== currentLocale
  );
  const pagesEN = pages.filter((page) => (currentLocaleIsEN ? page.locale === 'en-CA' : page));
  const pagesFR = pages.filter((page) => (currentLocaleIsFR ? page.locale === 'fr-CA' : page));
  // const alternateLocalePage = localENActive ? pages.includes({name: currentPageName, route: })

  const leftToolbarPageNames: (string | PAGE_NAME)[] = [
    PAGE_NAME.ACCUEIL,
    PAGE_NAME.CANDIDATS,
    PAGE_NAME.EMPLOYEURS,
    PAGE_NAME.BLOGUE,
    PAGE_NAME.A_PROPOS,
  ];
  const leftToolbarPages = (currentLocaleIsEN ? pagesEN : pagesFR)
    ?.filter((page) => leftToolbarPageNames.includes(page.name))
    .sort((pageA, pageB) => {
      const indexA = leftToolbarPageNames.indexOf(pageA.name);
      const indexB = leftToolbarPageNames.indexOf(pageB.name);
      return indexA > indexB ? 1 : -1;
    });
  const contactUsPage = (currentLocaleIsEN ? pagesEN : pagesFR)?.filter((page) => page.name === 'Contact');

  return (
    <header className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.mobileLeftToolbar} onClick={(e) => onOpenSideMenu()}>
          <Icon className={styles.icon} />
        </div>

        <nav className={styles.desktopLeftToolbar}>
          {leftToolbarPages?.map((page) => {
            return (
              <Link key={`${page.name}-${page.locale}`} to={page.route}>
                {page.title}
              </Link>
            );
          })}
        </nav>

        {/* TODO Gatsby Image */}
        {logoURL ? <img className={styles.logo} src={logoURL} alt="MIR Logo" /> : null}

        <nav className={styles.mobileRightToolbar}>
          <GatsbyLink to={currentLocaleIsEN ? '/' : '/en/'}>
            <Button variantType="tertiaryReversed" variant="text" size="small">
              {currentLocaleIsEN ? 'FR' : 'EN'}
            </Button>
          </GatsbyLink>
        </nav>

        <div className={styles.desktopRightToolbar}>
          <div className={styles.desktopSocialButtons}>
            {facebookPageURL ? (
              <a href={facebookPageURL} target={'_blank'} aria-label="Facebook Page" rel="noopener">
                <Button
                  variantType="tertiaryReversed"
                  variant="icon"
                  icon="IconFacebook"
                  size="small"
                  aria-label="Facebook Page"
                ></Button>
              </a>
            ) : null}
            {linkedinPageURL ? (
              <a href={linkedinPageURL} target={'_blank'} aria-label="LinkedIn Page" rel="noopener">
                <Button
                  variantType="tertiaryReversed"
                  variant="icon"
                  icon="IconLinkedin"
                  size="small"
                  aria-label="LinkedIn Page"
                ></Button>
              </a>
            ) : null}
            {twitterPageURL ? (
              <a href={twitterPageURL} target={'_blank'} aria-label="Twitter Page" rel="noopener">
                <Button
                  variantType="tertiaryReversed"
                  variant="icon"
                  icon="IconTwitter"
                  size="small"
                  aria-label="Twitter Page"
                ></Button>
              </a>
            ) : null}
            {instagramPageURL ? (
              <a href={instagramPageURL} target={'_blank'} aria-label="Instagram Page" rel="noopener">
                <Button
                  variantType="tertiaryReversed"
                  variant="icon"
                  icon="IconInstagram"
                  size="small"
                  aria-label="Instagram Page"
                ></Button>
              </a>
            ) : null}
          </div>

          <nav>
            <GatsbyLink
              to={
                currentAlternateLocalePage?.length
                  ? currentAlternateLocalePage[0].route
                  : currentLocaleIsEN
                  ? '/'
                  : '/en/'
              }
            >
              <Button variantType="tertiaryReversed" variant="text" size="small">
                {currentLocaleIsEN ? 'FR' : 'EN'}
              </Button>
            </GatsbyLink>

            {contactUsPage && contactUsPage[0] ? (
              <GatsbyLink to={contactUsPage[0].route}>
                <Button variantType="secondaryReversed" variant="text" size="small">
                  {contactUsPage[0].title}
                </Button>
              </GatsbyLink>
            ) : null}
          </nav>
        </div>
      </div>
    </header>
  );
};

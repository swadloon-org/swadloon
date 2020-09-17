import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { useStyles } from 'react-treat';
import Icon from '../illustrations/Icon/IconBars.svg';
import { NavigationProps } from '../layouts';
import { Link } from '../ui/link';
import { Button } from './button';
import * as stylesRef from './nav-bar.treat';

type OwnProps = {
  onOpenSideMenu: () => void;
} & NavigationProps;

export const NavBar: React.FC<OwnProps> = (props) => {
  const styles = useStyles(stylesRef);

  const leftToolbarPageNames = ['Home', 'Candidates', 'Employers', 'Blog', 'About'];
  const leftToolbarPages = props.pages
    ?.filter((page) => leftToolbarPageNames.includes(page.name))
    .sort((pageA, pageB) => {
      const indexA = leftToolbarPageNames.indexOf(pageA.name);
      const indexB = leftToolbarPageNames.indexOf(pageB.name);
      return indexA > indexB ? 1 : -1;
    });
  const contactUsPage = props.pages?.filter((page) => page.name === 'Contact');

  return (
    <header className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.mobileLeftToolbar} onClick={(e) => props.onOpenSideMenu()}>
          <Icon className={styles.icon} />
        </div>

        <nav className={styles.desktopLeftToolbar}>
          {leftToolbarPages?.map((page) => {
            return (
              <Link key={page.name} to={page.route}>
                {page.title}
              </Link>
            );
          })}
        </nav>

        {props.logoURL ? <img className={styles.logo} src={props.logoURL} alt="MIR Logo" /> : null}

        <nav className={styles.mobileRightToolbar}>
          <GatsbyLink to={props.location?.pathname.includes('/en/') ? '/' : '/en/'}>
            <Button variantType="tertiaryReversed" variant="text" size="small">
              {props.location?.pathname.includes('/en/') ? 'FR' : 'EN'}
            </Button>
          </GatsbyLink>
        </nav>

        <div className={styles.desktopRightToolbar}>
          <div className={styles.desktopSocialButtons}>
            {props.facebookPageURL ? (
              <a href={props.facebookPageURL} target={'_blank'} aria-label="Facebook Page" rel="noopener">
                <Button
                  variantType="tertiaryReversed"
                  variant="icon"
                  icon="IconFacebook"
                  size="small"
                  aria-label="Facebook Page"
                ></Button>
              </a>
            ) : null}
            {props.linkedinPageURL ? (
              <a href={props.linkedinPageURL} target={'_blank'} aria-label="LinkedIn Page" rel="noopener">
                <Button
                  variantType="tertiaryReversed"
                  variant="icon"
                  icon="IconLinkedin"
                  size="small"
                  aria-label="LinkedIn Page"
                ></Button>
              </a>
            ) : null}
            {props.twitterPageURL ? (
              <a href={props.twitterPageURL} target={'_blank'} aria-label="Twitter Page" rel="noopener">
                <Button
                  variantType="tertiaryReversed"
                  variant="icon"
                  icon="IconTwitter"
                  size="small"
                  aria-label="Twitter Page"
                ></Button>
              </a>
            ) : null}
            {props.instagramPageURL ? (
              <a href={props.instagramPageURL} target={'_blank'} aria-label="Instagram Page" rel="noopener">
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
            <GatsbyLink to={props.location?.pathname.includes('/en/') ? '/' : '/en/'}>
              <Button variantType="tertiaryReversed" variant="text" size="small">
                {props.location?.pathname.includes('/en/') ? 'FR' : 'EN'}
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

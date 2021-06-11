import { IconSize, LABEL } from '@newrade/core-design-system-old';
import useWebAnimations from '@wellyshen/use-web-animations';
import { Link as GatsbyLink } from 'gatsby';
import React, { HTMLAttributes, useEffect, useState } from 'react';
import { useStyles } from 'react-treat';
import { PAGE_NAME } from '../../templates/contentful-page.template';
import { Button } from '../ui/button';
import { Heading } from '../ui/heading';
import { Icon } from '../ui/icon';
import { Illustration } from '../ui/illustration';
import { Label } from '../ui/label';
import * as stylesRef from './side-bar.treat';

export type NavigationProps = {
  currentPathname: string | PAGE_NAME;
  location?: Location;
  logoURL: string | null;
  linkedinPageURL: string | null;
  facebookPageURL: string | null;
  instagramPageURL: string | null;
  twitterPageURL: string | null;
  pages: {
    title?: string | null;
    slug?: string | null;
    name?: string | PAGE_NAME | null;
    locale?: string | null;
  }[];
};

type OwnProps = {
  state: 'opened' | 'closed';
  onOpenSideMenu: () => void;
} & NavigationProps &
  HTMLAttributes<any>;

export const SideBar: React.FC<OwnProps> = (props) => {
  const styles = useStyles(stylesRef);

  const currentLocale = props.location?.pathname.includes('/en/') ? 'en-CA' : 'fr-CA';
  const currentLocaleIsEN = currentLocale === 'en-CA';
  const currentLocaleIsFR = !currentLocaleIsEN;
  const pagesEN = props.pages?.filter((page) =>
    currentLocaleIsEN ? page?.locale === 'en-CA' : page
  );
  const pagesFR = props.pages?.filter((page) =>
    currentLocaleIsFR ? page?.locale === 'fr-CA' : page
  );

  const leftToolbarPageNames: (string | PAGE_NAME)[] = [
    PAGE_NAME?.ACCUEIL,
    PAGE_NAME?.CANDIDATS,
    PAGE_NAME?.EMPLOYEURS,
    PAGE_NAME?.BLOGUE,
    PAGE_NAME?.A_PROPOS,
    PAGE_NAME?.CONTACT,
  ];
  const leftToolbarPages = (currentLocaleIsEN ? pagesEN : pagesFR)
    ?.filter((page) => page?.name && leftToolbarPageNames.includes(page?.name))
    .sort((pageA, pageB) => {
      const indexA = pageA?.name ? leftToolbarPageNames.indexOf(pageA?.name) : 1;
      const indexB = pageB?.name ? leftToolbarPageNames.indexOf(pageB?.name) : 1;
      return indexA > indexB ? 1 : -1;
    });

  const { ref, animate } = useWebAnimations<HTMLDivElement>();
  const [initial, setInitial] = useState(true);

  useEffect(() => {
    animate({
      keyframes: {
        transform: props.state === 'opened' ? 'translateX(0px)' : `translateX(-100%)`,
      },
      timing: { duration: initial ? 0 : 200, fill: 'both', easing: 'ease-out' },
    });
    setInitial(false);
  }, [props.state, animate]);

  return (
    <div className={`${props.className || ''} ${styles.wrapper} `} key="sidebar" ref={ref}>
      <div className={styles.topContainer}>
        {props.logoURL ? <img className={styles.logo} src={props.logoURL} /> : null}
        <div className={styles.icon} onClick={(e) => props.onOpenSideMenu()}>
          <Icon icon="IconClose" size={IconSize.large}></Icon>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.containerList}>
          <div className={styles.separation}>
            <Illustration
              className={styles.bar}
              width="29px"
              height="3px"
              name="illustrations/IllustrationBar"
            ></Illustration>
            <Label variant={LABEL.smallUppercase}>Menu</Label>
          </div>

          <nav className={styles.listMenu}>
            {leftToolbarPages?.map((page) => {
              return page?.slug ? (
                <GatsbyLink
                  className={styles.titleItem}
                  to={page?.slug}
                  key={`${page?.name}-${page?.locale}`}
                  activeClassName={`${styles.activeItem}`}
                >
                  <div
                    className={`${styles.itemMenu} ${
                      props.currentPathname == page?.name ? styles.activeItem : ''
                    }`}
                  >
                    <Heading variant="h4">{page?.title}</Heading>
                  </div>
                </GatsbyLink>
              ) : null;
            })}
          </nav>
        </div>

        <div className={styles.containerList}>
          <div className={styles.separation}>
            <Illustration
              className={styles.bar}
              width="29px"
              height="3px"
              name="illustrations/IllustrationBar"
            ></Illustration>
            <Label variant={LABEL.smallUppercase}>SOCIAL</Label>
          </div>
          <div className={styles.listSocial}>
            {props.facebookPageURL ? (
              <a
                href={props.facebookPageURL}
                target={'_blank'}
                aria-label="Facebook Page"
                rel="noreferrer"
              >
                <Button
                  className={styles.btnSocial}
                  variantType="secondaryReversed"
                  size="social"
                  variant="icon"
                  icon="IconFacebook"
                  aria-label="Facebook Page"
                ></Button>
              </a>
            ) : null}
            {props.linkedinPageURL ? (
              <a
                href={props.linkedinPageURL}
                target={'_blank'}
                aria-label="LinkedIn Page"
                rel="noreferrer"
              >
                <Button
                  className={styles.btnSocial}
                  variantType="secondaryReversed"
                  size="social"
                  variant="icon"
                  icon="IconLinkedin"
                  aria-label="LinkedIn Page"
                ></Button>
              </a>
            ) : null}
            {props.twitterPageURL ? (
              <a
                href={props.twitterPageURL}
                target={'_blank'}
                aria-label="Twitter Page"
                rel="noreferrer"
              >
                <Button
                  className={styles.btnSocial}
                  variantType="secondaryReversed"
                  size="social"
                  variant="icon"
                  icon="IconTwitter"
                  aria-label="Twitter Page"
                ></Button>
              </a>
            ) : null}
            {props.instagramPageURL ? (
              <a
                href={props.instagramPageURL}
                target={'_blank'}
                aria-label="Instagram Page"
                rel="noreferrer"
              >
                <Button
                  className={styles.btnSocial}
                  variantType="secondaryReversed"
                  size="social"
                  variant="icon"
                  icon="IconInstagram"
                  aria-label="Instagram Page"
                ></Button>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

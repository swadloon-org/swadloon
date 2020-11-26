import { ICON_SIZE, LABEL } from '@newrade/core-design-system-old';
import { motion } from 'framer-motion';
import { Link as GatsbyLink } from 'gatsby';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { NavigationProps } from '../../layouts/page.layout';
import { PAGE_NAME } from '../../templates/page.template';
import { Button } from '../ui/button';
import { Heading } from '../ui/heading';
import { Icon } from '../ui/icon';
import { Illustration } from '../ui/illustration';
import { Label } from '../ui/label';
import * as stylesRef from './side-bar.treat';

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
  const currentPage = props?.pages.filter(
    (page) => page?.name === props?.currentPageName && page?.locale === currentLocale
  );
  const currentAlternateLocalePage = props?.pages.filter(
    (page) => page?.name === props?.currentPageName && page?.locale !== currentLocale
  );
  const pagesEN = props?.pages?.filter((page) => (currentLocaleIsEN ? page?.locale === 'en-CA' : page));
  const pagesFR = props?.pages?.filter((page) => (currentLocaleIsFR ? page?.locale === 'fr-CA' : page));

  const leftToolbarPageNames: (string | PAGE_NAME)[] = [
    PAGE_NAME?.ACCUEIL,
    PAGE_NAME?.CANDIDATS,
    PAGE_NAME?.EMPLOYEURS,
    PAGE_NAME?.BLOGUE,
    PAGE_NAME?.A_PROPOS,
    PAGE_NAME?.CONTACT,
  ];
  const leftToolbarPages = (currentLocaleIsEN ? pagesEN : pagesFR)
    ?.filter((page) => page.name && leftToolbarPageNames.includes(page?.name))
    .sort((pageA, pageB) => {
      const indexA = pageA.name ? leftToolbarPageNames?.indexOf(pageA?.name) : 1;
      const indexB = pageB.name ? leftToolbarPageNames?.indexOf(pageB?.name) : 1;
      return indexA > indexB ? 1 : -1;
    });
  const contactUsPage = (currentLocaleIsEN ? pagesEN : pagesFR)?.filter((page) => page?.name === 'Contact');

  return (
    <motion.div
      className={`${props?.className || ''} ${styles.wrapper} `}
      key="sidebar"
      initial="closed"
      animate={props?.state}
      exit="closed"
      variants={{
        opened: { opacity: 1, x: 0 },
        closed: { opacity: 0.8, x: '-100%' },
      }}
      transition={{ x: { duration: 0.3, ease: 'easeOut' } }}
    >
      <div className={styles.topContainer}>
        {props.logoURL ? <img className={styles.logo} src={props.logoURL} /> : null}
        <div className={styles.icon} onClick={(e) => props?.onOpenSideMenu()}>
          <Icon icon="IconClose" size={ICON_SIZE.large}></Icon>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.containerList}>
          <div className={styles.separation}>
            <Illustration
              className={styles.bar}
              width="29px"
              height="3px"
              name="Illustration/IllustrationBar"
            ></Illustration>
            <Label variant={LABEL.smallUppercase}>Menu</Label>
          </div>

          <nav className={styles.listMenu}>
            {leftToolbarPages?.map((page) => {
              return page.route ? (
                <GatsbyLink
                  className={styles.titleItem}
                  to={page.route}
                  key={`${page?.name}-${page?.locale}`}
                  activeClassName={`${styles.activeItem}`}
                >
                  <div
                    className={`${styles.itemMenu} ${props?.currentPageName == page?.name ? styles.activeItem : ''}`}
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
              name="Illustration/IllustrationBar"
            ></Illustration>
            <Label variant={LABEL.smallUppercase}>SOCIAL</Label>
          </div>
          <div className={styles.listSocial}>
            {props?.facebookPageURL ? (
              <a href={props?.facebookPageURL} target={'_blank'} aria-label="Facebook Page" rel="noopener">
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
            {props?.linkedinPageURL ? (
              <a href={props?.linkedinPageURL} target={'_blank'} aria-label="LinkedIn Page" rel="noopener">
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
            {props?.twitterPageURL ? (
              <a href={props?.twitterPageURL} target={'_blank'} aria-label="Twitter Page" rel="noopener">
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
            {props?.instagramPageURL ? (
              <a href={props?.instagramPageURL} target={'_blank'} aria-label="Instagram Page" rel="noopener">
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
    </motion.div>
  );
};

import { ICON_SIZE, LABEL } from '@newrade/core-design-system-old';
import { motion } from 'framer-motion';
import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';

import * as stylesRef from './side-bar.treat';
import { NavigationProps } from '../../layouts/page.layout';
import { MobileBarQuery } from '../../../types/graphql-types';
import { Icon } from '../ui/icon';
import { Illustration } from '../ui/illustration';
import { Label } from '../ui/label';
import { Heading } from '../ui/heading';
import { Button } from '../ui/button';

type OwnProps = {
  state: 'opened' | 'closed';
  onOpenSideMenu: () => void;
} & NavigationProps &
  HTMLAttributes<any>;

export const sideBarQuery = graphql`
  query mobileBar {
    site {
      ...SiteMetadata
    }
    contentfulCompanyInfo {
      logo {
        file {
          url
        }
        fluid {
          srcSet
        }
      }
      twitterPageURL
      id
    }
  }
`;

export const SideBar: React.FC<OwnProps> = (props) => {
  const styles = useStyles(stylesRef);

  const leftToolbarPageNames = ['Home', 'Candidates', 'Employers', 'Blog', 'About', 'Contact'];
  const leftToolbarPages = props.pages
    ?.filter((page) => leftToolbarPageNames.includes(page.name))
    .sort((pageA, pageB) => {
      const indexA = leftToolbarPageNames.indexOf(pageA.name);
      const indexB = leftToolbarPageNames.indexOf(pageB.name);
      return indexA > indexB ? 1 : -1;
    });

  const data = useStaticQuery<MobileBarQuery>(sideBarQuery);
  const pageActual = props.location?.pathname;

  return (
    <motion.div
      className={`${props.className || ''} ${styles.wrapper} `}
      key="sidebar"
      initial="closed"
      animate={props.state}
      exit="closed"
      variants={{
        opened: { opacity: 1, x: 0 },
        closed: { opacity: 0.8, x: '-100%' },
      }}
      transition={{ x: { duration: 0.3, ease: 'easeOut' } }}
    >
      <div className={styles.topContainer}>
        <img className={styles.logo} src={data?.contentfulCompanyInfo.logo.file.url} />
        <div className={styles.icon} onClick={(e) => props.onOpenSideMenu()}>
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
              return (
                <GatsbyLink
                  className={styles.titleItem}
                  to={page.route}
                  key={`${page.name}-${page.locale}`}
                  activeClassName={`${styles.activeItem}`}
                >
                  <div className={`${styles.itemMenu} ${pageActual == page.route ? styles.activeItem : ''}`}>
                    <Heading variant="h4">{page.title}</Heading>
                  </div>
                </GatsbyLink>
              );
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
            {props.facebookPageURL ? (
              <a href={props.facebookPageURL} target={'_blank'} aria-label="Facebook Page" rel="noopener">
                <Button
                  className={styles.btnSocial}
                  variantType="secondaryReversed"
                  size="medium"
                  variant="icon"
                  icon="IconFacebook"
                  aria-label="Facebook Page"
                ></Button>
              </a>
            ) : null}
            {props.linkedinPageURL ? (
              <a href={props.linkedinPageURL} target={'_blank'} aria-label="LinkedIn Page" rel="noopener">
                <Button
                  className={styles.btnSocial}
                  variantType="secondaryReversed"
                  size="medium"
                  variant="icon"
                  icon="IconLinkedin"
                  aria-label="LinkedIn Page"
                ></Button>
              </a>
            ) : null}
            {props.twitterPageURL ? (
              <a href={props.twitterPageURL} target={'_blank'} aria-label="Twitter Page" rel="noopener">
                <Button
                  className={styles.btnSocial}
                  variantType="secondaryReversed"
                  size="medium"
                  variant="icon"
                  icon="IconTwitter"
                  aria-label="Twitter Page"
                ></Button>
              </a>
            ) : null}
            {props.instagramPageURL ? (
              <a href={props.instagramPageURL} target={'_blank'} aria-label="Instagram Page" rel="noopener">
                <Button
                  className={styles.btnSocial}
                  variantType="secondaryReversed"
                  size="medium"
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

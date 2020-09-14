import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import { useStyles } from 'react-treat';
import { MobileBarQuery } from '../../types/graphql-types';
import * as stylesRef from './side-bar.treat';
import { useViewportValues, useViewportBreakpoint } from '../hooks/use-viewport.hook';
import { VIEWPORT } from 'core-design-system';
import { Icon } from '../ui/icon';
import { ICON_SIZE } from 'core-design-system';
import { Label } from './label';
import { LABEL } from 'core-design-system';
import { Illustration } from './illustration';
import { Heading } from './heading';

type OwnProps = {
  state: string;
  onOpenSideMenu: () => void;
};

export const query = graphql`
  query mobileBar {
    site {
      ...SiteMetadata
    }
    gcms {
      companyMedias {
        logo {
          url
        }
      }
    }
  }
`;

export const SideBar: React.FC<OwnProps> = (props) => {
  const { width } = useViewportValues();
  const { viewport } = useViewportBreakpoint();
  const styles = useStyles(stylesRef);
  const data = useStaticQuery<MobileBarQuery>(query);

  if (viewport != VIEWPORT.desktop) {
    return (
      <div className={`${styles.wrapper} ${styles[props.state]}`}>
        <div className={styles.topContainer}>
          <img className={styles.logo} src={data?.gcms?.companyMedias[0]?.logo?.url} />
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
            <div className={styles.listMenu}>
              <div className={styles.itemMenu}>
                <Heading className={styles.titleItem} variant="h4">
                  Accueil
                </Heading>
              </div>
              <div className={`${styles.itemMenu} ${styles.activeItem}`}>
                <Heading className={styles.titleItem} variant="h4">
                  Candidats
                </Heading>
              </div>
              <div className={styles.itemMenu}>
                <Heading className={styles.titleItem} variant="h4">
                  Employeurs
                </Heading>
              </div>
              <div className={styles.itemMenu}>
                <Heading className={styles.titleItem} variant="h4">
                  Nouvelles
                </Heading>
              </div>
              <div className={styles.itemMenu}>
                <Heading className={styles.titleItem} variant="h4">
                  À propos
                </Heading>
              </div>
              <div className={styles.itemMenu}>
                <Heading className={styles.titleItem} variant="h4">
                  Contact
                </Heading>
              </div>
            </div>
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
            <div className={styles.listSocial}></div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

{
  /*            {props.state}
<div onClick={(e) => props.onOpenSideMenu()}>
<Icon icon="IconBars" size={ICON_SIZE.large} />
</div> */
}

import { ICON_SIZE, LABEL } from 'core-design-system';
import { graphql, useStaticQuery } from 'gatsby';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { MobileBarQuery } from '../../types/graphql-types';
import { Icon } from '../ui/icon';
import { Button } from './button';
import { Heading } from './heading';
import { Illustration } from './illustration';
import { Label } from './label';
import * as stylesRef from './side-bar.treat';

type OwnProps = {
  state: string;
  onOpenSideMenu: () => void;
} & HTMLAttributes<any>;

export const sideBarQuery = graphql`
  query mobileBar {
    site {
      ...SiteMetadata
    }
    gcms {
      companyInfos {
        logo {
          url
        }
      }
    }
  }
`;

export const SideBar: React.FC<OwnProps> = (props) => {
  const styles = useStyles(stylesRef);
  const data = useStaticQuery<MobileBarQuery>(sideBarQuery);

  return (
    <div className={`${props.className || ''} ${styles.wrapper} ${styles[props.state]}`}>
      <div className={styles.topContainer}>
        <img className={styles.logo} src={data?.gcms?.companyInfos[0]?.logo?.url} />
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
          <div className={styles.listSocial}>
            <Button variantType="secondaryReversed" size="medium" variant="icon" icon="IconArrowRight"></Button>
            <Button variantType="secondaryReversed" size="medium" variant="icon" icon="IconFacebook"></Button>
            <Button variantType="secondaryReversed" size="medium" variant="icon" icon="IconInstagram"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

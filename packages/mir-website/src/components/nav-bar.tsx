import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import styles from './nav-bar.module.scss';

import { TopBarQuery } from '../../types/graphql-types';
import Icon from '../illustrations/Icon/Bars.svg';
import { Label } from './label';
import { Button } from './button';

type OwnProps = {};

export const query = graphql`
  query topBar {
    gcms {
      companyMedias {
        logo {
          url
        }
      }
    }
  }
`;

export const NavBar: React.FC<OwnProps> = () => {
  const data = useStaticQuery<TopBarQuery>(query);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.mobileLeftToolbar}>
          <Icon className={styles.icon} />
        </div>

        <div className={styles.desktopLeftToolbar}>
          <Button type="tertiary" variant="text" size="small" variantStyle="reversed">
            Candidats
          </Button>
          <Button type="tertiary" variant="text" size="small" variantStyle="reversed">
            Employeurs
          </Button>
          <Button type="tertiary" variant="text" size="small" variantStyle="reversed">
            Nouvelles
          </Button>
          <Button type="tertiary" variant="text" size="small" variantStyle="reversed">
            À propos
          </Button>
        </div>

        <img className={styles.logo} src={data.gcms.companyMedias[0].logo.url} />

        <div className={styles.mobileRightToolbar}>
          <Label size="small" variant="uppercase" className={styles.language}>
            EN
          </Label>
        </div>

        <div className={styles.desktopRightToolbar}>
          <div className={styles.desktopSocialButtons}>
            <Button type="tertiary" variant="icon" icon="Facebook" size="small" variantStyle="reversed"></Button>
            <Button type="tertiary" variant="icon" icon="Instagram" size="small" variantStyle="reversed"></Button>
            <Button type="tertiary" variant="icon" icon="Linkedin" size="small" variantStyle="reversed"></Button>
          </div>

          <Button type="tertiary" variant="text" size="small" variantStyle="reversed">
            EN
          </Button>
          <Button type="secondary" variant="text" size="small" variantStyle="reversed">
            Nous joindre
          </Button>
        </div>
      </div>
    </div>
  );
};

import React, { AllHTMLAttributes, RefAttributes } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as stylesRef from './nav-bar.treat';
import { useStyles } from 'react-treat';
import { Link as GatsbyLink } from 'gatsby';

import { TopBarQuery } from '../../types/graphql-types';
import Icon from '../illustrations/Icon/Bars.svg';
import { Label } from './label';
import { Button } from './button';
import { LABEL } from 'core-design-system';
import { Link } from '../components-ui/link';

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

export const NavBar: React.FC<OwnProps> = (props) => {
  const data = useStaticQuery<TopBarQuery>(query);
  const styles = useStyles(stylesRef);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.mobileLeftToolbar}>
          <Icon className={styles.icon} />
        </div>

        <div className={styles.desktopLeftToolbar}>
          <Link to="/">Accueil</Link>
          <Link to="/candidates">Candidats</Link>
          <Link to="/employer">Employeurs</Link>
          <Link to="/blog">Nouvelles</Link>
          <Link to="/about">À propos</Link>

          {/* <Button type="tertiaryReversed" variant="text" size="small">
            Candidats
          </Button>
          <Button type="tertiaryReversed" variant="text" size="small">
            Employeurs
          </Button>
          <Button type="tertiaryReversed" variant="text" size="small">
            Nouvelles
          </Button>
          <Button type="tertiaryReversed" variant="text" size="small">
            À propos
          </Button> */}
        </div>

        <img className={styles.logo} src={data.gcms.companyMedias[0].logo.url} />

        <div className={styles.mobileRightToolbar}>
          <Label variant={LABEL.smallBoldUppercase} className={styles.language}>
            EN
          </Label>
        </div>

        <div className={styles.desktopRightToolbar}>
          <div className={styles.desktopSocialButtons}>
            <Button type="tertiaryReversed" variant="icon" icon="Facebook" size="small"></Button>
            <Button type="tertiaryReversed" variant="icon" icon="Instagram" size="small"></Button>
            <Button type="tertiaryReversed" variant="icon" icon="Linkedin" size="small"></Button>
          </div>

          <Button type="tertiaryReversed" variant="text" size="small">
            EN
          </Button>

          <GatsbyLink to="/contact">
            <Button type="secondaryReversed" variant="text" size="small">
              Nous joindre
            </Button>
          </GatsbyLink>
        </div>
      </div>
    </div>
  );
};

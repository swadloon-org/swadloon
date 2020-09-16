import { LABEL } from 'core-design-system';
import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby';
import React from 'react';
import { useStyles } from 'react-treat';
import { TopBarQuery } from '../../types/graphql-types';
import Icon from '../illustrations/Icon/IconBars.svg';
import { Link } from '../ui/link';
import { Button } from './button';
import { Label } from './label';
import * as stylesRef from './nav-bar.treat';

type OwnProps = {
  onOpenSideMenu: () => void;
};

export const query = graphql`
  query topBar {
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

export const NavBar: React.FC<OwnProps> = (props) => {
  const data = useStaticQuery<TopBarQuery>(query);
  const styles = useStyles(stylesRef);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.mobileLeftToolbar} onClick={(e) => props.onOpenSideMenu()}>
          <Icon className={styles.icon} />
        </div>

        <div className={styles.desktopLeftToolbar}>
          <Link to="/">Accueil</Link>
          <Link to="/candidates">Candidats</Link>
          <Link to="/employer">Employeurs</Link>
          <Link to="/blog">Nouvelles</Link>
          <Link to="/about">À propos</Link>
        </div>

        <img className={styles.logo} src={data?.gcms?.companyMedias[0]?.logo?.url} />

        <div className={styles.mobileRightToolbar}>
          <Label variant={LABEL.smallBoldUppercase} className={styles.language}>
            EN
          </Label>
        </div>

        <div className={styles.desktopRightToolbar}>
          <div className={styles.desktopSocialButtons}>
            <Button type="tertiaryReversed" variant="icon" icon="IconFacebook" size="small"></Button>
            <Button type="tertiaryReversed" variant="icon" icon="IconInstagram" size="small"></Button>
            <Button type="tertiaryReversed" variant="icon" icon="IconLinkedin" size="small"></Button>
          </div>

          <Button type="tertiaryReversed" variant="text" size="small">
            <Link to="/en/">EN</Link>
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

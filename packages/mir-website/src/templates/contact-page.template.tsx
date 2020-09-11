import React from 'react';
import { useStyles } from 'react-treat';
import * as stylesRef from '../templates/contact-page.treat';
import { BannerSecondary } from '../components/banner-secondary';
import { Footer } from '../components/footer';
import { NavBar } from '../components/nav-bar';
import { Newsletter } from '../components/newsletter/newsletter';
import { InfoSectionType6Group } from '../components/info-section/info-section-type-6-group';
import { ContactProps } from '../pages/contact.en';

export const Contact: React.FC<ContactProps> = ({ data, location }) => {
  const styles = useStyles(stylesRef);

  return (
    <div className={`${styles.wrapper}`}>
      <NavBar></NavBar>

      <BannerSecondary
        imageData={data.bannerImage?.childImageSharp?.fluid}
        title={data?.gcms?.contactUsPages[0]?.bannerTitle}
      ></BannerSecondary>

      <InfoSectionType6Group></InfoSectionType6Group>

      <Newsletter id="newsletter"></Newsletter>

      <Footer></Footer>
    </div>
  );
};

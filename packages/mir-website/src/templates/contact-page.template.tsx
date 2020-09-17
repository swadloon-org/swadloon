import React, { useState } from 'react';
import { useStyles } from 'react-treat';
import * as stylesRef from '../templates/contact-page.treat';
import { BannerSecondary } from '../components/banner-secondary';
import { Footer } from '../components/footer';
import { NavBar } from '../components/nav-bar';
import { Newsletter } from '../components/newsletter/newsletter';
import { InfoSectionType6Group } from '../components/info-section/info-section-type-6-group';
import { SideBar } from '../components/side-bar';
import { ContactPageFrQuery } from '../../types/graphql-types';
import { theme } from '../design-system';

interface PageProps {
  data: ContactPageFrQuery;
  location: Location;
}

export const Contact: React.FC<PageProps> = ({ data, location }) => {
  const styles = useStyles(stylesRef);

  const sources = [
    data?.bannerImageMobile?.childImageSharp?.fluid,
    {
      ...data?.bannerImageDesktop?.childImageSharp?.fluid,
      media: `(min-width: ${theme.layout.breakpoints.desktopSmall.px})`,
    },
  ];

  return (
    <main className={`${styles.wrapper}`}>
      <BannerSecondary imageData={sources} title={data?.gcms?.pages[0]?.bannerTitle}></BannerSecondary>

      <InfoSectionType6Group></InfoSectionType6Group>

      <Newsletter id="newsletter"></Newsletter>
    </main>
  );
};

import React from 'react';
import { useStyles } from 'react-treat';
import { ContactPageFrQuery } from '../../types/graphql-types';
import { BannerSecondary } from '../components/banner-secondary';
import { InfoSectionType6Group } from '../components/info-section/info-section-type-6-group';
import { Newsletter } from '../components/action-section/newsletter';
import { theme } from '../design-system';
import * as stylesRef from '../templates/contact-page.treat';
import { Input, TextArea } from '../components/input';
import { Button } from '../components/button';
import { Heading } from '../components/heading';

interface PageProps {
  data: ContactPageFrQuery;
  location: Location;
}

export const Contact: React.FC<PageProps> = ({ data, location }) => {
  const styles = useStyles(stylesRef);

  const section1 = data.gcms?.pages[0]?.infoSections[0];
  const actionSection1 = data.gcms.pages[0].actionSections[0];
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

      {section1 && section1.type === 'type6' ? <InfoSectionType6Group {...section1} /> : null}

      <div className={styles.formWrapper}>
        <form className={`${styles.form}`} action="">
          <Heading variant={'h2'} className={styles.title}>
            Contactez-nous
          </Heading>

          <div className={`${styles.formRow}`}>
            <Input variant="default" placeholder="Prénom"></Input>
            <Input variant="default" placeholder="Nom de famille"></Input>
          </div>

          <div className={`${styles.formRow}`}>
            <Input variant="default" placeholder="Téléphone"></Input>
            <Input variant="default" placeholder="Courriel"></Input>
          </div>

          <TextArea variant="default" placeholder="Message" className={`${styles.textArea}`}></TextArea>

          <a href={''}>
            <Button variantType="secondaryDefault" size="small" variant="text" id="SubmitButton">
              Soumettre
            </Button>
          </a>
        </form>
      </div>

      <Newsletter id="newsletter" section={actionSection1}></Newsletter>
    </main>
  );
};

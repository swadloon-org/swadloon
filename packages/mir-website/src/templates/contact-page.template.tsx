import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
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

  const recaptchaRef = React.createRef<any>();

  return (
    <main className={`${styles.wrapper}`}>
      <BannerSecondary imageData={sources} title={data?.gcms?.pages[0]?.bannerTitle}></BannerSecondary>

      {section1 && section1.type === 'type6' ? <InfoSectionType6Group {...section1} /> : null}

      {location.search.includes('success') ? (
        <div id="info" className={styles.info}>
          <Heading variant="h3">Merci! Votre message a été transmis!</Heading>
        </div>
      ) : null}

      <div className={styles.formWrapper}>
        <form
          className={`${styles.form}`}
          action="https://liveformhq.com/form/1c928123-7ce6-46d7-a511-44b590a91738"
          method="POST"
          acceptCharset="utf-8"
        >
          <Heading variant={'h2'} className={styles.title}>
            Contactez-nous
          </Heading>

          <input type="hidden" value="https://mirinc.ca/nous-joindre/?status=success#info" name="_redirect" />
          {/* <input type="hidden" value="http://localhost:9001/nous-joindre/?status=success#info" name="_redirect" /> */}

          <div className={`${styles.formRow}`}>
            <Input
              variant="default"
              placeholder="Prénom"
              type="text"
              id="firstName"
              name="firstName"
              autoComplete="given-name"
            ></Input>
            <Input
              variant="default"
              placeholder="Nom de famille"
              type="text"
              id="lastName"
              name="lastName"
              autoComplete="family-name"
            ></Input>
          </div>

          <div className={`${styles.formRow}`}>
            <Input
              variant="default"
              placeholder="Téléphone"
              type="text"
              id="phone"
              name="phone"
              autoComplete="phone"
            ></Input>
            <Input
              variant="default"
              placeholder="Courriel"
              type="text"
              id="email"
              name="email"
              autoComplete="email"
            ></Input>
          </div>

          <TextArea
            variant="default"
            placeholder="Message"
            type="text"
            id="message"
            name="message"
            className={`${styles.textArea}`}
          ></TextArea>

          <ReCAPTCHA ref={recaptchaRef} sitekey="6Lf8XNIZAAAAADnLIXoaEsF2b6UZcY2yGryXev2S" />

          <Button variantType="secondaryDefault" size="small" variant="text" id="SubmitButton" type="submit">
            Soumettre
          </Button>
        </form>
      </div>

      <Newsletter id="newsletter" section={actionSection1}></Newsletter>
    </main>
  );
};

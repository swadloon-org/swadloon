import React from 'react';
import { useStyles } from 'react-treat';
import { Newsletter } from '../components/action-section/newsletter';
import { BannerSecondary } from '../components/banner-secondary';
import { Button } from '../components/button';
import { Heading } from '../components/heading';
import { InfoSectionType6Group } from '../components/info-section/info-section-type-6-group';
import { Input } from '../components/input';
import { theme } from '../design-system';
import * as stylesRef from '../templates/contact-page.treat';
import { ProjectPageProps } from './page.template';

export const Contact: React.FC<ProjectPageProps> = ({ data, location }) => {
  const styles = useStyles(stylesRef);

  const section1 = data.gcms?.pages[0]?.infoSections[0];
  const actionSection1 = data.gcms.pages[0].actionSections[0];
  const sources = [
    data?.bannerImageMobile?.childImageSharp?.fluid,
    {
      ...data?.bannerImageDesktop?.childImageSharp?.fluid,
      media: `(min-width: ${theme.layout.breakpoints.desktopSmall})`,
    },
  ];

  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  const recaptchaRef = React.createRef<any>();

  return (
    <main className={`${styles.wrapper}`}>
      <BannerSecondary imageData={sources} title={data?.gcms?.pages[0]?.bannerTitle}></BannerSecondary>

      {section1 && section1.type === 'type6' ? <InfoSectionType6Group {...section1} /> : null}

      {hasMounted ? (
        <div
          id="info"
          className={styles.info}
          style={{ display: location?.search.includes('success') ? 'block' : 'none' }}
        >
          <Heading variant="h3">Merci! Votre message a été transmis!</Heading>
        </div>
      ) : null}

      <div className={styles.formWrapper}>
        <div>
          <form className={`${styles.form}`} action="">
            <Input variant="reversed" placeholder="Votre courriel" aria-labelledby="SubmitButton"></Input>
            <Input variant="reversed" placeholder="Votre courriel" aria-labelledby="SubmitButton"></Input>
            <Button variantType="secondaryReversed" size="small" variant="text" id="SubmitButton">
              Soumettre
            </Button>
          </form>
        </div>
      </div>

      <Newsletter id="newsletter" section={actionSection1}></Newsletter>
    </main>
  );
};

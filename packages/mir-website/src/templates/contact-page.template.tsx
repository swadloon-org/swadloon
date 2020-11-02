import React from 'react';
import { useStyles } from 'react-treat';
import { BannerSecondary } from '../components/banner-secondary';
import { Button } from '../components/button';
import { Heading } from '../components/heading';
import { Input } from '../components/input';
import { theme } from '../design-system';
import * as stylesRef from '../templates/contact-page.treat';
import { ProjectPageProps } from './page.template';
import { SectionTemplate } from './section.template';

export const Contact: React.FC<ProjectPageProps> = (props) => {
  const styles = useStyles(stylesRef);

  const page = props.data.contentfulPage;

  const bannerImagesSource = [
    page.bannerImages?.medias[0]?.mobileFluidImage,
    {
      ...page.bannerImages?.medias[0]?.desktopFluidImage,
      media: `(min-width: ${theme.layout.breakpoints.desktopSmall.px})`,
    },
  ];

  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  const recaptchaRef = React.createRef<any>();

  return (
    <main className={`${styles.wrapper}`}>
      <BannerSecondary imageData={bannerImagesSource} title={props.data?.contentfulPage?.bannerTitle}></BannerSecondary>

      <SectionTemplate {...props} />

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
            <Input variant="reversed" placeholder="Votre courriel" aria-labelledby="SubmitButton" required></Input>
            <Input variant="reversed" placeholder="Votre courriel" aria-labelledby="SubmitButton" required></Input>
            <Button variantType="secondaryReversed" size="small" variant="text" id="SubmitButton">
              Soumettre
            </Button>
          </form>
        </div>
      </div>

      {/* <Newsletter id="newsletter" section={actionSection1}></Newsletter> */}
    </main>
  );
};

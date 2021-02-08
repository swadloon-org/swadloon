import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useStyles } from 'react-treat';
import { PageFragmentFragment } from '../../types/graphql-types';
import { BannerPrimary } from '../components/banners/banner-primary';
import { BannerSecondary } from '../components/banners/banner-secondary';
import { Button } from '../components/ui/button';
import { Heading } from '../components/ui/heading';
import { Input, TextArea } from '../components/ui/input';
import { theme } from '../design-system/theme';
import * as stylesRef from './contact.treat';
import { ProjectPageProps } from './page.template';
import { SectionTemplate, SECTION_TYPE } from './section.template';

export const ContactTemplate: React.FC<ProjectPageProps> = (props) => {
  const styles = useStyles(stylesRef);

  const page = props.data.contentfulPage;

  const bannerImagesSource = [
    page?.bannerImages?.medias?.[0]?.mobileFluidImage,
    {
      ...page?.bannerImages?.medias?.[0]?.desktopFluidImage,
      media: `(min-width: ${theme.layout.breakpoints.desktopSmall.px})`,
    },
  ];
  const bannerImagesAreValid = !!(bannerImagesSource.length && bannerImagesSource[0] && bannerImagesSource[1]);

  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  const recaptchaRef = React.createRef<any>();

  const sections1 = props.data.contentfulPage?.sections?.filter(
    (section) => section?.type?.name === SECTION_TYPE.TYPE_6_GROUP
  );
  const props1: ProjectPageProps = {
    ...props,
    data: {
      ...props.data,
      contentfulPage: {
        ...props.data.contentfulPage,
        sections: sections1,
      } as PageFragmentFragment,
    },
  };

  const sections2 = props.data.contentfulPage?.sections?.filter(
    (section) => section?.type?.name === SECTION_TYPE.NEWSLETTER_PRIMARY
  );
  const props2: ProjectPageProps = {
    ...props,
    data: {
      ...props.data,
      contentfulPage: {
        ...props.data.contentfulPage,
        sections: sections2,
      } as PageFragmentFragment,
    },
  };

  return (
    <main className={`${styles.wrapper}`}>
      {bannerImagesAreValid ? (
        page?.bannerSubTitle?.length ? (
          <BannerPrimary
            imageData={bannerImagesSource}
            title={page?.bannerTitle}
            subTitle={page?.bannerSubTitle}
          ></BannerPrimary>
        ) : (
          <BannerSecondary imageData={bannerImagesSource} title={page?.bannerTitle}></BannerSecondary>
        )
      ) : null}

      <SectionTemplate {...props1} />

      {hasMounted ? (
        <div
          id="info"
          className={styles.info}
          style={{ display: location?.search?.includes('success') ? 'block' : 'none' }}
        >
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

          <div className={`${styles.formRow}`}>
            <Input
              variant="normal"
              placeholder="Prénom"
              type="text"
              id="firstName"
              name="firstName"
              required={true}
              autoComplete="given-name"
            ></Input>
            <Input
              variant="normal"
              placeholder="Nom de famille"
              type="text"
              id="lastName"
              name="lastName"
              required={true}
              autoComplete="family-name"
            ></Input>
          </div>

          <div className={`${styles.formRow}`}>
            <Input
              variant="normal"
              placeholder="Téléphone"
              type="text"
              id="phone"
              name="phone"
              required={true}
              autoComplete="phone"
            ></Input>
            <Input
              variant="normal"
              placeholder="Courriel"
              type="text"
              id="email"
              name="email"
              required={true}
              autoComplete="email"
            ></Input>
          </div>

          <TextArea
            variant="normal"
            placeholder="Message"
            type="text"
            id="message"
            name="message"
            className={`${styles.textArea}`}
          ></TextArea>

          <ReCAPTCHA size={'compact'} ref={recaptchaRef} sitekey="6Lf8XNIZAAAAADnLIXoaEsF2b6UZcY2yGryXev2S" />

          <Button variantType="secondaryDefault" size="small" variant="text" id="SubmitButton" type="submit">
            Soumettre
          </Button>
        </form>
      </div>

      <SectionTemplate {...props2} />

      {/* <Newsletter id="newsletter" section={actionSection1}></Newsletter> */}
    </main>
  );
};

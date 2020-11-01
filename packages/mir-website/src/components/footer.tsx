import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FooterQuery } from '../../types/graphql-types';
import { Label } from '../components/label';
import { Logo } from '../components/logo';
import { Paragraph } from '../components/paragraph';
import { AnchorLink } from './anchor-link';

import { useStyles } from 'react-treat';
import * as styleRefs from './footer.treat';
import { LABEL, VIEWPORT } from '@newrade/core-design-system-old';
import { useViewportBreakpoint } from '../hooks/use-viewport.hook';

export const footerQuery = graphql`
  query footer {
    contentfulCompanyInfo {
      logoFooter {
        file {
          url
        }
      }
    }

    contentfulCompanyAddress {
      addressLine1
      addressLine2
      city
      provinceState
      postalCode
      country
      websiteURL
      phone
      phoneNoFees
      email
    }
  }
`;

type OwnProps = {};

export const Footer: React.FC<OwnProps> = (props) => {
  const data = useStaticQuery<FooterQuery>(footerQuery);
  const styles = useStyles(styleRefs);
  const { viewport } = useViewportBreakpoint();

  return (
    <footer className={styles.wrapper}>
      <div className={styles.gridwrapper}>
        <div className={styles.contact}>
          <Label
            className={styles.title}
            variant={viewport === VIEWPORT.mobile ? LABEL.smallBoldUppercase : LABEL.xSmallBoldUppercase}
          >
            Contactez-nous
          </Label>
          <Paragraph className={styles.infoText} variant={viewport === VIEWPORT.mobile ? 'medium' : 'small'}>
            Téléphone :
            <AnchorLink className={styles.link} variant="reversed" href={`tel:${data.contentfulCompanyAddress.phone}`}>
              {data.contentfulCompanyAddress.phone}
            </AnchorLink>
          </Paragraph>
          <Paragraph className={styles.infoText} variant={viewport === VIEWPORT.mobile ? 'medium' : 'small'}>
            Sans frais :
            <AnchorLink
              className={styles.link}
              variant="reversed"
              href={`tel:${data.contentfulCompanyAddress.phoneNoFees}`}
            >
              {data.contentfulCompanyAddress.phoneNoFees}
            </AnchorLink>
          </Paragraph>
          <Paragraph className={styles.infoText} variant={viewport === VIEWPORT.mobile ? 'medium' : 'small'}>
            Courriel :{' '}
            <AnchorLink
              className={styles.link}
              variant="reversed"
              href={`mailto:${data.contentfulCompanyAddress.email}`}
            >
              {data.contentfulCompanyAddress.email}
            </AnchorLink>
          </Paragraph>
        </div>

        <div className={styles.location}>
          <Label
            className={styles.title}
            variant={viewport === VIEWPORT.mobile ? LABEL.smallBoldUppercase : LABEL.xSmallBoldUppercase}
          >
            Visitez-nous
          </Label>
          <Paragraph className={styles.infoText} variant={viewport === VIEWPORT.mobile ? 'medium' : 'small'}>
            {data.contentfulCompanyAddress.addressLine1}
          </Paragraph>
          <Paragraph className={styles.infoText} variant={viewport === VIEWPORT.mobile ? 'medium' : 'small'}>
            {data.contentfulCompanyAddress.addressLine2}
          </Paragraph>
          <Paragraph className={styles.infoText} variant={viewport === VIEWPORT.mobile ? 'medium' : 'small'}>
            {data.contentfulCompanyAddress.city}, {data.contentfulCompanyAddress.provinceState},{' '}
            {data.contentfulCompanyAddress.postalCode}
          </Paragraph>
          <Paragraph className={styles.infoText} variant={viewport === VIEWPORT.mobile ? 'medium' : 'small'}>
            {data.contentfulCompanyAddress.country}
          </Paragraph>
        </div>

        <div className={styles.firm}>
          <Logo
            type="framed-text"
            variant="reversed"
            src={`${data?.contentfulCompanyInfo?.logoFooter?.file.url}`}
          ></Logo>
        </div>

        <Paragraph className={styles.copyright} variant="small">
          © {new Date().getFullYear()} Tous droits réservés MIR Inc.
        </Paragraph>
      </div>
    </footer>
  );
};

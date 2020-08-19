import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FooterQuery } from '../../types/graphql-types';
import { Label } from '../components/label';
import { Logo } from '../components/logo';
import { Paragraph } from '../components/paragraph';
import { AnchorLink } from './anchor-link';

import { useStyles } from 'react-treat';
import * as styleRefs from './footer.treat';

export const query = graphql`
  query footer {
    gcms {
      companyMedias {
        logoFooter {
          url
        }
      }
      companyAddresses {
        addressLine1
        addressLine2
        city
        provinceState
        postalCode
        country
        websiteUrl
        phone
        phoneNoFees
        email
      }
    }
  }
`;

type OwnProps = {};

export const Footer: React.FC<OwnProps> = (props) => {
  const data = useStaticQuery<FooterQuery>(query);
  const styles = useStyles(styleRefs);

  return (
    <footer className={styles.wrapper}>
      <div className={styles.gridwrapper}>
        <div className={styles.contact}>
          <Label className={styles.title} size="small" variant="uppercase">
            Contactez-nous
          </Label>
          <Paragraph className={styles.infoText} variant="small">
            Téléphone :
            <AnchorLink className={styles.link} variant="reversed" href={`tel:${data.gcms.companyAddresses[0].phone}`}>
              {data.gcms.companyAddresses[0].phone}
            </AnchorLink>
          </Paragraph>
          <Paragraph className={styles.infoText} variant="small">
            Sans frais :
            <AnchorLink
              className={styles.link}
              variant="reversed"
              href={`tel:${data.gcms.companyAddresses[0].phoneNoFees}`}
            >
              {data.gcms.companyAddresses[0].phoneNoFees}
            </AnchorLink>
          </Paragraph>
          <Paragraph className={styles.infoText} variant="small">
            Courriel :{' '}
            <AnchorLink
              className={styles.link}
              variant="reversed"
              href={`mailto:${data.gcms.companyAddresses[0].email}`}
            >
              {data.gcms.companyAddresses[0].email}
            </AnchorLink>
          </Paragraph>
        </div>

        <div className={styles.location}>
          <Label className={styles.title} size="small" variant="uppercase">
            Visitez-nous
          </Label>
          <Paragraph className={styles.infoText} variant="small">
            {data.gcms.companyAddresses[0].addressLine1}
          </Paragraph>
          <Paragraph className={styles.infoText} variant="small">
            {data.gcms.companyAddresses[0].addressLine2}
          </Paragraph>
          <Paragraph className={styles.infoText} variant="small">
            {data.gcms.companyAddresses[0].city}, {data.gcms.companyAddresses[0].provinceState},{' '}
            {data.gcms.companyAddresses[0].postalCode}
          </Paragraph>
          <Paragraph className={styles.infoText} variant="small">
            {data.gcms.companyAddresses[0].country}
          </Paragraph>
        </div>
        <div className={styles.firm}>
          <Logo type="framed-text" variant="reversed" src={`${data.gcms.companyMedias[0].logoFooter.url}`}></Logo>
        </div>

        <Paragraph className={styles.copyright} variant="small">
          © {new Date().getFullYear()} Tous droits réservés MIR.{' '}
        </Paragraph>
      </div>
    </footer>
  );
};

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styles from './footer.module.scss';
import { FooterQuery } from '../../types/graphql-types';

import { Label } from '../components/label';
import { Paragraph } from '../components/paragraph';
import { Logo } from '../components/logo';

export const query = graphql`
  query footer {
    gcms {
      companyMedias {
        logoFooter {
          url
        }
      }
      footerInformations {
        subTitleF
        paragraphInformationF
      }
    }
  }
`;

type OwnProps = {};

export const Footer: React.FC<OwnProps> = (props) => {
  const data = useStaticQuery<FooterQuery>(query);

  return (
    <footer className={styles.footer_default}>
      {data.gcms.footerInformations.map((information: object, i: number) => (
        <Paragraph className={styles.infoText} variant="small">
          {information[i].paragraphInformationF}
        </Paragraph>
      ))}

      <Label className={styles.title} size="small" variant="uppercase">
        CONTACTEZ-NOUS
      </Label>
      <Paragraph className={styles.infoText} variant="small">
        Téléphone : 514 494-4414 Sans frais : 1 844 994-4414 Courriel : info@mirinc.ca
      </Paragraph>
      <Label className={styles.title} size="small" variant="uppercase">
        VISITEZ-NOUS
      </Label>
      <Paragraph className={styles.infoText} variant="small">
        9590, boul. Henri-Bourassa Est, bureau 202 Montréal, QC H1E 2S4 Canada
      </Paragraph>
      <Logo type="framed-text" variant="reversed" src={`${data.gcms.companyMedias[0].logoFooter.url}`}></Logo>
      <Label size="small" variant="uppercase" className={styles.copyright}>
        test
      </Label>
    </footer>
  );
};

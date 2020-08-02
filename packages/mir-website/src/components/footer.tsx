import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FooterQuery } from '../../types/graphql-types';
import { Label } from '../components/label';
import { Logo } from '../components/logo';
import { Paragraph } from '../components/paragraph';
import styles from './footer.module.scss';

export const query = graphql`
  query footer {
    gcms {
      companyMedias {
        logoFooter {
          url
        }
      }
    }
  }
`;

type OwnProps = {};

export const Footer: React.FC<OwnProps> = (props) => {
  const data = useStaticQuery<FooterQuery>(query);

  return (
    <footer className={styles.wrapper}>
      {/* {data.gcms.footerInformations.map((information: object, i: number) => (
        <Paragraph className={styles.infoText} variant="small">
          {information[i].paragraphInformationF}
        </Paragraph>
      ))} */}

      <div>
        <Label className={styles.title} size="small" variant="uppercase">
          Contactez-nous
        </Label>
        <Paragraph className={styles.infoText} variant="small">
          Téléphone : 514 494-4414 Sans frais : 1 844 994-4414 Courriel : info@mirinc.ca
        </Paragraph>
      </div>

      <div>
        <Label className={styles.title} size="small" variant="uppercase">
          Visitez-nous
        </Label>
        <Paragraph className={styles.infoText} variant="small">
          9590, boul. Henri-Bourassa Est, bureau 202 Montréal, QC H1E 2S4 Canada
        </Paragraph>
      </div>

      <Logo type="framed-text" variant="reversed" src={`${data.gcms.companyMedias[0].logoFooter.url}`}></Logo>

      <Paragraph variant="small">© 2020 Tous droits réservés MIR. </Paragraph>
    </footer>
  );
};

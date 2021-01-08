import {
  LABEL_SIZE,
  PARAGRAPH_SIZE,
  TEXT_LEVEL,
  TEXT_STYLE,
  LinkStyleVariant,
  LinkVariant,
} from '@newrade/core-design-system';
import { Center, Label, Link, Paragraph, Stack } from '@newrade/core-react-ui';
import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby';
import React from 'react';
import { useStyles } from 'react-treat';
import { FooterQuery } from '../../types/graphql-types';
import { cssTheme } from '../design-system/theme';
import * as styleRefs from './footer.treat';

export const footerQuery = graphql`
  query Footer {
    contentfulCompanyInfo {
      copyright
    }

    contentfulCompanyAddress {
      addressLine1
      city
      provinceState
      postalCode
      websiteURL
      phone
      email
      fax
    }
  }
`;
//To do add - commun component props
type OwnProps = {};

export const Footer: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);
  const data = useStaticQuery<FooterQuery>(footerQuery);

  return (
    <div className={`${styles.wrapper}`}>
      <Center>
        <Stack gap={[cssTheme.sizing.var.x5]}>
          <div className={styles.grid}>
            <Stack className={styles.services} gap={[cssTheme.sizing.var.x4]}>
              <Label
                variantStyle={TEXT_STYLE.boldUppercase}
                variant={LABEL_SIZE.small}
                variantLevel={TEXT_LEVEL.tertiary}
              >
                Services
              </Label>
              <Stack gap={[cssTheme.sizing.var.x4]}>
                <Link variantStyle={LinkStyleVariant.reversed} AsElement={<GatsbyLink to={'/vasectomie/'} />}>
                  Tout sur la vasectomie
                </Link>

                <Link
                  variantStyle={LinkStyleVariant.reversed}
                  AsElement={<GatsbyLink to={'/formulaire-vasectomie/'} />}
                >
                  Formulaire de demande
                </Link>

                <Link
                  variantStyle={LinkStyleVariant.reversed}
                  AsElement={<GatsbyLink to={'/examen-pour-transport-canada/'} />}
                >
                  Examen pour Transport Canada
                </Link>
              </Stack>
            </Stack>
            <Stack className={styles.clinique} gap={[cssTheme.sizing.var.x4]}>
              <Label
                variantStyle={TEXT_STYLE.boldUppercase}
                variant={LABEL_SIZE.small}
                variantLevel={TEXT_LEVEL.tertiary}
              >
                La Clinique
              </Label>
              <Stack gap={[cssTheme.sizing.var.x4]}>
                <Link variantStyle={LinkStyleVariant.reversed} AsElement={<GatsbyLink to={'/equipe/'} />}>
                  Notre équipe
                </Link>

                <Link
                  variantStyle={LinkStyleVariant.reversed}
                  AsElement={<GatsbyLink to={'/equipe/#dr_pierre_jr_boucher'} />}
                >
                  Dr. Pierre Jr. Boucher
                </Link>

                <Link variantStyle={LinkStyleVariant.reversed} AsElement={<GatsbyLink to={'/contact/'} />}>
                  Contact
                </Link>
              </Stack>
            </Stack>
            <Stack className={styles.joindre} gap={[cssTheme.sizing.var.x4]}>
              <Label
                variantStyle={TEXT_STYLE.boldUppercase}
                variant={LABEL_SIZE.small}
                variantLevel={TEXT_LEVEL.tertiary}
              >
                Nous Joindre
              </Label>
              <Stack gap={[cssTheme.sizing.var.x4]}>
                <Link
                  variantStyle={LinkStyleVariant.reversed}
                  variant={LinkVariant.underline}
                  href={`mailto:${data?.contentfulCompanyAddress?.email}`}
                >
                  {data?.contentfulCompanyAddress?.email}
                </Link>
                <Link
                  variantStyle={LinkStyleVariant.reversed}
                  variant={LinkVariant.underline}
                  href={`tel:${data?.contentfulCompanyAddress?.phone}`}
                >
                  {data?.contentfulCompanyAddress?.phone}
                </Link>
                <Link
                  variantStyle={LinkStyleVariant.reversed}
                  variant={LinkVariant.underline}
                  href={`fax:${data?.contentfulCompanyAddress?.fax}`}
                >
                  {data?.contentfulCompanyAddress?.fax}
                </Link>
                <Link
                  variantStyle={LinkStyleVariant.reversed}
                  variant={LinkVariant.underline}
                  href={'https://goo.gl/maps/nndYpgQLkbDC6c7S7'}
                  target="blank"
                >
                  {data?.contentfulCompanyAddress?.addressLine1}
                </Link>
              </Stack>
            </Stack>
          </div>
          <Paragraph className={styles.copyright} variant={PARAGRAPH_SIZE.small}>
            {data?.contentfulCompanyInfo?.copyright}
          </Paragraph>
        </Stack>
      </Center>
    </div>
  );
};

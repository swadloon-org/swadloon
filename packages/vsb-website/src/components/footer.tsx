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
        <div className={styles.container}>
          <div className={styles.grid}>
            <Stack className={styles.services} gap={[cssTheme.sizing.var.x3]}>
              <Label
                variantStyle={TEXT_STYLE.boldUppercase}
                variant={LABEL_SIZE.small}
                variantLevel={TEXT_LEVEL.tertiary}
              >
                Services
              </Label>
              <Stack gap={[cssTheme.sizing.var.x3]}>
                <GatsbyLink to={'/vasectomie/'}>
                  <Link as="span" variantStyle={LinkStyleVariant.reversed}>
                    Tout sur la vasectomie
                  </Link>
                </GatsbyLink>
                <GatsbyLink to={'/formulaire-vasectomie/'}>
                  <Link as="span" variantStyle={LinkStyleVariant.reversed}>
                    Formulaire de demande
                  </Link>
                </GatsbyLink>
                <GatsbyLink to={'/examen-pour-transport-canada/'}>
                  <Link as="span" variantStyle={LinkStyleVariant.reversed}>
                    Examen pour Transport Canada
                  </Link>
                </GatsbyLink>
              </Stack>
            </Stack>
            <Stack className={styles.clinique} gap={[cssTheme.sizing.var.x3]}>
              <Label
                variantStyle={TEXT_STYLE.boldUppercase}
                variant={LABEL_SIZE.small}
                variantLevel={TEXT_LEVEL.tertiary}
              >
                La Clinique
              </Label>
              <Stack gap={[cssTheme.sizing.var.x3]}>
                <GatsbyLink to={'/equipe/'}>
                  <Link as="span" variantStyle={LinkStyleVariant.reversed}>
                    Notre équipe
                  </Link>
                </GatsbyLink>
                <GatsbyLink to={'/equipe/#dr_pierre_jr_boucher'}>
                  <Link as="span" variantStyle={LinkStyleVariant.reversed}>
                    Dr. Pierre Jr. Boucher
                  </Link>
                </GatsbyLink>
                <GatsbyLink to={'/contact/'}>
                  <Link as="span" variantStyle={LinkStyleVariant.reversed}>
                    Contact
                  </Link>
                </GatsbyLink>
              </Stack>
            </Stack>
            <Stack className={styles.joindre} gap={[cssTheme.sizing.var.x3]}>
              <Label
                variantStyle={TEXT_STYLE.boldUppercase}
                variant={LABEL_SIZE.small}
                variantLevel={TEXT_LEVEL.tertiary}
              >
                Nous Joindre
              </Label>
              <Stack gap={[cssTheme.sizing.var.x3]}>
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
        </div>
      </Center>
    </div>
  );
};

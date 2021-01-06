import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './footer.treat';
import { Box, Stack, Grid, Label, Center, Paragraph, keys } from '@newrade/core-react-ui';
import { graphql, useStaticQuery } from 'gatsby';
import { Link as GatsbyLink } from 'gatsby';

import { FooterQuery } from '../../types/graphql-types';
import { PARAGRAPH_SIZE, TEXT_LEVEL, TEXT_STYLE, LABEL_SIZE } from '@newrade/core-design-system';
import { Theme } from '@newrade/core-react-ui';
import { cssTheme } from '../design-system/theme';
import { elem } from 'fp-ts/lib/Option';
import { toArray } from 'lodash';

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
            <Stack
              className={styles.services}
              gap={[`${cssTheme.sizing.var.x2}`, `${cssTheme.sizing.var.x4}`, `${cssTheme.sizing.var.x4}`]}
            >
              <Label
                variantStyle={TEXT_STYLE.boldUppercase}
                variant={LABEL_SIZE.small}
                variantLevel={TEXT_LEVEL.tertiary}
              >
                Services
              </Label>
              <Stack gap={[cssTheme.sizing.var.x3]}>
                <GatsbyLink to={'/vasectomie/'}>Tout sur la vasectomie</GatsbyLink>
                <GatsbyLink to={'/formulaire-vasectomie/'}>Formulaire de demande</GatsbyLink>
                <GatsbyLink to={'/examen-pour-transport-canada/'}>Examen pour Transport Canada</GatsbyLink>
              </Stack>
            </Stack>
            <Stack
              className={styles.clinique}
              gap={[`${cssTheme.sizing.var.x2}`, `${cssTheme.sizing.var.x4}`, `${cssTheme.sizing.var.x4}`]}
            >
              <Label
                variantStyle={TEXT_STYLE.boldUppercase}
                variant={LABEL_SIZE.small}
                variantLevel={TEXT_LEVEL.tertiary}
              >
                La Clinique
              </Label>
              <Stack gap={[cssTheme.sizing.var.x3]}>
                <GatsbyLink to={'/equipe/'}>Notre équipe</GatsbyLink>
                <GatsbyLink to={'/equipe/#dr_pierre_jr_boucher'}>Dr. Pierre Jr. Boucher</GatsbyLink>
                <GatsbyLink to={'/contact/'}>Contact</GatsbyLink>
              </Stack>
            </Stack>
            <Stack
              className={styles.joindre}
              gap={[`${cssTheme.sizing.var.x2}`, `${cssTheme.sizing.var.x4}`, `${cssTheme.sizing.var.x4}`]}
            >
              <Label
                variantStyle={TEXT_STYLE.boldUppercase}
                variant={LABEL_SIZE.small}
                variantLevel={TEXT_LEVEL.tertiary}
              >
                Nous Joindre
              </Label>
              <Stack gap={[cssTheme.sizing.var.x3]}>
                <a href={`mailto:${data?.contentfulCompanyAddress?.email}`}>{data?.contentfulCompanyAddress?.email}</a>
                <a href={`tel:${data?.contentfulCompanyAddress?.phone}`}>{data?.contentfulCompanyAddress?.phone}</a>
                <a href={`fax:${data?.contentfulCompanyAddress?.fax}`}>{data?.contentfulCompanyAddress?.fax}</a>
                <a href={'https://goo.gl/maps/nndYpgQLkbDC6c7S7'} target="blank">
                  {data?.contentfulCompanyAddress?.addressLine1}
                </a>
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

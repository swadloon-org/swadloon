import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './footer.treat';
import { Box, Stack, Grid, Label, Center, Paragraph } from '@newrade/core-react-ui';
import { graphql, useStaticQuery } from 'gatsby';
import { Link as GatsbyLink } from 'gatsby';

import { FooterQuery } from '../../types/graphql-types';
import { PARAGRAPH_SIZE } from '@newrade/core-design-system';

export const footerQuery = graphql`
  query Footer {
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

    allContentfulPage(filter: { node_locale: { eq: "fr-CA" } }) {
      edges {
        node {
          name
          slug
        }
      }
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
        <div className={styles.grid}>
          <Stack className={styles.services}>
            <Label>SERVICES</Label>
            <Stack></Stack>
          </Stack>
          <Stack className={styles.clinique}>
            <Label>LA CLINIQUE</Label>
            <Stack></Stack>
          </Stack>
          <Stack className={styles.joindre}>
            <Label>NOUS JOINDRE</Label>
            <Stack>
              <GatsbyLink to={`mailto:${data?.contentfulCompanyAddress?.email}`}>
                {data?.contentfulCompanyAddress?.email}
              </GatsbyLink>
              <GatsbyLink to={`tel:${data?.contentfulCompanyAddress?.phone}`}>
                {data?.contentfulCompanyAddress?.phone}
              </GatsbyLink>
              <GatsbyLink to={`fax:${data?.contentfulCompanyAddress?.fax}`}>
                {data?.contentfulCompanyAddress?.fax}
              </GatsbyLink>
              <GatsbyLink to={'https://goo.gl/maps/nndYpgQLkbDC6c7S7'} target="blank">
                {data?.contentfulCompanyAddress?.addressLine1}
              </GatsbyLink>
            </Stack>
          </Stack>
        </div>
        <Paragraph className={styles.copyright} variant={PARAGRAPH_SIZE.small}>
          © {new Date().getFullYear()} Tous droits réservés MIR Inc.
        </Paragraph>
      </Center>
    </div>
  );
};

import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './footer.treat';
import BackgroundImage, { IFluidObject } from 'gatsby-background-image';
import { Box, Stack, Cluster, Label, Center } from '@newrade/core-react-ui';
import { graphql, useStaticQuery } from 'gatsby';

import { FooterQuery } from '../../types/graphql-types';

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
        <Cluster>
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          <Stack>
            <Label>SERVICES</Label>
          </Stack>
          <Stack>
            <Label>LA CLINIQUE</Label>
          </Stack>
          <Stack>
            <Label>NOUS JOINDRE</Label>
          </Stack>
        </Cluster>
      </Center>
    </div>
  );
};

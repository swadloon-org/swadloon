import { CommonComponentProps, FooterSimple, useTreatTheme } from '@newrade/core-react-ui';
import { getMergedClassname } from '@newrade/core-react-ui/lib/utilities';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { useStyles } from 'react-treat';
import { clientEnv } from '../../types/dot-env-client';
import { FooterQuery } from '../../types/graphql-types';
import * as styleRefs from './footer.treat';

export const footerQuery = graphql`
  query Footer {
    contentfulNavigation(name: { eq: "Navigation avec catégories" }) {
      id
      name
      subNavigation {
        id
        name
        links {
          id
          label
          page {
            slug
          }
        }
        subNavigation {
          id
          name
          links {
            id
            label
            page {
              slug
            }
          }
        }
      }
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
    contentfulCompanyInfo {
      copyright
    }
  }
`;

type Props = CommonComponentProps;

export const Footer: React.FC<Props> = ({ id, style, className, ...props }) => {
  const styles = useStyles(styleRefs);
  const data = useStaticQuery<FooterQuery>(footerQuery);
  const mergedClassNames = getMergedClassname([className, styles.wrapper]);
  const { theme, cssTheme } = useTreatTheme();

  return (
    <FooterSimple
      Copyright={
        <>
          @ {data.contentfulCompanyInfo?.copyright} - v
          <span style={{ fontVariantNumeric: 'tabular-nums' }}>{clientEnv.APP_VERSION}</span>
        </>
      }
    ></FooterSimple>
  );
};

import { LABEL_SIZE, LinkVariant, PARAGRAPH_SIZE, TEXT_LEVEL, TEXT_STYLE } from '@newrade/core-design-system';
import {
  Center,
  CommonComponentProps,
  getMergedClassname,
  Label,
  Link,
  ListItem,
  ListItems,
  Paragraph,
  Stack,
  useTreatTheme,
} from '@newrade/core-react-ui';
import { IoCallOutline } from '@react-icons/all-files/io5/IoCallOutline';
import { IoLocationOutline } from '@react-icons/all-files/io5/IoLocationOutline';
import { IoMailOutline } from '@react-icons/all-files/io5/IoMailOutline';
import { IoPrintOutline } from '@react-icons/all-files/io5/IoPrintOutline';
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
      # subNavigation {
      # id
      # name
      # links {
      #   id
      #   label
      #   page {
      #     slug
      #   }
      # }
      # subNavigation {
      #   id
      #   name
      #   links {
      #     id
      #     label
      #     page {
      #       slug
      #     }
      #   }
      # }
      # }
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
  const { theme, cssTheme } = useTreatTheme();
  const styles = useStyles(styleRefs);
  const data = useStaticQuery<FooterQuery>(footerQuery);
  const mergedClassNames = getMergedClassname([className, styles.wrapper]);

  return (
    <footer id={id} style={style} className={mergedClassNames}>
      <Center>
        <Stack gap={[cssTheme.sizing.var.x5]}>
          <div className={styles.grid}>
            {/* {data.contentfulNavigation?.subNavigation?.map((nav) => {
              return (
                <Stack
                  key={nav?.id}
                  className={/services/gi.test(nav?.name || '') ? styles.services : styles.clinique}
                  gap={[cssTheme.sizing.var.x4]}
                >
                  <Label
                    variantStyle={TEXT_STYLE.boldUppercase}
                    variant={LABEL_SIZE.small}
                    variantLevel={TEXT_LEVEL.tertiary}
                  >
                    {nav?.name}
                  </Label>

                  <Stack gap={[cssTheme.sizing.var.x4]}>
                    {nav?.links?.map((link) => {
                      return (
                        <Link
                          key={link?.id}
                          variantLevel={TEXT_LEVEL.primaryReversed}
                          AsElement={<GatsbyLink to={link?.page?.slug || ''} />}
                        >
                          {link?.label}
                        </Link>
                      );
                    })}
                  </Stack>
                </Stack>
              );
            })} */}

            <Stack className={styles.joindre} gap={[cssTheme.sizing.var.x4]}>
              <Label
                variantStyle={TEXT_STYLE.boldUppercase}
                variant={LABEL_SIZE.small}
                variantLevel={TEXT_LEVEL.tertiary}
              >
                Nous Joindre
              </Label>

              <ListItems gap={[cssTheme.sizing.var.x4]}>
                <ListItem variantLevel={TEXT_LEVEL.primaryReversed} variantIcon={'icon'} Icon={<IoMailOutline />}>
                  <Link
                    className={styles.listItem}
                    variantLevel={TEXT_LEVEL.primaryReversed}
                    variant={LinkVariant.underline}
                    href={`mailto:${data.contentfulCompanyAddress?.email}`}
                  >
                    {data.contentfulCompanyAddress?.email}
                  </Link>
                </ListItem>

                <ListItem variantLevel={TEXT_LEVEL.primaryReversed} variantIcon={'icon'} Icon={<IoCallOutline />}>
                  <Link
                    className={styles.listItem}
                    variantLevel={TEXT_LEVEL.primaryReversed}
                    variant={LinkVariant.underline}
                    href={`tel:${data.contentfulCompanyAddress?.phone}`}
                  >
                    {data.contentfulCompanyAddress?.phone}
                  </Link>
                </ListItem>

                <ListItem variantLevel={TEXT_LEVEL.primaryReversed} variantIcon={'icon'} Icon={<IoPrintOutline />}>
                  <Link
                    className={styles.listItem}
                    variantLevel={TEXT_LEVEL.primaryReversed}
                    variant={LinkVariant.underline}
                    href={`fax:${data.contentfulCompanyAddress?.fax}`}
                  >
                    {data.contentfulCompanyAddress?.fax}
                  </Link>
                </ListItem>

                <ListItem
                  variantLevel={TEXT_LEVEL.primaryReversed}
                  variantIcon={'icon'}
                  Icon={<IoLocationOutline style={{ verticalAlign: 'top' }} />}
                >
                  <Link
                    className={styles.listItem}
                    variantLevel={TEXT_LEVEL.primaryReversed}
                    variant={LinkVariant.underline}
                    href={'https://goo.gl/maps/nndYpgQLkbDC6c7S7'}
                    target="blank"
                  >
                    {data.contentfulCompanyAddress?.addressLine1}
                    <br />
                  </Link>
                </ListItem>
              </ListItems>
            </Stack>
          </div>
          <Paragraph className={styles.copyright} variant={PARAGRAPH_SIZE.xSmall}>
            {data.contentfulCompanyInfo?.copyright} - v{clientEnv.APP_VERSION}
          </Paragraph>
        </Stack>
      </Center>
    </footer>
  );
};

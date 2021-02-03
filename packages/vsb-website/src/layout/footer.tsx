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
} from '@newrade/core-react-ui';
import { IoCallOutline } from '@react-icons/all-files/io5/IoCallOutline';
import { IoLocationOutline } from '@react-icons/all-files/io5/IoLocationOutline';
import { IoMailOutline } from '@react-icons/all-files/io5/IoMailOutline';
import { IoPrintOutline } from '@react-icons/all-files/io5/IoPrintOutline';
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
      addressLine2
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

type Props = CommonComponentProps;

export const Footer: React.FC<Props> = ({ id, style, className, ...props }) => {
  const styles = useStyles(styleRefs);
  const data = useStaticQuery<FooterQuery>(footerQuery);
  const mergedClassNames = getMergedClassname([className, styles.wrapper]);

  return (
    <footer id={id} style={style} className={mergedClassNames}>
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
                <Link variantLevel={TEXT_LEVEL.primaryReversed} AsElement={<GatsbyLink to={'/vasectomie/'} />}>
                  Tout sur la vasectomie
                </Link>

                <Link
                  variantLevel={TEXT_LEVEL.primaryReversed}
                  AsElement={<GatsbyLink to={'/formulaire-vasectomie/'} />}
                >
                  Formulaire de demande
                </Link>

                <Link
                  variantLevel={TEXT_LEVEL.primaryReversed}
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
                <Link variantLevel={TEXT_LEVEL.primaryReversed} AsElement={<GatsbyLink to={'/equipe/'} />}>
                  Notre équipe
                </Link>

                <Link
                  variantLevel={TEXT_LEVEL.primaryReversed}
                  AsElement={<GatsbyLink to={'/equipe/#dr_pierre_jr_boucher'} />}
                >
                  Dr. Pierre Jr. Boucher
                </Link>

                <Link variantLevel={TEXT_LEVEL.primaryReversed} AsElement={<GatsbyLink to={'/contact/'} />}>
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

              <ListItems gap={[cssTheme.sizing.var.x4]}>
                <ListItem variantLevel={TEXT_LEVEL.primaryReversed} variantIcon={'icon'} Icon={<IoMailOutline />}>
                  <Link
                    className={styles.listItem}
                    variantLevel={TEXT_LEVEL.primaryReversed}
                    variant={LinkVariant.underline}
                    href={`mailto:${data?.contentfulCompanyAddress?.email}`}
                  >
                    {data?.contentfulCompanyAddress?.email}
                  </Link>
                </ListItem>

                <ListItem variantLevel={TEXT_LEVEL.primaryReversed} variantIcon={'icon'} Icon={<IoCallOutline />}>
                  <Link
                    className={styles.listItem}
                    variantLevel={TEXT_LEVEL.primaryReversed}
                    variant={LinkVariant.underline}
                    href={`tel:${data?.contentfulCompanyAddress?.phone}`}
                  >
                    {data?.contentfulCompanyAddress?.phone}
                  </Link>
                </ListItem>

                <ListItem variantLevel={TEXT_LEVEL.primaryReversed} variantIcon={'icon'} Icon={<IoPrintOutline />}>
                  <Link
                    className={styles.listItem}
                    variantLevel={TEXT_LEVEL.primaryReversed}
                    variant={LinkVariant.underline}
                    href={`fax:${data?.contentfulCompanyAddress?.fax}`}
                  >
                    {data?.contentfulCompanyAddress?.fax}
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
                    {data?.contentfulCompanyAddress?.addressLine1}
                    <br />
                    {data?.contentfulCompanyAddress?.addressLine2}
                  </Link>
                </ListItem>
              </ListItems>
            </Stack>
          </div>
          <Paragraph className={styles.copyright} variant={PARAGRAPH_SIZE.small}>
            {data?.contentfulCompanyInfo?.copyright}
          </Paragraph>
        </Stack>
      </Center>
    </footer>
  );
};

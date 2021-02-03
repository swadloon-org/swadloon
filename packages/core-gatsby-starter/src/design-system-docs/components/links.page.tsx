import { HEADING, LinkIcon, LinkVariant, PARAGRAPH_SIZE, TEXT_LEVEL } from '@newrade/core-design-system';
import { Details, Heading, Label, Link, Stack, Summary, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { DesignSystemPageProps, DesignSystemPageTemplate } from '../../templates/design-system-page.template';
import * as styleRefs from '../home.treat';

const PageComponent: React.FC<DesignSystemPageProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();

  if (!(cssTheme && theme)) {
    return <div className={styles.wrapper}>Please provide a theme</div>;
  }

  return (
    <Stack id={'Design System'} gap={[cssTheme.sizing.var.x5]}>
      <Stack id={'Components'} gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>Components</Heading>

        <Details id={'Links'} open={true}>
          <Summary>Links</Summary>

          <Stack gap={[cssTheme.sizing.var.x5]}>
            <Stack gap={[cssTheme.sizing.var.x3]}>
              <Label variantLevel={TEXT_LEVEL.tertiary}>Variant</Label>

              <Link href={'#'} variant={LinkVariant.noUnderline}></Link>
              <Link href={'#'} variant={LinkVariant.underline}></Link>
            </Stack>

            <Stack gap={[cssTheme.sizing.var.x3]}>
              <Label variantLevel={TEXT_LEVEL.tertiary}>Variant Level</Label>

              <Link href={'#'} variant={LinkVariant.underline} variantLevel={TEXT_LEVEL.primary}></Link>
              <Link href={'#'} variant={LinkVariant.underline} variantLevel={TEXT_LEVEL.secondary}></Link>
              <Link href={'#'} variant={LinkVariant.underline} variantLevel={TEXT_LEVEL.tertiary}></Link>
            </Stack>

            <Stack gap={[cssTheme.sizing.var.x3]}>
              <Label variantLevel={TEXT_LEVEL.tertiary}>Size</Label>

              <Link href={'#'} variantSize={PARAGRAPH_SIZE.large}></Link>
              <Link href={'#'} variantSize={PARAGRAPH_SIZE.medium}></Link>
              <Link href={'#'} variantSize={PARAGRAPH_SIZE.small}></Link>
              <Link href={'#'} variantSize={PARAGRAPH_SIZE.xSmall}></Link>
            </Stack>

            <Stack gap={[cssTheme.sizing.var.x3]}>
              <Label variantLevel={TEXT_LEVEL.tertiary}>Icon</Label>

              <Link href={'#'} variantSize={PARAGRAPH_SIZE.large} variantIcon={LinkIcon.right}></Link>
              <Link href={'#'} variantSize={PARAGRAPH_SIZE.medium} variantIcon={LinkIcon.right}></Link>
              <Link href={'#'} variantSize={PARAGRAPH_SIZE.small} variantIcon={LinkIcon.right}></Link>
              <Link href={'#'} variantSize={PARAGRAPH_SIZE.xSmall} variantIcon={LinkIcon.right}></Link>
            </Stack>

            <Stack gap={[cssTheme.sizing.var.x3]}>
              <Label variantLevel={TEXT_LEVEL.tertiary}>External</Label>

              <Link
                href={'https://google.com'}
                target={'_blank'}
                variant={LinkVariant.underline}
                variantLevel={TEXT_LEVEL.primary}
                variantIcon={LinkIcon.right}
              ></Link>
            </Stack>
          </Stack>
        </Details>
      </Stack>
    </Stack>
  );
};

const Page: React.FC<DesignSystemPageProps> = (props) => {
  return (
    <DesignSystemPageTemplate {...props}>
      <PageComponent {...props}></PageComponent>
    </DesignSystemPageTemplate>
  );
};

export default Page;

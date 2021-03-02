import { HEADING, LinkIcon, LinkVariant, PARAGRAPH_SIZE, TEXT_LEVEL } from '@newrade/core-design-system';
import { Heading, Label, Link, Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { PageHeader } from '../../src/utils/page-header';
import { DesignSystemPageProps, DesignSystemPageTemplate } from '../../templates/design-system.template';
import * as styleRefs from '../home.treat';

const PageComponent: React.FC<DesignSystemPageProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();

  if (!(cssTheme && theme)) {
    return <div className={styles.wrapper}>Please provide a theme</div>;
  }

  return (
    <>
      <PageHeader title={'Links Component'}>How link component should be used with all variants.</PageHeader>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>Variant</Heading>

        <Stack gap={[cssTheme.sizing.var.x3]}>
          <Link href={'#'} variant={LinkVariant.noUnderline}></Link>
          <Link href={'#'} variant={LinkVariant.underline}></Link>
        </Stack>
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>Variant Level</Heading>

        <Stack gap={[cssTheme.sizing.var.x3]}>
          <Link href={'#'} variant={LinkVariant.underline} variantLevel={TEXT_LEVEL.primary}></Link>
          <Link href={'#'} variant={LinkVariant.underline} variantLevel={TEXT_LEVEL.secondary}></Link>
          <Link href={'#'} variant={LinkVariant.underline} variantLevel={TEXT_LEVEL.tertiary}></Link>
        </Stack>
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>Size</Heading>

        <Stack gap={[cssTheme.sizing.var.x3]}>
          <Link href={'#'} variantSize={PARAGRAPH_SIZE.large}></Link>
          <Link href={'#'} variantSize={PARAGRAPH_SIZE.medium}></Link>
          <Link href={'#'} variantSize={PARAGRAPH_SIZE.small}></Link>
          <Link href={'#'} variantSize={PARAGRAPH_SIZE.xSmall}></Link>
        </Stack>
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>Icon</Heading>

        <Stack gap={[cssTheme.sizing.var.x3]}>
          <Link href={'#'} variantSize={PARAGRAPH_SIZE.large} variantIcon={LinkIcon.right}></Link>
          <Link href={'#'} variantSize={PARAGRAPH_SIZE.medium} variantIcon={LinkIcon.right}></Link>
          <Link href={'#'} variantSize={PARAGRAPH_SIZE.small} variantIcon={LinkIcon.right}></Link>
          <Link href={'#'} variantSize={PARAGRAPH_SIZE.xSmall} variantIcon={LinkIcon.right}></Link>
        </Stack>
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>External</Heading>

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
    </>
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

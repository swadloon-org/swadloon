import { HEADING, TEXT_LEVEL } from '@newrade/core-design-system';
import { BoxV2, Details, Heading, Paragraph, Stack, Summary, useTreatTheme, Cluster } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { DesignSystemPageProps, DesignSystemPageTemplate } from '../../templates/design-system-page.template';
import * as styleRefs from '../home.treat';
import { ColorPalette } from '../utils/color-palette';

const PageComponent: React.FC<DesignSystemPageProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();

  if (!(cssTheme && theme)) {
    return <div className={styles.wrapper}>Please provide a theme</div>;
  }

  return (
    <Stack gap={[cssTheme.sizing.var.x5]}>
      <Stack gap={[cssTheme.sizing.var.x4]}>
        <Heading variant={HEADING.h2}>Color Intents</Heading>
        <Paragraph>How colors should be used in text & components.</Paragraph>
      </Stack>

      <Details id={'Text'} open={true}>
        <Summary>
          <Heading variant={HEADING.h3}>Text</Heading>
        </Summary>

        <BoxV2 padding={[cssTheme.sizing.var.x3, '0']}>
          <Stack gap={[cssTheme.sizing.var.x5]}>
            <Cluster gap={[cssTheme.sizing.var.x5]} justifyContent={['flex-start']}>
              <Stack gap={[cssTheme.sizing.var.x2]}>
                <Heading variant={HEADING.h2} variantLevel={TEXT_LEVEL.primary}></Heading>
                <Heading variant={HEADING.h2} variantLevel={TEXT_LEVEL.secondary}></Heading>
                <Heading variant={HEADING.h2} variantLevel={TEXT_LEVEL.tertiary}></Heading>
              </Stack>

              <Stack gap={[cssTheme.sizing.var.x2]} style={{ backgroundColor: cssTheme.colors.colors.grey[1000] }}>
                <Heading variant={HEADING.h2} variantLevel={TEXT_LEVEL.primaryReversed}></Heading>
                <Heading variant={HEADING.h2} variantLevel={TEXT_LEVEL.secondaryReversed}></Heading>
                <Heading variant={HEADING.h2} variantLevel={TEXT_LEVEL.tertiaryReversed}></Heading>
              </Stack>
            </Cluster>

            <ColorPalette
              colorName={''}
              colorOrPalette={{
                primaryText: theme.colors.colorIntents.primaryText,
                secondaryText: theme.colors.colorIntents.secondaryText,
                tertiaryText: theme.colors.colorIntents.tertiaryText,
                disabledText: theme.colors.colorIntents.disabledText,
                primaryReversed: theme.colors.colorIntents.primaryReversed,
              }}
            ></ColorPalette>
          </Stack>
        </BoxV2>
      </Details>

      <Details id={'Actions'} open={true}>
        <Summary>
          <Heading variant={HEADING.h3}>Actions</Heading>
        </Summary>

        <BoxV2 padding={[cssTheme.sizing.var.x3, '0']}>
          <ColorPalette
            colorName={''}
            colorOrPalette={{
              primary: theme.colors.colorIntents.primary,
            }}
          ></ColorPalette>
        </BoxV2>
      </Details>

      <Details id={'Actions'} open={true}>
        <Summary>
          <Heading variant={HEADING.h3}>Backgrounds</Heading>
        </Summary>

        <BoxV2 padding={[cssTheme.sizing.var.x3, '0']}>
          <ColorPalette
            colorName={''}
            colorOrPalette={{
              background0: theme.colors.colorIntents.background0,
              background1: theme.colors.colorIntents.background1,
              background2: theme.colors.colorIntents.background2,
              backgroundDisabled: theme.colors.colorIntents.backgroundDisabled,
            }}
          ></ColorPalette>
        </BoxV2>
      </Details>

      <Details id={'State'} open={true}>
        <Summary>
          <Heading variant={HEADING.h3}>State</Heading>
        </Summary>

        <BoxV2 padding={[cssTheme.sizing.var.x3, '0']}>
          <ColorPalette
            colorName={''}
            colorOrPalette={{
              successBackground: theme.colors.colorIntents.successBackground,
              successAction: theme.colors.colorIntents.successAction,
              successText: theme.colors.colorIntents.successText,
            }}
          ></ColorPalette>
        </BoxV2>

        <BoxV2 padding={[cssTheme.sizing.var.x3, '0']}>
          <ColorPalette
            colorName={''}
            colorOrPalette={{
              warningBackground: theme.colors.colorIntents.warningBackground,
              warningAction: theme.colors.colorIntents.warningAction,
              warningText: theme.colors.colorIntents.warningText,
            }}
          ></ColorPalette>
        </BoxV2>

        <BoxV2 padding={[cssTheme.sizing.var.x3, '0']}>
          <ColorPalette
            colorName={''}
            colorOrPalette={{
              dangerBackground: theme.colors.colorIntents.dangerBackground,
              dangerAction: theme.colors.colorIntents.dangerAction,
              dangerText: theme.colors.colorIntents.dangerText,
            }}
          ></ColorPalette>
        </BoxV2>
      </Details>
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

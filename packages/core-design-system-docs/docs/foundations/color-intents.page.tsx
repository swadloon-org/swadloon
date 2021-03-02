import { ButtonVariant, HEADING, TEXT_LEVEL } from '@newrade/core-design-system';
import { BoxV2, Button, Heading, Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { DesignSystemPageProps, DesignSystemPageTemplate } from '../../templates/design-system.template';
import * as styleRefs from '../home.treat';
import { ColorPalette } from '../utils/color-palette';
import { PageHeader } from '../utils/page-header';
import { Placeholder } from '../utils/placeholder';
import { ReversedBox } from '../utils/reversed-box';

const PageComponent: React.FC<DesignSystemPageProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();

  if (!(cssTheme && theme)) {
    return <div className={styles.wrapper}>Please provide a theme</div>;
  }

  return (
    <>
      <PageHeader title={'Color Intents'}>How colors should be used in text & components.</PageHeader>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>Text</Heading>

        <Stack gap={[cssTheme.sizing.var.x5]}>
          <Stack gap={[cssTheme.sizing.var.x2]}>
            <Heading variant={HEADING.h2} variantLevel={TEXT_LEVEL.primary}>
              Primary Text
            </Heading>
            <Heading variant={HEADING.h2} variantLevel={TEXT_LEVEL.secondary}>
              Secondary Text
            </Heading>
            <Heading variant={HEADING.h2} variantLevel={TEXT_LEVEL.tertiary}>
              Tertiary Text
            </Heading>
          </Stack>

          <ReversedBox>
            <Stack gap={[cssTheme.sizing.var.x2]}>
              <Heading variant={HEADING.h2} variantLevel={TEXT_LEVEL.primaryReversed}>
                Primary Text
              </Heading>
              <Heading variant={HEADING.h2} variantLevel={TEXT_LEVEL.secondaryReversed}>
                Secondary Text
              </Heading>
              <Heading variant={HEADING.h2} variantLevel={TEXT_LEVEL.tertiaryReversed}>
                Tertiary Text
              </Heading>
            </Stack>
          </ReversedBox>

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
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>Action</Heading>

        <Stack gap={[cssTheme.sizing.var.x3]}>
          <Button variant={ButtonVariant.primary}></Button>
          <Button variant={ButtonVariant.secondary}></Button>
          <Button variant={ButtonVariant.tertiary}></Button>
        </Stack>

        <ReversedBox>
          <Stack gap={[cssTheme.sizing.var.x3]}>
            <Button variant={ButtonVariant.primaryReversed}></Button>
            <Button variant={ButtonVariant.secondaryReversed}></Button>
            <Button variant={ButtonVariant.tertiaryReversed}></Button>
          </Stack>
        </ReversedBox>

        <ColorPalette
          colorName={''}
          colorOrPalette={{
            primary: theme.colors.colorIntents.primary,
          }}
        ></ColorPalette>
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>Backgrounds</Heading>

        <BoxV2
          padding={[cssTheme.sizing.var.x2]}
          style={{ backgroundColor: cssTheme.colors.colorIntents.background0, width: `100%` }}
        >
          <BoxV2
            padding={[cssTheme.sizing.var.x2]}
            style={{ backgroundColor: cssTheme.colors.colorIntents.background1, width: `100%` }}
          >
            <Placeholder
              style={{ backgroundColor: cssTheme.colors.colorIntents.background2, width: `100%` }}
            ></Placeholder>
          </BoxV2>
        </BoxV2>

        <ColorPalette
          colorName={''}
          colorOrPalette={{
            background0: theme.colors.colorIntents.background0,
            background1: theme.colors.colorIntents.background1,
            background2: theme.colors.colorIntents.background2,
            backgroundDisabled: theme.colors.colorIntents.backgroundDisabled,
          }}
        ></ColorPalette>
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>State</Heading>

        <ColorPalette
          colorName={''}
          colorOrPalette={{
            successBackground: theme.colors.colorIntents.successBackground,
            successAction: theme.colors.colorIntents.successAction,
            successText: theme.colors.colorIntents.successText,
          }}
        ></ColorPalette>

        <ColorPalette
          colorName={''}
          colorOrPalette={{
            warningBackground: theme.colors.colorIntents.warningBackground,
            warningAction: theme.colors.colorIntents.warningAction,
            warningText: theme.colors.colorIntents.warningText,
          }}
        ></ColorPalette>

        <ColorPalette
          colorName={''}
          colorOrPalette={{
            dangerBackground: theme.colors.colorIntents.dangerBackground,
            dangerAction: theme.colors.colorIntents.dangerAction,
            dangerText: theme.colors.colorIntents.dangerText,
          }}
        ></ColorPalette>
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

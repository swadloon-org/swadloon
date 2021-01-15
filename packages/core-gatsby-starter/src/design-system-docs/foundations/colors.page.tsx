import { HEADING } from '@newrade/core-design-system';
import { BoxV2, Details, Heading, Paragraph, Stack, Summary, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { DesignSystemPageTemplate, DesignSystemPageProps } from '../../templates/design-system-page.template';
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
        <Heading variant={HEADING.h2}>Colors</Heading>
        <Paragraph>Every colors used in the system</Paragraph>
      </Stack>

      <Details id={'Primary'} open={true}>
        <Summary>
          <Heading variant={HEADING.h3}>Primary</Heading>
        </Summary>

        <BoxV2 padding={[cssTheme.sizing.var.x3, '0']}>
          <ColorPalette colorName={'Primary'} colorOrPalette={theme.colors.colors.primary}></ColorPalette>
        </BoxV2>
      </Details>

      <Details id={'Greyscale'} open={true}>
        <Summary>
          <Heading variant={HEADING.h3}>Greyscale</Heading>
        </Summary>

        <Stack gap={[cssTheme.sizing.var.x3]}>
          <BoxV2 padding={[cssTheme.sizing.var.x3, '0']}>
            <ColorPalette colorName={'Greyscale'} colorOrPalette={theme.colors.colors.grey}></ColorPalette>
          </BoxV2>
        </Stack>
      </Details>

      <Details id={'Accent'} open={true}>
        <Summary>
          <Heading variant={HEADING.h3}>Accent</Heading>
        </Summary>

        <Stack gap={[cssTheme.sizing.var.x3]}>
          <BoxV2 padding={[cssTheme.sizing.var.x3, '0']}>
            <ColorPalette colorName={'Primary'} colorOrPalette={theme.colors.colors.accent1}></ColorPalette>
          </BoxV2>

          <BoxV2 padding={[cssTheme.sizing.var.x3, '0']}>
            <ColorPalette colorName={'Primary'} colorOrPalette={theme.colors.colors.accent2}></ColorPalette>
          </BoxV2>

          <BoxV2 padding={[cssTheme.sizing.var.x3, '0']}>
            <ColorPalette colorName={'Primary'} colorOrPalette={theme.colors.colors.accent3}></ColorPalette>
          </BoxV2>
        </Stack>
      </Details>

      <Details id={'Utility'} open={true}>
        <Summary>
          <Heading variant={HEADING.h3}>Utility</Heading>
        </Summary>

        <Stack gap={[cssTheme.sizing.var.x3]}>
          <BoxV2 padding={[cssTheme.sizing.var.x3, '0']}>
            <ColorPalette colorName={'Utility Green'} colorOrPalette={theme.colors.colors.utilityGreen}></ColorPalette>
          </BoxV2>

          <BoxV2 padding={[cssTheme.sizing.var.x3, '0']}>
            <ColorPalette
              colorName={'Utility Yellow'}
              colorOrPalette={theme.colors.colors.utilityYellow}
            ></ColorPalette>
          </BoxV2>

          <BoxV2 padding={[cssTheme.sizing.var.x3, '0']}>
            <ColorPalette colorName={'Utility Red'} colorOrPalette={theme.colors.colors.utilityRed}></ColorPalette>
          </BoxV2>
        </Stack>
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

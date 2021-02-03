import { HEADING } from '@newrade/core-design-system';
import { Heading, Paragraph, Stack, useTreatTheme } from '@newrade/core-react-ui';
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
    <Stack gap={[cssTheme.sizing.var.x6]}>
      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>Colors</Heading>
        <Paragraph>Every colors used in the system.</Paragraph>
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h3}>Primary</Heading>

        <ColorPalette colorName={'Primary'} colorOrPalette={theme.colors.colors.primary}></ColorPalette>
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h3}>Greyscale</Heading>

        <Stack gap={[cssTheme.sizing.var.x4]}>
          <ColorPalette colorName={'Greyscale'} colorOrPalette={theme.colors.colors.grey}></ColorPalette>
        </Stack>
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h3}>Accent</Heading>

        <Stack gap={[cssTheme.sizing.var.x4]}>
          <ColorPalette colorName={'Primary'} colorOrPalette={theme.colors.colors.accent1}></ColorPalette>

          <ColorPalette colorName={'Primary'} colorOrPalette={theme.colors.colors.accent2}></ColorPalette>

          <ColorPalette colorName={'Primary'} colorOrPalette={theme.colors.colors.accent3}></ColorPalette>
        </Stack>
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h3}>Utility</Heading>

        <Stack gap={[cssTheme.sizing.var.x4]}>
          <ColorPalette colorName={'Utility Green'} colorOrPalette={theme.colors.colors.utilityGreen}></ColorPalette>

          <ColorPalette colorName={'Utility Yellow'} colorOrPalette={theme.colors.colors.utilityYellow}></ColorPalette>

          <ColorPalette colorName={'Utility Red'} colorOrPalette={theme.colors.colors.utilityRed}></ColorPalette>
        </Stack>
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

import { ButtonSize, ButtonVariant, HEADING, LABEL_SIZE, TEXT_LEVEL } from '@newrade/core-design-system';
import { BoxV2, Button, Details, Grid, Heading, Label, Stack, Summary, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import DesignSystemPageTemplate, { DesignSystemPageProps } from '../../templates/design-system-page.template';
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

        <Details id={'Button'} open={true}>
          <Summary>
            <Heading variant={HEADING.h3}>Button</Heading>
          </Summary>

          <BoxV2 padding={[cssTheme.sizing.var.x3, 0]}>
            <Stack gap={[cssTheme.sizing.var.x4]}>
              <Grid gap={[cssTheme.sizing.var.x2]}>
                <Label variantLevel={TEXT_LEVEL.tertiary}>Sizes</Label>

                <Button variant={ButtonVariant.primary} size={ButtonSize.large}></Button>
              </Grid>
            </Stack>
          </BoxV2>
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

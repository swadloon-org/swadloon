import { ButtonSize, ButtonVariant, HEADING, LABEL_SIZE, TEXT_LEVEL, ButtonIcon } from '@newrade/core-design-system';
import { BoxV2, Button, Details, Grid, Heading, Label, Stack, Summary, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { DesignSystemPageTemplate, DesignSystemPageProps } from '../../templates/design-system-page.template';
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
            <Stack gap={[cssTheme.sizing.var.x5]}>
              <Stack gap={[cssTheme.sizing.var.x3]}>
                <Label variantLevel={TEXT_LEVEL.tertiary}>Variant</Label>

                <Button variant={ButtonVariant.primary}></Button>
                <Button variant={ButtonVariant.secondary}></Button>
                <Button variant={ButtonVariant.tertiary}></Button>
              </Stack>

              <Stack gap={[cssTheme.sizing.var.x3]}>
                <Label variantLevel={TEXT_LEVEL.tertiary}>Sizes</Label>

                <Button size={ButtonSize.large}></Button>
                <Button size={ButtonSize.medium}></Button>
                <Button size={ButtonSize.small}></Button>
                <Button size={ButtonSize.xsmall}></Button>
              </Stack>

              <Stack gap={[cssTheme.sizing.var.x3]}>
                <Label variantLevel={TEXT_LEVEL.tertiary}>Icon</Label>

                <Button size={ButtonSize.large} icon={ButtonIcon.right}></Button>
                <Button size={ButtonSize.medium} icon={ButtonIcon.right}></Button>
                <Button size={ButtonSize.small} icon={ButtonIcon.right}></Button>
                <Button size={ButtonSize.xsmall} icon={ButtonIcon.right}></Button>
              </Stack>

              <Stack gap={[cssTheme.sizing.var.x3]}>
                <Label variantLevel={TEXT_LEVEL.tertiary}>States</Label>

                <Button isDisabled={true} variant={ButtonVariant.primary}></Button>
                <Button isDisabled={true} variant={ButtonVariant.secondary}></Button>
                <Button isDisabled={true} variant={ButtonVariant.tertiary}></Button>
              </Stack>
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

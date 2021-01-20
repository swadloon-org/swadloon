import { ButtonIcon, ButtonSize, ButtonVariant, HEADING, TEXT_LEVEL } from '@newrade/core-design-system';
import { BoxV2, Button, Details, Heading, Label, Stack, Summary, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { DesignSystemPageProps, DesignSystemPageTemplate } from '../../templates/design-system-page.template';
import { IoArrowForwardOutline } from 'react-icons/io5';
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

                <Button size={ButtonSize.large} icon={ButtonIcon.right} Icon={<IoArrowForwardOutline />}></Button>
                <Button size={ButtonSize.large} icon={ButtonIcon.left}></Button>
                <Button size={ButtonSize.large} icon={ButtonIcon.icon}></Button>

                <Button size={ButtonSize.medium} icon={ButtonIcon.right} Icon={<IoArrowForwardOutline />}></Button>
                <Button size={ButtonSize.medium} icon={ButtonIcon.left}></Button>
                <Button size={ButtonSize.medium} icon={ButtonIcon.icon}></Button>

                <Button size={ButtonSize.small} icon={ButtonIcon.right} Icon={<IoArrowForwardOutline />}></Button>
                <Button size={ButtonSize.small} icon={ButtonIcon.left}></Button>
                <Button size={ButtonSize.small} icon={ButtonIcon.icon}></Button>

                <Button size={ButtonSize.xsmall} icon={ButtonIcon.right} Icon={<IoArrowForwardOutline />}></Button>
                <Button size={ButtonSize.xsmall} icon={ButtonIcon.left}></Button>
                <Button size={ButtonSize.xsmall} icon={ButtonIcon.icon}></Button>

                <Button
                  variant={ButtonVariant.secondary}
                  size={ButtonSize.large}
                  icon={ButtonIcon.right}
                  Icon={<IoArrowForwardOutline />}
                ></Button>
                <Button variant={ButtonVariant.secondary} size={ButtonSize.large} icon={ButtonIcon.left}></Button>
                <Button variant={ButtonVariant.secondary} size={ButtonSize.large} icon={ButtonIcon.icon}></Button>

                <Button
                  variant={ButtonVariant.secondary}
                  size={ButtonSize.medium}
                  icon={ButtonIcon.right}
                  Icon={<IoArrowForwardOutline />}
                ></Button>
                <Button variant={ButtonVariant.secondary} size={ButtonSize.medium} icon={ButtonIcon.left}></Button>
                <Button variant={ButtonVariant.secondary} size={ButtonSize.medium} icon={ButtonIcon.icon}></Button>

                <Button
                  variant={ButtonVariant.secondary}
                  size={ButtonSize.small}
                  icon={ButtonIcon.right}
                  Icon={<IoArrowForwardOutline />}
                ></Button>
                <Button variant={ButtonVariant.secondary} size={ButtonSize.small} icon={ButtonIcon.left}></Button>
                <Button variant={ButtonVariant.secondary} size={ButtonSize.small} icon={ButtonIcon.icon}></Button>

                <Button
                  variant={ButtonVariant.secondary}
                  size={ButtonSize.xsmall}
                  icon={ButtonIcon.right}
                  Icon={<IoArrowForwardOutline />}
                ></Button>
                <Button variant={ButtonVariant.secondary} size={ButtonSize.xsmall} icon={ButtonIcon.left}></Button>
                <Button variant={ButtonVariant.secondary} size={ButtonSize.xsmall} icon={ButtonIcon.icon}></Button>

                <Button
                  variant={ButtonVariant.tertiary}
                  size={ButtonSize.large}
                  icon={ButtonIcon.right}
                  Icon={<IoArrowForwardOutline />}
                ></Button>
                <Button variant={ButtonVariant.tertiary} size={ButtonSize.large} icon={ButtonIcon.left}></Button>
                <Button variant={ButtonVariant.tertiary} size={ButtonSize.large} icon={ButtonIcon.icon}></Button>

                <Button
                  variant={ButtonVariant.tertiary}
                  size={ButtonSize.medium}
                  icon={ButtonIcon.right}
                  Icon={<IoArrowForwardOutline />}
                ></Button>
                <Button variant={ButtonVariant.tertiary} size={ButtonSize.medium} icon={ButtonIcon.left}></Button>
                <Button variant={ButtonVariant.tertiary} size={ButtonSize.medium} icon={ButtonIcon.icon}></Button>

                <Button
                  variant={ButtonVariant.tertiary}
                  size={ButtonSize.small}
                  icon={ButtonIcon.right}
                  Icon={<IoArrowForwardOutline />}
                ></Button>
                <Button variant={ButtonVariant.tertiary} size={ButtonSize.small} icon={ButtonIcon.left}></Button>
                <Button variant={ButtonVariant.tertiary} size={ButtonSize.small} icon={ButtonIcon.icon}></Button>

                <Button
                  variant={ButtonVariant.tertiary}
                  size={ButtonSize.xsmall}
                  icon={ButtonIcon.right}
                  Icon={<IoArrowForwardOutline />}
                ></Button>
                <Button variant={ButtonVariant.tertiary} size={ButtonSize.xsmall} icon={ButtonIcon.left}></Button>
                <Button variant={ButtonVariant.tertiary} size={ButtonSize.xsmall} icon={ButtonIcon.icon}></Button>
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

import { ButtonIcon, ButtonSize, ButtonVariant, HEADING } from '@newrade/core-design-system';
import { BoxV2, Button, Heading, Stack, useTreatTheme } from '@newrade/core-react-ui';
import { IoArrowForwardOutline } from '@react-icons/all-files/io5/IoArrowForwardOutline';
import React from 'react';
import { useStyles } from 'react-treat';
import { DesignSystemPageProps, DesignSystemPageTemplate } from '../../templates/design-system.template';
import * as styleRefs from '../home.treat';
import { PageHeader } from '../utils/page-header';

const PageComponent: React.FC<DesignSystemPageProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();

  if (!(cssTheme && theme)) {
    return <div className={styles.wrapper}>Please provide a theme</div>;
  }

  return (
    <>
      <PageHeader title={'Buttons Component'}>How the button component should be used and all variations.</PageHeader>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>Variant</Heading>

        <Stack gap={[cssTheme.sizing.var.x3]}>
          <Button variant={ButtonVariant.primary}></Button>
          <Button variant={ButtonVariant.secondary}></Button>
          <Button variant={ButtonVariant.tertiary}></Button>
        </Stack>
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>Variant Reversed</Heading>

        <BoxV2 padding={[cssTheme.sizing.var.x3]} style={{ backgroundColor: cssTheme.colors.colors.grey[800] }}>
          <Stack gap={[cssTheme.sizing.var.x3]}>
            <Button variant={ButtonVariant.primaryReversed}></Button>
            <Button variant={ButtonVariant.secondaryReversed}></Button>
            <Button variant={ButtonVariant.tertiaryReversed}></Button>
          </Stack>
        </BoxV2>
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>Variant Sizes</Heading>

        <Stack gap={[cssTheme.sizing.var.x3]}>
          <Button size={ButtonSize.large}></Button>
          <Button size={ButtonSize.medium}></Button>
          <Button size={ButtonSize.small}></Button>
          <Button size={ButtonSize.xsmall}></Button>
        </Stack>
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>Icon</Heading>

        <Stack gap={[cssTheme.sizing.var.x3]}>
          <Button size={ButtonSize.large} icon={ButtonIcon.right} Icon={<IoArrowForwardOutline />}></Button>
          <Button size={ButtonSize.large} icon={ButtonIcon.left} Icon={<IoArrowForwardOutline />}></Button>
          <Button size={ButtonSize.large} icon={ButtonIcon.icon} Icon={<IoArrowForwardOutline />}></Button>

          <Button size={ButtonSize.medium} icon={ButtonIcon.right} Icon={<IoArrowForwardOutline />}></Button>
          <Button size={ButtonSize.medium} icon={ButtonIcon.left} Icon={<IoArrowForwardOutline />}></Button>
          <Button size={ButtonSize.medium} icon={ButtonIcon.icon} Icon={<IoArrowForwardOutline />}></Button>

          <Button size={ButtonSize.small} icon={ButtonIcon.right} Icon={<IoArrowForwardOutline />}></Button>
          <Button size={ButtonSize.small} icon={ButtonIcon.left} Icon={<IoArrowForwardOutline />}></Button>
          <Button size={ButtonSize.small} icon={ButtonIcon.icon} Icon={<IoArrowForwardOutline />}></Button>

          <Button size={ButtonSize.xsmall} icon={ButtonIcon.right} Icon={<IoArrowForwardOutline />}></Button>
          <Button size={ButtonSize.xsmall} icon={ButtonIcon.left} Icon={<IoArrowForwardOutline />}></Button>
          <Button size={ButtonSize.xsmall} icon={ButtonIcon.icon} Icon={<IoArrowForwardOutline />}></Button>

          <Button
            variant={ButtonVariant.secondary}
            size={ButtonSize.large}
            icon={ButtonIcon.right}
            Icon={<IoArrowForwardOutline />}
          ></Button>
          <Button
            variant={ButtonVariant.secondary}
            size={ButtonSize.large}
            icon={ButtonIcon.left}
            Icon={<IoArrowForwardOutline />}
          ></Button>
          <Button
            variant={ButtonVariant.secondary}
            size={ButtonSize.large}
            icon={ButtonIcon.icon}
            Icon={<IoArrowForwardOutline />}
          ></Button>

          <Button
            variant={ButtonVariant.secondary}
            size={ButtonSize.medium}
            icon={ButtonIcon.right}
            Icon={<IoArrowForwardOutline />}
          ></Button>
          <Button
            variant={ButtonVariant.secondary}
            size={ButtonSize.medium}
            icon={ButtonIcon.left}
            Icon={<IoArrowForwardOutline />}
          ></Button>
          <Button
            variant={ButtonVariant.secondary}
            size={ButtonSize.medium}
            icon={ButtonIcon.icon}
            Icon={<IoArrowForwardOutline />}
          ></Button>

          <Button
            variant={ButtonVariant.secondary}
            size={ButtonSize.small}
            icon={ButtonIcon.right}
            Icon={<IoArrowForwardOutline />}
          ></Button>
          <Button
            variant={ButtonVariant.secondary}
            size={ButtonSize.small}
            icon={ButtonIcon.left}
            Icon={<IoArrowForwardOutline />}
          ></Button>
          <Button
            variant={ButtonVariant.secondary}
            size={ButtonSize.small}
            icon={ButtonIcon.icon}
            Icon={<IoArrowForwardOutline />}
          ></Button>

          <Button
            variant={ButtonVariant.secondary}
            size={ButtonSize.xsmall}
            icon={ButtonIcon.right}
            Icon={<IoArrowForwardOutline />}
          ></Button>
          <Button
            variant={ButtonVariant.secondary}
            size={ButtonSize.xsmall}
            icon={ButtonIcon.left}
            Icon={<IoArrowForwardOutline />}
          ></Button>
          <Button
            variant={ButtonVariant.secondary}
            size={ButtonSize.xsmall}
            icon={ButtonIcon.icon}
            Icon={<IoArrowForwardOutline />}
          ></Button>

          <Button
            variant={ButtonVariant.tertiary}
            size={ButtonSize.large}
            icon={ButtonIcon.right}
            Icon={<IoArrowForwardOutline />}
          ></Button>
          <Button
            variant={ButtonVariant.tertiary}
            size={ButtonSize.large}
            icon={ButtonIcon.left}
            Icon={<IoArrowForwardOutline />}
          ></Button>
          <Button
            variant={ButtonVariant.tertiary}
            size={ButtonSize.large}
            icon={ButtonIcon.icon}
            Icon={<IoArrowForwardOutline />}
          ></Button>

          <Button
            variant={ButtonVariant.tertiary}
            size={ButtonSize.medium}
            icon={ButtonIcon.right}
            Icon={<IoArrowForwardOutline />}
          ></Button>
          <Button
            variant={ButtonVariant.tertiary}
            size={ButtonSize.medium}
            icon={ButtonIcon.left}
            Icon={<IoArrowForwardOutline />}
          ></Button>
          <Button
            variant={ButtonVariant.tertiary}
            size={ButtonSize.medium}
            icon={ButtonIcon.icon}
            Icon={<IoArrowForwardOutline />}
          ></Button>

          <Button
            variant={ButtonVariant.tertiary}
            size={ButtonSize.small}
            icon={ButtonIcon.right}
            Icon={<IoArrowForwardOutline />}
          ></Button>
          <Button
            variant={ButtonVariant.tertiary}
            size={ButtonSize.small}
            icon={ButtonIcon.left}
            Icon={<IoArrowForwardOutline />}
          ></Button>
          <Button
            variant={ButtonVariant.tertiary}
            size={ButtonSize.small}
            icon={ButtonIcon.icon}
            Icon={<IoArrowForwardOutline />}
          ></Button>

          <Button
            variant={ButtonVariant.tertiary}
            size={ButtonSize.xsmall}
            icon={ButtonIcon.right}
            Icon={<IoArrowForwardOutline />}
          ></Button>
          <Button
            variant={ButtonVariant.tertiary}
            size={ButtonSize.xsmall}
            icon={ButtonIcon.left}
            Icon={<IoArrowForwardOutline />}
          ></Button>
          <Button
            variant={ButtonVariant.tertiary}
            size={ButtonSize.xsmall}
            icon={ButtonIcon.icon}
            Icon={<IoArrowForwardOutline />}
          ></Button>
        </Stack>
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>States</Heading>

        <Stack gap={[cssTheme.sizing.var.x3]}>
          <Button isDisabled={true} variant={ButtonVariant.primary}></Button>
          <Button isDisabled={true} variant={ButtonVariant.secondary}></Button>
          <Button isDisabled={true} variant={ButtonVariant.tertiary}></Button>
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

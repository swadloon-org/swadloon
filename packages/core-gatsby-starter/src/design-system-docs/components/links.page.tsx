import { HEADING, LinkVariant, PARAGRAPH_SIZE, TEXT_LEVEL } from '@newrade/core-design-system';
import {
  BoxV2,
  Button,
  Details,
  Heading,
  Label,
  Link,
  NavBar,
  Stack,
  Summary,
  useTreatTheme,
} from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import DesignSystemPageTemplate, { DesignSystemPageProps } from '../../templates/design-system-page.template';
import * as styleRefs from '../home.treat';
import { LogoPlaceholder } from '../utils/logo-placeholder';

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
          <Summary>
            <Heading variant={HEADING.h3}>Links</Heading>
          </Summary>

          <BoxV2 padding={[cssTheme.sizing.var.x3, 0]}>
            <Stack gap={[cssTheme.sizing.var.x4]}>
              <Stack gap={[cssTheme.sizing.var.x3]}>
                <Label variantLevel={TEXT_LEVEL.tertiary}>Variant</Label>

                <Link variant={LinkVariant.noUnderline}>Link</Link>
                <Link variant={LinkVariant.underline}>Link Underline</Link>
              </Stack>

              <Stack gap={[cssTheme.sizing.var.x3]}>
                <Label variantLevel={TEXT_LEVEL.tertiary}>Size</Label>

                <Link variantSize={PARAGRAPH_SIZE.large}>Link</Link>
                <Link variantSize={PARAGRAPH_SIZE.medium}>Link</Link>
                <Link variantSize={PARAGRAPH_SIZE.small}>Link</Link>
                <Link variantSize={PARAGRAPH_SIZE.xSmall}>Link</Link>
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

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
import { DesignSystemPageTemplate, DesignSystemPageProps } from '../../templates/design-system-page.template';
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
        <Heading variant={HEADING.h2}>Navigation</Heading>

        <Details id={'Navigation'} open={true}>
          <Summary>
            <Heading variant={HEADING.h3}>NavBar</Heading>
          </Summary>

          <BoxV2 padding={[cssTheme.sizing.var.x3, 0]}>
            <NavBar
              style={{ position: 'relative' }}
              MobileSvgLogo={<LogoPlaceholder height={'100%'} />}
              DesktopSvgLogo={<LogoPlaceholder height={'100%'} />}
            />
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

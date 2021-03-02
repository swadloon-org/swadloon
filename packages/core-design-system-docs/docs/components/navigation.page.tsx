/* eslint-disable react/jsx-no-undef */
import { HEADING } from '@newrade/core-design-system';
import { BoxV2, Heading, Label, NavBar, Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { LogoPlaceholder } from '../../src/utils/logo-placeholder';
import { PageHeader } from '../../src/utils/page-header';
import { DesignSystemPageProps, DesignSystemPageTemplate } from '../../templates/design-system.template';
import * as styleRefs from '../home.treat';

const PageComponent: React.FC<DesignSystemPageProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();

  if (!(cssTheme && theme)) {
    return <div className={styles.wrapper}>Please provide a theme</div>;
  }

  return (
    <>
      <PageHeader title={'Navigation'}>How colors should be used in text & components.</PageHeader>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>NavBar</Heading>
        <BoxV2 padding={[cssTheme.sizing.var.x3, 0]}>
          <NavBar
            style={{ position: 'relative' }}
            MobileSvgLogo={<LogoPlaceholder height={'100%'} />}
            DesktopSvgLogo={<LogoPlaceholder height={'100%'} />}
            MenuLinks={
              <>
                <Label>Services</Label>
                <Label>Technologies</Label>
                <Label>Agence</Label>
                <Label>Contact</Label>
              </>
            }
          />
        </BoxV2>
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

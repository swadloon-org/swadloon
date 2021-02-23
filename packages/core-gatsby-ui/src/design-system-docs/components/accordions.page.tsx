import { HEADING } from '@newrade/core-design-system';
import { Details, Heading, Paragraph, Stack, Summary, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { DesignSystemPageProps, DesignSystemPageTemplate } from '../../templates/design-system.template';
import * as styleRefs from '../home.treat';
import { lorenipsum } from '../utils/loren-ipsum';
import { PageHeader } from '../utils/page-header';

const PageComponent: React.FC<DesignSystemPageProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();

  if (!(cssTheme && theme)) {
    return <div className={styles.wrapper}>Please provide a theme</div>;
  }

  return (
    <>
      <PageHeader title={'Accordions'}>How the component accordions should be used.</PageHeader>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>Accordion</Heading>

        <Stack>
          <Details>
            <Summary>Accordion</Summary>

            <Paragraph>{lorenipsum}</Paragraph>
          </Details>

          <Details>
            <Summary>Accordion</Summary>

            <Paragraph>{lorenipsum}</Paragraph>
          </Details>

          <Details>
            <Summary>Accordion</Summary>

            <Paragraph>{lorenipsum}</Paragraph>
          </Details>
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

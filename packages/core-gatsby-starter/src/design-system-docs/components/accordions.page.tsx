import ChevronIcon from '!!file-loader!@newrade/core-react-ui/lib/assets/chevron-down-outline.svg';
import { HEADING } from '@newrade/core-design-system';
import { Details, Heading, Paragraph, Stack, Summary, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { DesignSystemPageProps, DesignSystemPageTemplate } from '../../templates/design-system-page.template';
import * as styleRefs from '../home.treat';
import { lorenipsum } from '../utils/loren-ipsum';

const PageComponent: React.FC<DesignSystemPageProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();

  if (!(cssTheme && theme)) {
    return <div className={styles.wrapper}>Please provide a theme</div>;
  }

  return (
    <Stack id={'Design System'} gap={[cssTheme.sizing.var.x5]}>
      <Stack id={'Components'} gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>Accordions</Heading>

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

        <Stack>
          <Details>
            <Summary mode={'animate'} iconOpenedPath={ChevronIcon} iconClosedPath={ChevronIcon}>
              Accordion
            </Summary>

            <Paragraph>{lorenipsum}</Paragraph>
          </Details>

          <Details>
            <Summary mode={'animate'} iconOpenedPath={ChevronIcon} iconClosedPath={ChevronIcon}>
              Accordion
            </Summary>

            <Paragraph>{lorenipsum}</Paragraph>
          </Details>

          <Details>
            <Summary mode={'animate'} iconOpenedPath={ChevronIcon} iconClosedPath={ChevronIcon}>
              Accordion
            </Summary>

            <Paragraph>{lorenipsum}</Paragraph>
          </Details>
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

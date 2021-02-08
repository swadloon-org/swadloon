import { HEADING, TEXT_LEVEL } from '@newrade/core-design-system';
import { Heading, Paragraph, Stack, useTreatTheme } from '@newrade/core-react-ui';
import { title } from 'case';
import React from 'react';
import { useStyles } from 'react-treat';
import { DesignSystemPageProps, DesignSystemPageTemplate } from '../templates/design-system-page.template';
import * as styleRefs from './home.treat';
import { PageHeader } from './utils/page-header';

const PageComponent: React.FC<DesignSystemPageProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();

  if (!(cssTheme && theme)) {
    return <div className={styles.wrapper}>Please provide a theme</div>;
  }

  return (
    <>
      <PageHeader
        title={
          <Heading variant={HEADING.h1}>
            Design System -{' '}
            <Heading variant={HEADING.h1} variantLevel={TEXT_LEVEL.secondary} display={'inline-block'} as={'span'}>
              {title(cssTheme.variation)} Theme
            </Heading>
          </Heading>
        }
      >
        These are the principles that shape how we design every aspect of the interfaces.
      </PageHeader>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Stack gap={[cssTheme.sizing.var.x4]}>
          <Paragraph>The design system describes every aspect of the visual design of a brand</Paragraph>
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

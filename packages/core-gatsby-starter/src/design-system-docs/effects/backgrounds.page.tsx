import { HEADING } from '@newrade/core-design-system';
import { Background, BoxV2, Heading, Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { DesignSystemPageTemplate, DesignSystemPageProps } from '../../templates/design-system-page.template';
import * as styleRefs from '../home.treat';
import { Placeholder } from '../utils/placeholder';

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
        <Stack gap={[cssTheme.sizing.var.x4]}>
          <Heading variant={HEADING.h2}>Background Effect</Heading>

          <BoxV2>
            <Background imageSrc={'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'} />
            <Placeholder></Placeholder>
          </BoxV2>

          <BoxV2>
            <Background imageSrc={'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'} />
            <Placeholder></Placeholder>
          </BoxV2>
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

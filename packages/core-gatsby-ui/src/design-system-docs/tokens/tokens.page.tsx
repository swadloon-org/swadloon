import { HEADING } from '@newrade/core-design-system';
import { BoxV2, Heading, InputSelect, Stack, useTreatTheme } from '@newrade/core-react-ui';
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
      <PageHeader title={'Tokens'}></PageHeader>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>Colors</Heading>

        <InputSelect>
          <option value={'CSS'}>{'CSS'}</option>
          <option value={'SCSS'}>{'SCSS'}</option>
          <option value={'JSON'}>{'JSON'}</option>
        </InputSelect>

        <BoxV2 padding={[cssTheme.sizing.var.x3, 0]}>
          <pre>
            <code>{cssTheme.colors.colors.primary[500]}</code>
          </pre>
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

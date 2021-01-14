import { HEADING } from '@newrade/core-design-system';
import { Background, BoxV2, Heading, Stack, useTreatTheme, Details, Summary, keys } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import DesignSystemPageTemplate, { DesignSystemPageProps } from '../../templates/design-system-page.template';
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

        <Details id={'Effects'} open={true}>
          <Summary>
            <Heading variant={HEADING.h3}>Effects</Heading>
          </Summary>
          <Stack id={'Effects'} gap={['1em']}>
            <h3>Effects</h3>

            <h4>Shadows</h4>
            {cssTheme.effects?.shadows &&
              keys(cssTheme.effects.shadows).map((shadow) => {
                return (
                  <div key={shadow} style={{ boxShadow: cssTheme?.effects?.shadows?.[shadow] }}>
                    {shadow}
                  </div>
                );
              })}
          </Stack>
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

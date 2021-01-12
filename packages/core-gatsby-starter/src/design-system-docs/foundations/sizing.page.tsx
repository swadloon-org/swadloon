import { HEADING } from '@newrade/core-design-system';
import { Details, Heading, keys, Stack, Summary, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import DesignSystemPageTemplate, { DesignSystemPageProps } from '../../templates/design-system-page.template';
import * as styleRefs from '../home.treat';

const PageComponent: React.FC<DesignSystemPageProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();

  if (!(cssTheme && theme)) {
    return <div className={styles.wrapper}>Please provide a theme</div>;
  }

  return (
    <Stack id={'Design System'} gap={[cssTheme.sizing.var.x5]}>
      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Details open={true}>
          <Summary>
            <Heading variant={HEADING.h3}>Sizing</Heading>
          </Summary>
          <Stack gap={['1em']}>
            <h3>Sizing</h3>

            <h4>Sizes</h4>
            {cssTheme.sizing?.sizes &&
              keys(cssTheme.sizing.sizes).map((size) => {
                return cssTheme?.sizing?.sizes[size] ? (
                  <div key={size}>
                    <label>{size}</label>
                    <Stack gap={['1em']}>
                      {keys(cssTheme?.sizing?.sizes[size]).map((step) => {
                        return (
                          <div
                            key={step}
                            id={step}
                            style={{ height: cssTheme?.sizing?.sizes[size][step], backgroundColor: 'grey' }}
                          >
                            {step}
                          </div>
                        );
                      })}
                    </Stack>
                  </div>
                ) : null;
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

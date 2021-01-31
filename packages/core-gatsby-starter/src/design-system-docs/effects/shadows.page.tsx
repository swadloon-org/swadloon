import { HEADING } from '@newrade/core-design-system';
import { Details, Heading, keys, Stack, Summary, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { DesignSystemPageProps, DesignSystemPageTemplate } from '../../templates/design-system-page.template';
import * as styleRefs from '../home.treat';
import { ShadowSwatch } from '../utils/shadow-swatch';

const PageComponent: React.FC<DesignSystemPageProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();

  if (!(cssTheme && theme)) {
    return <div className={styles.wrapper}>Please provide a theme</div>;
  }

  return (
    <Stack gap={[cssTheme.sizing.var.x5]}>
      <Heading variant={HEADING.h2}>Shadows</Heading>

      <Details id={'Box Shadows'} open={true}>
        <Summary>Box Shadows</Summary>

        {theme.effects?.boxShadows &&
          keys(theme.effects.boxShadows).map((boxShadowKey, index) => {
            const shadow = theme.effects.boxShadows[boxShadowKey];
            const xOffset = 100;
            const yOffset = 60;
            const size = 400;
            return (
              <ShadowSwatch
                key={boxShadowKey}
                shadow={shadow}
                name={boxShadowKey as string}
                size={size}
                style={{
                  width: size,
                  height: size,
                  position: 'absolute',
                  left: xOffset * index,
                  top: yOffset * (index + 1),
                }}
              />
            );
          })}
      </Details>
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

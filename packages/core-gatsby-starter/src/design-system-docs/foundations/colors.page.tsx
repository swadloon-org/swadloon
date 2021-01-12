import { Color, ColorShades5, HEADING, TEXT_LEVEL } from '@newrade/core-design-system';
import {
  Cluster,
  ColorSwatch,
  Details,
  Heading,
  keys,
  Paragraph,
  Stack,
  Summary,
  useTreatTheme,
} from '@newrade/core-react-ui';
import { title } from 'case';
import React from 'react';
import { useStyles } from 'react-treat';
import DesignSystemPageTemplate, { DesignSystemPageProps } from '../../templates/design-system-page.template';
import * as styleRefs from '../home.treat';

const PageComponent: React.FC<DesignSystemPageProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();

  const lorenipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`;

  if (!(cssTheme && theme)) {
    return <div className={styles.wrapper}>Please provide a theme</div>;
  }

  return (
    <Stack id={'Design System'} gap={[cssTheme.sizing.var.x5]}>
      <Stack id={'Foundations'} gap={[cssTheme.sizing.var.x5]}>
        <Stack gap={[cssTheme.sizing.var.x4]}>
          <Heading variant={HEADING.h2}>Colors</Heading>
          <Paragraph>Every colors used in the system</Paragraph>
        </Stack>

        <Details id={'Colors'} open={true}>
          <Summary>
            <Heading variant={HEADING.h3}>Colors</Heading>
          </Summary>
          <Stack id={'Colors'} gap={['1em']}>
            <h4>All Colors</h4>
            {keys(theme.colors.colors).map((colorName, index) => {
              const colorOrPalette = theme.colors.colors[colorName];

              if (typeof colorOrPalette === 'string') {
                return (
                  <Stack key={index} gap={['10px']}>
                    <h4>{colorName}</h4>
                    <div>
                      <ColorSwatch key={index} name={colorName} color={colorOrPalette}></ColorSwatch>
                    </div>
                  </Stack>
                );
              }
              if (typeof colorOrPalette === 'object' && (colorOrPalette as Color)['h'] !== undefined) {
                return (
                  <Stack key={index} gap={['10px']}>
                    <h4>{colorName}</h4>
                    <div>
                      <ColorSwatch key={index} name={colorName} color={colorOrPalette as Color}></ColorSwatch>{' '}
                    </div>
                  </Stack>
                );
              }

              if (typeof colorOrPalette === 'object') {
                const palette = colorOrPalette as Record<ColorShades5, Color>;
                const shades = keys(palette);

                return (
                  <Stack key={index} gap={['10px']}>
                    <h4>{colorName}</h4>
                    <Cluster
                      key={index}
                      justifyContent={['flex-start', 'flex-start', 'flex-start']}
                      alignItems={['flex-start']}
                      gap={['10px', '0px']}
                    >
                      {shades.map((shadeName, index) => {
                        const color = palette[shadeName];

                        return (
                          <div key={index}>
                            <ColorSwatch
                              key={index}
                              shadeNumber={shadeName}
                              name={colorName}
                              color={color}
                            ></ColorSwatch>
                          </div>
                        );
                      })}
                    </Cluster>
                  </Stack>
                );
              }

              return null;
            })}

            <h4>Color Intents</h4>

            {keys(theme.colors.colorIntents).map((colorName, index) => {
              const colorOrPalette = theme.colors.colorIntents[colorName];
              if (typeof colorOrPalette === 'string') {
                return (
                  <Stack key={index} gap={['10px']}>
                    <h4>{colorName}</h4>
                    <div>
                      <ColorSwatch key={index} name={colorName} color={colorOrPalette}></ColorSwatch>
                    </div>
                  </Stack>
                );
              }
              if (typeof colorOrPalette === 'object' && (colorOrPalette as Color)['h'] !== undefined) {
                return (
                  <Stack key={index} gap={['10px']}>
                    <h4>{colorName}</h4>
                    <div>
                      <ColorSwatch key={index} name={colorName} color={colorOrPalette as Color}></ColorSwatch>
                    </div>
                  </Stack>
                );
              }
              return null;
            })}
          </Stack>
        </Details>

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

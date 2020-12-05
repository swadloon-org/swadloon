import { Cluster, getCSSColor, keys, lightenColor, Stack, ColorSwatch } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { useTreatTheme } from '../hooks/treat-theme';
import { Layout } from '../layouts/layout';
import { Providers } from '../layouts/providers';
import { ProjectPageProps } from '../props/page.props';
import * as styleRefs from './index.treat';
import { Color, ColorShades5 } from '@newrade/core-design-system';

const PageComponent: React.FC<FilePageProps> = (props) => {
  const styles = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();
  return (
    <div className={styles.wrapper}>
      <Stack id={'Design System'} gap="2em">
        <h1>Design System - {cssTheme.name}</h1>

        <Stack id={'Foundations'} gap="1.5em">
          <h2>Foundations</h2>

          <Stack gap="1em">
            <h3>Typography</h3>
          </Stack>

          <Stack id={'Colors'} gap="1em">
            <h3>Colors</h3>
            <h4>All Colors</h4>

            <pre>{getCSSColor(lightenColor(theme.colors.colors.primary[100], 20))}</pre>

            <Stack gap={'1em'}>
              {cssTheme.colors?.colors
                ? keys(cssTheme.colors?.colors).map((color) => {
                    if (cssTheme.colors?.colors[color] && typeof cssTheme.colors?.colors[color] !== 'object') {
                      return (
                        <div>
                          <div
                            style={{
                              backgroundColor: cssTheme.colors.colors[color] as string,
                              height: cssTheme.sizing?.sizes.desktop.x5,
                              boxShadow: cssTheme.effects?.shadows.light,
                            }}
                          ></div>
                          {color}
                        </div>
                      );
                    }

                    const palettes = cssTheme.colors?.colors[color] as Record<string, string>;

                    return (
                      <Stack>
                        <Cluster>
                          {palettes
                            ? keys(palettes).map((shade) => {
                                return palettes[shade] ? (
                                  <div>
                                    <div
                                      style={{
                                        backgroundColor: palettes[shade] as string,
                                        height: cssTheme.sizing?.sizes.desktop.x5,
                                        boxShadow: cssTheme.effects?.shadows.light,
                                      }}
                                    ></div>
                                    {shade}
                                  </div>
                                ) : null;
                              })
                            : null}
                        </Cluster>
                        <div>{color}</div>
                      </Stack>
                    );
                  })
                : null}
            </Stack>

            <h4>Colors Intents</h4>
            {cssTheme.colors?.colorIntents &&
              keys(cssTheme.colors?.colorIntents).map((color) => {
                return <div key={color}>{color}</div>;
              })}
          </Stack>

          <Stack id={'Effects'} gap="1em">
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

          <Stack id={'Sizing'} gap="1em">
            <h3>Sizing</h3>

            <h4>Sizes</h4>
            {cssTheme.sizing?.sizes &&
              keys(cssTheme.sizing.sizes).map((size) => {
                return cssTheme?.sizing?.sizes[size] ? (
                  <div key={size}>
                    <label>{size}</label>
                    <Stack gap="1em">
                      {keys(cssTheme?.sizing?.sizes[size]).map((step) => {
                        return (
                          <div
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
        </Stack>

        <Stack gap="1em">
          {keys(theme.colors.colors).map((colorName, index) => {
            const colorOrPalette = theme.colors.colors[colorName];

            if (typeof colorOrPalette === 'string') {
              return <ColorSwatch key={index} name={colorName} color={colorOrPalette}></ColorSwatch>;
            }
            if (typeof colorOrPalette === 'object' && (colorOrPalette as Color)['h'] !== undefined) {
              return <ColorSwatch key={index} name={colorName} color={colorOrPalette as Color}></ColorSwatch>;
            }

            if (typeof colorOrPalette === 'object') {
              const palette = colorOrPalette as Record<ColorShades5, Color>;
              const shades = keys(palette);

              return shades.map((shadeName, index) => {
                const color = palette[shadeName];
                return <ColorSwatch key={index} shadeNumber={shadeName} name={colorName} color={color}></ColorSwatch>;
              });
            }
            return null;
          })}
        </Stack>

        <Stack id={'Components'} gap="1.5em">
          <h2>Components</h2>
        </Stack>
      </Stack>
    </div>
  );
};

const Page: React.FC<ProjectPageProps> = (props) => {
  return (
    <Providers>
      <Layout>
        <PageComponent {...props}></PageComponent>
      </Layout>
    </Providers>
  );
};

export default Page;

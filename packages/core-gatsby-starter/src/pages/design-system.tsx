import { Cluster, getCSSColor, keys, lightenColor, Stack } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { useTreatTheme } from '../hooks/treat-theme';
import { ProjectPageProps } from '../props/page.props';
import * as styleRefs from './index.treat';

const PageComponent: React.FC<ProjectPageProps> = (props) => {
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

        <Stack id={'Components'} gap="1.5em">
          <h2>Components</h2>
        </Stack>
      </Stack>
    </div>
  );
};

const Page: React.FC<ProjectPageProps> = (props) => {
  return <PageComponent {...props}></PageComponent>;
};

export const context = {
  test: 1,
};

export default Page;

import React from 'react';
import { Color, ColorShades5 } from '@newrade/core-design-system';
import { IoIosHeart } from 'react-icons/io';
import { useStyles } from 'react-treat';
import * as styleRefs from './design-system.treat';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { Stack } from '../layout/stack/stack';
import { Heading } from '../components/heading/heading';
import { keys } from '../utilities/utilities';
import { ColorSwatch } from '../components/color/color-swatch';

type Props = {};

export const DesignSystemComponent: React.FC<Props> = (props) => {
  const styles = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();

  if (!(cssTheme && theme)) {
    return <div className={styles.wrapper}>Please provide a theme</div>;
  }

  return (
    <div className={styles.wrapper}>
      <Stack id={'Design System'} gap="2em">
        <h1>Design System - {cssTheme.name}</h1>

        <Stack id={'Foundations'} gap="1.5em">
          <h2>Foundations</h2>

          <Stack id={'Typography'} gap="1em">
            <h3>Typography</h3>

            <h4>Titles</h4>

            <Heading>Hey</Heading>

            <h4>Headings</h4>
            <h4>Labels</h4>
            <h4>Paragraphs</h4>
          </Stack>

          <IoIosHeart />

          <Stack id={'Colors'} gap="1em">
            <h4>All Colors</h4>
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

            <h4>Color Intents</h4>
            {keys(theme.colors.colorIntents).map((colorName, index) => {
              const colorOrPalette = theme.colors.colorIntents[colorName];

              if (typeof colorOrPalette === 'string') {
                return <ColorSwatch key={index} name={colorName} color={colorOrPalette}></ColorSwatch>;
              }
              if (typeof colorOrPalette === 'object' && (colorOrPalette as Color)['h'] !== undefined) {
                return <ColorSwatch key={index} name={colorName} color={colorOrPalette as Color}></ColorSwatch>;
              }
              return null;
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
        </Stack>

        <Stack id={'Components'} gap="1.5em">
          <h2>Components</h2>
        </Stack>
      </Stack>
    </div>
  );
};

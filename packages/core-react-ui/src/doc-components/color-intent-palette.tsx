import React from 'react';

import {
  Color,
  ColorPalette as ColorType,
  ColorShades5,
  ColorShadesGrey,
} from '@newrade/core-design-system';

import { Stack } from '../layout/stack';
import { keys } from '../utilities-iso/utilities';

import { ColorIntentSwatchDark } from './color-intent-swatch-dark';
import { ColorIntentSwatchLight } from './color-intent-swatch-light';

import * as styles from './color-palette.css';

type Props = {
  colorName: string;
  colorOrPalette:
    | string
    | Color
    | Record<ColorShades5, Color>
    | Record<ColorShadesGrey, Color>
    | Record<string, Color>;
};

export const ColorIntentPalette: React.FC<Props> = ({ colorName, colorOrPalette }) => {
  if (typeof colorOrPalette === 'string') {
    return (
      <Stack gap={['10px']}>
        <ColorIntentSwatchLight name={colorName} color={colorOrPalette}></ColorIntentSwatchLight>
      </Stack>
    );
  }

  if (typeof colorOrPalette === 'object') {
    const palette = colorOrPalette as ColorType;
    const intents = keys(palette);

    return (
      <div className={styles.wrapper}>
        {intents.map((shadeName, index) => {
          const color = palette[shadeName];
          if (shadeName === '25' || shadeName === '200' || shadeName === '300')
            return (
              <ColorIntentSwatchLight
                key={index}
                name={colorName}
                color={color as any}
              ></ColorIntentSwatchLight>
            );
          else
            return (
              <ColorIntentSwatchDark
                key={index}
                name={colorName}
                color={color as any}
              ></ColorIntentSwatchDark>
            );
        })}
      </div>
    );
  }

  return null;
};

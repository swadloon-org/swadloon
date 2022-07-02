import React from 'react';

import {
  ColorShades5,
  ColorShades7,
  ColorShades10,
  ColorShadesGrey,
} from '@newrade/core-design-system';

import { Stack } from '../layout/stack.js';
import { keys } from '../utilities-iso/utilities.js';

import * as styles from './color-palette.css.js';
import { ColorSwatch } from './color-swatch.js';

type Props = {
  colorName: string;
  color:
    | string
    | Record<ColorShades5, string>
    | Record<ColorShades7, string>
    | Record<ColorShades10, string>
    | Record<ColorShadesGrey, string>
    | Record<string, string>;
};

export const ColorPalette: React.FC<Props> = ({ colorName, color }) => {
  if (typeof color === 'string') {
    return (
      <Stack gap={['10px']}>
        <ColorSwatch name={colorName} color={color}></ColorSwatch>
      </Stack>
    );
  }

  if (typeof color === 'object') {
    const palette = color;
    const shades = keys(palette);

    return (
      <div className={styles.wrapper}>
        {shades.map((shadeName, index) => {
          const color = palette[shadeName];

          return (
            <ColorSwatch
              key={index}
              shadeNumber={shadeName}
              name={colorName}
              color={color as any}
            ></ColorSwatch>
          );
        })}
      </div>
    );
  }

  return null;
};

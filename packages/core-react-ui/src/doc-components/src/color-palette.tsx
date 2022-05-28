import React from 'react';

import {
  ColorShades5,
  ColorShades7,
  ColorShades10,
  ColorShadesGrey,
} from '@newrade/core-design-system';

import { Stack } from '../layout/stack';
import { keys } from '../utilities-iso/utilities';

import { ColorSwatch } from './color-swatch';

import * as styles from './color-palette.css';

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

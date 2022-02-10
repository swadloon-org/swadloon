import React from 'react';

import {
  ColorShades5,
  ColorShades7,
  ColorShades10,
  ColorShadesGrey,
} from '@newrade/core-design-system';

import { Stack } from '../layout/stack';
import { keys } from '../utilities-iso/utilities';

import { ColorSwatchLight } from './color-swatch-light';

import * as styles from './color-palette.css';

type Props = {
  colorName: string;
  color:
    | string
    | Record<ColorShades5, string>
    | Record<ColorShades7, string>
    | Record<ColorShades10, string>
    | Record<ColorShadesGrey, string>;
};

export const ColorPalette: React.FC<Props> = ({ colorName, color }) => {
  if (typeof color === 'string') {
    return (
      <Stack gap={['10px']}>
        <ColorSwatchLight name={colorName} color={color}></ColorSwatchLight>
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
            <ColorSwatchLight
              key={index}
              shadeNumber={shadeName}
              name={colorName}
              color={color as any}
            ></ColorSwatchLight>
          );
        })}
      </div>
    );
  }

  return null;
};

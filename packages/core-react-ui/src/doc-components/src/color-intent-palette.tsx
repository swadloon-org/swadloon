import React from 'react';

import {
  Color,
  ColorPalette as ColorType,
  ColorShades5,
  ColorShadesGrey,
} from '@newrade/core-design-system';

import { Stack } from '../../layout-components/stack.js';
import { keys } from '../../utilities-iso/utilities.js';

import { ColorIntentSwatch } from './color-intent-swatch.js';
import * as styles from './color-palette.css.js';

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
        <ColorIntentSwatch name={colorName} color={colorOrPalette}></ColorIntentSwatch>
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
          return (
            <ColorIntentSwatch
              key={index}
              name={colorName}
              color={color as any}
            ></ColorIntentSwatch>
          );
        })}
      </div>
    );
  }

  return null;
};

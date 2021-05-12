import {
  Color,
  ColorPalette as ColorPaletteType,
  ColorShades5,
  ColorShadesGrey,
} from '@newrade/core-design-system';
import { Stack } from '@newrade/core-react-ui';
import { keys } from '@newrade/core-react-ui/lib/utilities';
import React from 'react';
import { useStyles } from 'react-treat';
import * as stylesRef from './color-palette.treat';
import { ColorSwatch } from './color-swatch';

type Props = {
  colorName: string;
  colorOrPalette:
    | string
    | Color
    | Record<ColorShades5, Color>
    | Record<ColorShadesGrey, Color>
    | Record<string, Color>;
};

export const ColorPalette: React.FC<Props> = ({ colorName, colorOrPalette }) => {
  const { styles } = useStyles(stylesRef);

  if (typeof colorOrPalette === 'string') {
    return (
      <Stack gap={['10px']}>
        <ColorSwatch name={colorName} color={colorOrPalette}></ColorSwatch>
      </Stack>
    );
  }
  if (typeof colorOrPalette === 'object' && (colorOrPalette as Color)['h'] !== undefined) {
    return (
      <Stack gap={['10px']}>
        <ColorSwatch name={colorName} color={colorOrPalette as any}></ColorSwatch>{' '}
      </Stack>
    );
  }

  if (typeof colorOrPalette === 'object') {
    const palette = colorOrPalette as ColorPaletteType;
    const shades = keys(palette);

    return (
      <div className={styles.wrapper}>
        {shades.map((shadeName, index) => {
          const color = palette[shadeName];
          if (shadeName === 'baseHue' || shadeName === 'baseSat') {
            return null;
          }
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

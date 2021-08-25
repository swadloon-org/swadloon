import {
  Color,
  ColorPalette as ColorPaletteType,
  ColorShades5,
  ColorShadesGrey,
} from '@newrade/core-design-system';
import { Stack } from '@newrade/core-react-ui';
import { keys } from '@newrade/core-react-ui/utilities';
import React from 'react';
import { useStyles } from 'react-treat';
import * as stylesRef from './color-palette.treat';
import { ColorSwatchDark } from './color-swatch-dark';
import { ColorSwatchLight } from './color-swatch-light';

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
        <ColorSwatchLight name={colorName} color={colorOrPalette}></ColorSwatchLight>
      </Stack>
    );
  }
  if (typeof colorOrPalette === 'object' && (colorOrPalette as Color)['h'] !== undefined) {
    return (
      <Stack gap={['10px']}>
        <ColorSwatchDark name={colorName} color={colorOrPalette as any}></ColorSwatchDark>{' '}
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
          if (
            shadeName === '0' ||
            shadeName === '0-reversed' ||
            shadeName === '25' ||
            shadeName === '50' ||
            shadeName === '100' ||
            shadeName === '100-reversed' ||
            shadeName === '200' ||
            shadeName === '200-reversed' ||
            shadeName === '300' ||
            shadeName === '400'
          )
            return (
              <ColorSwatchLight
                key={index}
                shadeNumber={shadeName}
                name={colorName}
                color={color as any}
              ></ColorSwatchLight>
            );
          else
            return (
              <ColorSwatchDark
                key={index}
                shadeNumber={shadeName}
                name={colorName}
                color={color as any}
              ></ColorSwatchDark>
            );
        })}
      </div>
    );
  }

  return null;
};

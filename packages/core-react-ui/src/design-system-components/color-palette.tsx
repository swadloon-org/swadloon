import { Color, ColorShades5, ColorShadesGrey } from '@newrade/core-design-system';
import React from 'react';
import { useStyles } from 'react-treat';
import { ColorSwatch, keys, Stack, useTreatTheme } from '..';
import { Switcher } from '../layout/switcher';
import * as stylesRef from './color-palette.treat';

type Props = {
  colorName: string;
  colorOrPalette: string | Color | Record<ColorShades5, Color> | Record<ColorShadesGrey, Color> | Record<string, Color>;
};

export const ColorPalette: React.FC<Props> = ({ colorName, colorOrPalette }) => {
  const { styles } = useStyles(stylesRef);
  const { cssTheme } = useTreatTheme();

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
        <ColorSwatch name={colorName} color={colorOrPalette as Color}></ColorSwatch>{' '}
      </Stack>
    );
  }

  if (typeof colorOrPalette === 'object') {
    const palette = colorOrPalette as Record<ColorShades5, Color>;
    const shades = keys(palette);

    return (
      <div className={styles.wrapper}>
        {shades.map((shadeName, index) => {
          const color = palette[shadeName];
          return <ColorSwatch key={index} shadeNumber={shadeName} name={colorName} color={color}></ColorSwatch>;
        })}
      </div>
    );
  }

  return null;
};

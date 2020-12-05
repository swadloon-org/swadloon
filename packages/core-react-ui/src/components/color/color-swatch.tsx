import React from 'react';
import { Colors, ColorPalette, Color, ColorShadesGrey, ColorShades5 } from '@newrade/core-design-system/src';
import { keys } from '../../utilities/utilities';
import { useStyles } from 'react-treat';
import * as stylesRef from './color-swatch.treat';
import { type } from 'case';
import { min } from 'lodash';
import { getCSSColor } from '../../utilities/colors.utilities';

type OwnProps = {
  color: Color | string;
  name: string;
  shadeNumber?: string;
};

export const ColorSwatch: React.FC<OwnProps> = (props) => {
  const { styles } = useStyles(stylesRef);

  const colorObject = typeof props.color === 'object' ? (props.color as Color) : null;
  const colorString = typeof props.color === 'string' ? (props.color as string) : null;

  console.log(colorString);
  return (
    <div className={styles.wrapper}>
      <div style={{ backgroundColor: `${getCSSColor({ ...colorObject })}` }} className={styles.squareColor}></div>
      <div className={styles.containerText}>
        <div className={styles.colorName}>{props.name}</div>
        <div className={styles.shadeNumber}>{props.shadeNumber}</div>
        <div className={styles.colorHSL}>
          {colorObject != null
            ? `${colorObject?.h} ${colorObject?.s} ${colorObject?.l} ${
                colorObject?.a === undefined ? '' : colorObject?.a
              }`
            : colorString}
        </div>
      </div>
    </div>
  );
};

import { Color } from '@newrade/core-design-system';
import React from 'react';
import { useStyles } from 'react-treat';
import { getCSSColor } from '../../utilities/colors.utilities';
import * as stylesRef from './color-swatch.treat';

type OwnProps = {
  color: Color | string;
  name: string;
  shadeNumber?: string;
};

export const ColorSwatch: React.FC<OwnProps> = (props) => {
  const { styles } = useStyles(stylesRef);

  const colorObject = typeof props.color === 'object' ? (props.color as Color) : null;
  const colorString = typeof props.color === 'string' ? (props.color as string) : null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.squareColor} style={{ backgroundColor: `${getCSSColor({ ...colorObject })}` }}></div>
      <div className={styles.containerText}>
        <div>
          <label className={styles.colorName}>
            {props.name}
            {props.shadeNumber ? ` - ${props.shadeNumber}` : ''}
          </label>
        </div>

        <label className={styles.colorHSL}>
          {colorObject != null
            ? `${colorObject?.h} ${colorObject?.s} ${colorObject?.l} ${
                colorObject?.a === undefined ? '' : colorObject?.a
              }`
            : colorString}
        </label>
      </div>
    </div>
  );
};

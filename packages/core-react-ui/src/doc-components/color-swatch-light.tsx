import React, { HTMLAttributes } from 'react';

import { kebab } from 'case';

import { Color, LABEL_SIZE, TEXT_STYLE, Variant } from '@newrade/core-design-system';

import { Stack } from '../layout/stack';
import { Label } from '../text/label';
import { sizeVars } from '../theme';
import { getCSSColor, getCSSHexColor } from '../utilities-theme/colors.utilities';

import * as styles from './color-swatch.css';

type OwnProps = HTMLAttributes<any> & {
  color: Color | string;
  name: string;
  shadeNumber?: string;
};

export const ColorSwatchLight: React.FC<OwnProps> = ({ id, style, className, ...props }) => {
  const colorObject = typeof props.color === 'object' ? (props.color as Color) : null;
  const cssColorString = colorObject ? getCSSColor(colorObject) : '';

  return (
    <Stack id={id} style={style} className={styles.wrapper} gap={[sizeVars.x2]}>
      <div className={styles.squareColor} style={{ backgroundColor: `${cssColorString}` }}>
        <Stack gap={[sizeVars.x2]}>
          <Label
            variant={LABEL_SIZE.xSmall}
            variantLevel={Variant.primary}
            variantStyle={TEXT_STYLE.bold}
          >
            {`${props.name ? `${kebab(props.name)}-` : ''}${
              props.shadeNumber ? `${kebab(props.shadeNumber)}` : ''
            }`}
          </Label>
          <Label
            variant={LABEL_SIZE.xSmall}
            variantLevel={Variant.primary}
            variantStyle={TEXT_STYLE.normal}
          >
            <code>{`${getCSSHexColor(props.color as Color)}`}</code>
          </Label>
        </Stack>
      </div>
    </Stack>
  );
};

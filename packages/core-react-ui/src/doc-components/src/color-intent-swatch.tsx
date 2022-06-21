import React, { HTMLAttributes } from 'react';

import { kebab } from 'case';

import { Color, LABEL_SIZE, TEXT_STYLE, Variant } from '@newrade/core-design-system';

import { Stack } from '../layout/stack.js';
import { Label } from '../text/label.js';
import { sizeVars } from '../theme.js';
import { getCSSColorVar } from '../utilities-iso/utilities-iso.js';

import * as styles from './color-swatch.css.js';

type OwnProps = HTMLAttributes<any> & {
  color: Color | string;
  name: string;
  shadeNumber?: string;
};

export const ColorIntentSwatch: React.FC<OwnProps> = ({ id, style, className, ...props }) => {
  const colorObject = typeof props.color === 'object' ? (props.color as Color) : null;
  const cssColorString = colorObject ? getCSSColorVar(colorObject) : '';

  return (
    <Stack id={id} style={style} className={styles.wrapper} gap={[sizeVars.x2]}>
      <div className={styles.squareColor} style={{ backgroundColor: `${cssColorString}` }}>
        <Stack gap={[sizeVars.x2]}>
          <Label
            variant={LABEL_SIZE.xSmall}
            variantLevel={Variant.primary}
            textStyle={TEXT_STYLE.bold}
          >
            {`${props.name ? `${kebab(props.name)}-` : ''}
            }`}
          </Label>
          <Label
            variant={LABEL_SIZE.xSmall}
            variantLevel={Variant.primary}
            textStyle={TEXT_STYLE.normal}
          >
            <code>{`${getCSSColorVar(props.color as Color)}`}</code>
          </Label>
        </Stack>
      </div>
    </Stack>
  );
};

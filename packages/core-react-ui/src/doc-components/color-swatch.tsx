import React, { HTMLAttributes } from 'react';

import { kebab } from 'case';

import { Color, LABEL_SIZE, TEXT_STYLE, Variant } from '@newrade/core-design-system';

import { Stack } from '../layout/stack';
import { Label } from '../text/label';
import { sizeVars } from '../theme';
import { getCSSVarValue } from '../utilities-browser';

import * as styles from './color-swatch.css';

type OwnProps = HTMLAttributes<any> & {
  color: string;
  name: string;
  shadeNumber?: string;
};

export const ColorSwatch: React.FC<OwnProps> = ({ color, name, shadeNumber, ...props }) => {
  return (
    <Stack classNames={[styles.wrapper]} gap={[sizeVars.x2]} {...props}>
      <div className={styles.squareColor} style={{ backgroundColor: `${color}` }}>
        <Stack gap={[sizeVars.x2]}>
          <Label
            variant={LABEL_SIZE.xSmall}
            variantLevel={Variant.primary}
            textStyle={TEXT_STYLE.bold}
            className={styles.text}
          >
            {`${name ? `${kebab(name)}-` : ''}${shadeNumber ? `${kebab(shadeNumber)}` : ''}`}
          </Label>
          <Label
            variant={LABEL_SIZE.xSmall}
            variantLevel={Variant.primary}
            textStyle={TEXT_STYLE.normal}
            className={styles.text}
          >
            <code>{`${getCSSVarValue(color)}`}</code>
          </Label>
        </Stack>
      </div>
    </Stack>
  );
};

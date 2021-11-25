import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';

import { kebab } from 'case';

import { Color, LABEL_SIZE, TEXT_STYLE, Variant } from '@newrade/core-design-system';
import { Label, Stack, useTreatTheme } from '@newrade/core-react-ui';
import { getCSSColor } from '@newrade/core-react-ui/utilities';

import * as stylesRef from './color-swatch.treat';

type OwnProps = HTMLAttributes<any> & {
  color: Color | string;
  name: string;
  shadeNumber?: string;
};

export const ColorIntentSwatchLight: React.FC<OwnProps> = ({ id, style, className, ...props }) => {
  const { styles } = useStyles(stylesRef);
  const { cssTheme } = useTreatTheme();

  const colorObject = typeof props.color === 'object' ? (props.color as Color) : null;
  const cssColorString = colorObject ? getCSSColor(colorObject) : '';

  return (
    <Stack id={id} style={style} className={styles.wrapper} gap={[cssTheme.sizing.var.x2]}>
      <div className={styles.squareColor} style={{ backgroundColor: `${cssColorString}` }}>
        <Stack gap={[cssTheme.sizing.var.x2]}>
          <Label
            variant={LABEL_SIZE.xSmall}
            variantLevel={Variant.primary}
            variantStyle={TEXT_STYLE.bold}
          >
            {`${props.name ? `${kebab(props.name)}-` : ''}
            }`}
          </Label>
          <Label
            variant={LABEL_SIZE.xSmall}
            variantLevel={Variant.primary}
            variantStyle={TEXT_STYLE.normal}
          >
            <code>{`${getCSSColor(props.color as Color)}`}</code>
          </Label>
        </Stack>
      </div>
    </Stack>
  );
};

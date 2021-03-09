import { Color, LABEL_SIZE, TEXT_LEVEL } from '@newrade/core-design-system';
import { Label, Stack, useTreatTheme } from '@newrade/core-react-ui';
import { getCSSColor, getCSSHexColor } from '@newrade/core-react-ui/lib/utilities';
import { kebab } from 'case';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as stylesRef from './color-swatch.treat';

type OwnProps = HTMLAttributes<any> & {
  color: Color | string;
  name: string;
  shadeNumber?: string;
};

export const ColorSwatch: React.FC<OwnProps> = ({ id, style, className, ...props }) => {
  const { styles } = useStyles(stylesRef);
  const { cssTheme } = useTreatTheme();

  const colorObject = typeof props.color === 'object' ? (props.color as Color) : null;
  const cssColorString = colorObject ? getCSSColor(colorObject) : '';

  return (
    <Stack id={id} style={style} className={styles.wrapper} gap={[cssTheme.sizing.var.x2]}>
      <div className={styles.squareColor} style={{ backgroundColor: `${cssColorString}` }}></div>

      <Stack gap={[cssTheme.sizing.var.x1]}>
        <Label variant={LABEL_SIZE.xSmall} variantLevel={TEXT_LEVEL.secondary}>
          {`${props.name ? `${kebab(props.name)}-` : ''}${props.shadeNumber ? `${kebab(props.shadeNumber)}` : ''}`}
        </Label>
        <Label variant={LABEL_SIZE.xSmall} variantLevel={TEXT_LEVEL.secondary}>
          <code>{`${getCSSHexColor(props.color as Color)}`}</code>
        </Label>
      </Stack>
    </Stack>
  );
};

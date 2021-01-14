import { Color, LABEL_SIZE, TEXT_LEVEL } from '@newrade/core-design-system';
import React from 'react';
import { useStyles } from 'react-treat';
import { getCSSColor } from '../utilities/colors.utilities';
import * as stylesRef from './color-swatch.treat';
import { Stack } from '../layout/stack';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { Label } from '../components/text/label';
import { kebab } from 'case';

type OwnProps = {
  color: Color | string;
  name: string;
  shadeNumber?: string;
};

export const ColorSwatch: React.FC<OwnProps> = (props) => {
  const { styles } = useStyles(stylesRef);
  const { cssTheme } = useTreatTheme();

  const colorObject = typeof props.color === 'object' ? (props.color as Color) : null;
  const colorString = typeof props.color === 'string' ? (props.color as string) : null;
  const cssColorString = colorObject ? getCSSColor(colorObject) : '';

  return (
    <Stack className={styles.wrapper} gap={[cssTheme.sizing.var.x1]}>
      <div className={styles.squareColor} style={{ backgroundColor: `${cssColorString}` }}></div>

      <Stack gap={[cssTheme.sizing.var.x1]}>
        <div>
          <Label variant={LABEL_SIZE.xSmall} variantLevel={TEXT_LEVEL.secondary} className={styles.colorName}>
            {`${props.name ? `${kebab(props.name)}-` : ''}${props.shadeNumber ? `${kebab(props.shadeNumber)}` : ''}`}
          </Label>
        </div>

        {/* <Label variant={LABEL_SIZE.xSmall} className={styles.colorHSL}>
          <pre>{cssColorString || colorString}</pre>
        </Label> */}
      </Stack>
    </Stack>
  );
};

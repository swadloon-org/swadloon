import React, { CSSProperties, HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';

import { kebab } from 'case';

import { BoxShadow, Variant } from '@newrade/core-design-system';
import { Label, Stack, useTreatTheme } from '@newrade/core-react-ui';
import { getCSSBoxShadow } from '@newrade/core-react-ui/utilities';

import * as stylesRef from './shadow-swatch.treat';

type OwnProps = HTMLAttributes<any> & {
  shadow: BoxShadow | string;
  shadowStyle?: CSSProperties | undefined;
  name: string;
  size: number | string;
};

export const ShadowSwatch: React.FC<OwnProps> = ({
  id,
  style,
  className,
  shadow,
  shadowStyle,
  name,
  size,
  ...props
}) => {
  const { styles } = useStyles(stylesRef);
  const { cssTheme, theme } = useTreatTheme();

  const shadowObject = typeof shadow === 'object' ? (shadow as BoxShadow) : null;
  const cssShadowString = shadowObject ? getCSSBoxShadow(shadowObject) : shadow;

  return (
    <Stack id={id} style={style} gap={[cssTheme.sizing.var.x3]} {...props}>
      <div
        className={styles.shadow}
        style={{ width: size, height: size, boxShadow: `${cssShadowString}`, ...shadowStyle }}
      >
        {props.children}
      </div>

      <Label variantLevel={Variant.secondary}>{`${kebab(name)}`}</Label>
    </Stack>
  );
};

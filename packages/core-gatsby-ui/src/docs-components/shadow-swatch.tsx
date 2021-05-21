import { BoxShadow, Variant } from '@newrade/core-design-system';
import { Label, Stack, useTreatTheme } from '@newrade/core-react-ui';
import { getCSSBoxShadow } from '@newrade/core-react-ui/lib/utilities';
import { kebab } from 'case';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as stylesRef from './shadow-swatch.treat';

type OwnProps = HTMLAttributes<any> & {
  shadow: BoxShadow;
  name: string;
  size: number;
};

export const ShadowSwatch: React.FC<OwnProps> = ({
  id,
  style,
  className,
  shadow,
  name,
  size,
  ...props
}) => {
  const { styles } = useStyles(stylesRef);
  const { cssTheme, theme } = useTreatTheme();

  const shadowObject = typeof shadow === 'object' ? (shadow as BoxShadow) : null;
  const cssShadowString = shadowObject ? getCSSBoxShadow(shadowObject) : '';

  return (
    <Stack id={id} style={style} gap={[cssTheme.sizing.var.x3]} {...props}>
      <div
        className={styles.shadow}
        style={{ width: size, height: size, boxShadow: `${cssShadowString}` }}
      ></div>

      <Label variantLevel={Variant.secondary}>{`${kebab(name)}`}</Label>
    </Stack>
  );
};

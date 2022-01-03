import React, { CSSProperties, HTMLAttributes } from 'react';

import { kebab } from 'case';

import { BoxShadow, Variant } from '@newrade/core-design-system';

import { Stack } from '../layout/stack';
import { Label } from '../text/label';
import { sizeVars } from '../theme';
import { getCSSBoxShadow } from '../utilities/effects.utilities';

import * as styles from './shadow-swatch.css';

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
  const shadowObject = typeof shadow === 'object' ? (shadow as BoxShadow) : null;
  const cssShadowString = shadowObject ? getCSSBoxShadow(shadowObject) : shadow;

  return (
    <Stack id={id} style={style} gap={[sizeVars.x3]} {...props}>
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

import { LABEL_SIZE, Variant } from '@newrade/core-design-system';
import { Label, PrimitiveProps, useCommonProps } from '@newrade/core-react-ui';
import { pascal } from 'case';
import React from 'react';
import { useStyles } from 'react-treat';
import * as stylesRef from './icon-box.treat';

type Props = PrimitiveProps & {
  iconName: string;
};

export const IconBox: React.FC<Props> = ({ id, style, className, iconName, ...props }) => {
  const { styles } = useStyles(stylesRef);
  const commonProps = useCommonProps({
    id,
    style,
    className,
    classNames: [styles.wrapper],
    ...props,
  });

  const formattedIconName = pascal(iconName);

  return (
    <div {...commonProps}>
      <div className={styles.icon}>{props.children}</div>
      <Label variantLevel={Variant.secondary} variant={LABEL_SIZE.xSmall}>
        {formattedIconName}
      </Label>
    </div>
  );
};

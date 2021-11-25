import React from 'react';
import { useStyles } from 'react-treat';

import { ICON } from '@newrade/core-design-system';

import { IconComp } from '../icons/icon';
import { getMergedClassname } from '../utilities/component.utilities';

import { InputSelectProps } from './input.props';
import * as styleRefs from './input.treat';

export const InputSelect = React.memo(
  React.forwardRef<HTMLSelectElement, InputSelectProps>(function InputText(
    { id, style, className, disabled, state = 'rest', variant, variantSize, icon, Icon, ...props },
    ref
  ) {
    const { styles } = useStyles(styleRefs);
    const classNames = getMergedClassname([
      className,
      styles.rest,
      styles.primary,
      styles.medium,
      styles.iconPaddingRight,
      state === 'error' ? styles.error : '',
    ]);
    const renderedId = id || props.name || '';

    return (
      <div className={styles.wrapper}>
        <select ref={ref} id={renderedId} style={style} className={classNames} {...props}></select>
        <IconComp name={ICON.CHEVRON_DOWN} className={styles.icon}></IconComp>
      </div>
    );
  })
);

import React, { SelectHTMLAttributes } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';
import { useStyles } from 'react-treat';
import { PrimitiveProps } from '../primitive/primitive.props';
import { getMergedClassname } from '../utilities/component.utilities';
import * as styleRefs from './input.treat';

type Props = PrimitiveProps<'select'> &
  SelectHTMLAttributes<any> & {
    state?: 'rest' | 'error';
  };

export const InputSelect = React.memo(
  React.forwardRef<HTMLSelectElement, Props>(function InputText(
    { id, style, className, state = 'rest', ...props },
    ref
  ) {
    const { styles } = useStyles(styleRefs);
    const classNames = getMergedClassname([
      className,
      styles.rest,
      styles.primary,
      styles.medium,
      state === 'error' ? styles.error : '',
    ]);
    const renderedId = id || props.name || '';

    return (
      <div className={styles.wrapper}>
        <select ref={ref} id={renderedId} style={style} className={classNames} {...props}></select>
        <IoChevronDownOutline className={styles.icon} />
      </div>
    );
  })
);
